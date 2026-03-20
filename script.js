/**
 * DW EVENT - Premium Event Management
 * Modern & Innovative JavaScript
 */

// ========================================
// DOM Elements
// ========================================
const elements = {
  // Form
  eventForm: document.getElementById('eventForm'),
  eventName: document.getElementById('eventName'),
  eventDate: document.getElementById('eventDate'),
  eventTime: document.getElementById('eventTime'),
  eventLocation: document.getElementById('eventLocation'),
  eventDescription: document.getElementById('eventDescription'),
  eventCategory: document.getElementById('eventCategory'),
  
  // Lists
  eventList: document.getElementById('eventList'),
  
  // Stats
  totalEvents: document.getElementById('totalEvents'),
  upcomingEvents: document.getElementById('upcomingEvents'),
  pastEvents: document.getElementById('pastEvents'),
  
// UI
  themeToggle: document.getElementById('themeToggle'),
  toastContainer: document.getElementById('toastContainer'),
  modal: document.getElementById('eventModal'),
  modalBody: document.getElementById('modalBody'),
  filterTabs: document.querySelectorAll('.filter-tab'),
  navLinks: document.querySelectorAll('.nav-link'),
  scrollTop: document.getElementById('scrollTop'),
};

// ========================================
// State Management
// ========================================
const API_BASE = window.location.origin + '/api';
let events = [];
let currentFilter = 'all';
let isDarkMode = localStorage.getItem('theme') !== 'light';
let abortController = new AbortController();

// ========================================
// Initialize App
// ========================================
async function init() {
  applyTheme();
  setMinDate();
  await loadEvents();
  await updateStats();
  setupEventListeners();
}

async function loadEvents(filter = null) {
  try {
    const params = new URLSearchParams({ filter: filter || currentFilter });
    const response = await fetch(`${API_BASE}/events?${params}`, { signal: abortController.signal });
    if (!response.ok) throw new Error('Erreur chargement');
    events = await response.json();
    renderEvents();
  } catch (err) {
    console.error(err);
    showToast('Erreur chargement événements (localStorage utilisé)', 'error');
    events = JSON.parse(localStorage.getItem('events')) || [];
    renderEvents();
  }
}

// ========================================
// Theme Management
// ========================================
function applyTheme() {
  document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  elements.themeToggle.textContent = isDarkMode ? '🌙' : '☀️';
}

function toggleTheme() {
  isDarkMode = !isDarkMode;
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  applyTheme();
  showToast('Thème mis à jour', 'success');
}

// ========================================
// Date Management
// ========================================
function setMinDate() {
  const today = new Date().toISOString().split('T')[0];
  elements.eventDate.setAttribute('min', today);
}

function formatDate(dateString) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('fr-FR', options);
}

function formatTime(timeString) {
  return timeString;
}

function isUpcoming(dateString) {
  const eventDate = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return eventDate >= today;
}

function isPast(dateString) {
  return !isUpcoming(dateString);
}

// ========================================
// Event Management
// ========================================
async function addEvent(event) {
  event.preventDefault();
  showLoading(true);
  
  try {
    const newEvent = {
      name: elements.eventName.value.trim(),
      date: elements.eventDate.value,
      time: elements.eventTime.value,
      location: elements.eventLocation.value.trim(),
      description: elements.eventDescription.value.trim(),
      category: elements.eventCategory.value
    };
    
    const response = await fetch(`${API_BASE}/events`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newEvent),
      signal: abortController.signal
    });
    
    if (!response.ok) throw new Error('Erreur création');
    
    elements.eventForm.reset();
    await loadEvents(); // Reload all
    showToast('Événement créé avec succès! 🎉', 'success');
  } catch (err) {
    console.error(err);
    showToast('Erreur création (localStorage utilisé)', 'error');
    // Fallback local
    const newEvent = {
      id: Date.now(),
      ...event.target.querySelector('#eventName').value.trim(),
      date: event.target.querySelector('#eventDate').value,
      // ... (simplified fallback)
    };
    events.unshift(newEvent);
    saveEvents();
    renderEvents();
  } finally {
    showLoading(false);
  }
}

async function deleteEvent(id) {
  if (confirm('Êtes-vous sûr de vouloir supprimer cet événement?')) {
    showLoading(true);
    try {
      const response = await fetch(`${API_BASE}/events/${id}`, { 
        method: 'DELETE',
        signal: abortController.signal 
      });
      if (!response.ok) throw new Error('Erreur suppression');
      await loadEvents();
      showToast('Événement supprimé', 'success');
    } catch (err) {
      console.error(err);
      showToast('Erreur suppression', 'error');
      events = events.filter(event => event.id !== parseInt(id));
      saveEvents();
      renderEvents();
    } finally {
      showLoading(false);
    }
  }
}

function saveEvents() {
  localStorage.setItem('events', JSON.stringify(events));
}

// ========================================
// Rendering
// ========================================
function renderEvents() {
  const filteredEvents = filterEvents(events);
  
  if (filteredEvents.length === 0) {
    elements.eventList.innerHTML = `
      <div class="empty-state">
        <span class="empty-icon">🎊</span>
        <h3>Aucun événement</h3>
        <p>Créez votre premier événement pour commencer!</p>
      </div>
    `;
    return;
  }
  
  elements.eventList.innerHTML = filteredEvents.map(event => createEventCard(event)).join('');
  
  // Add event listeners AFTER render
  document.querySelectorAll('.event-delete').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(e.target.closest('.event-delete').dataset.id);
      deleteEvent(id);
    });
  });
  
  document.querySelectorAll('.event-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (!e.target.closest('.event-delete')) {
        const id = parseInt(card.dataset.id);
        showEventModal(id);
      }
    });
  });
}

function createEventCard(event) {
  const categoryLabels = {
    professional: 'Professionnel',
    personal: 'Personnel',
    education: 'Éducation',
    entertainment: 'Divertissement',
    sports: 'Sport',
    other: 'Autre'
  };
  
  const categoryIcons = {
    professional: '💼',
    personal: '🎉',
    education: '📚',
    entertainment: '🎭',
    sports: '⚽',
    other: '📌'
  };
  
  return `
    <div class="event-card new" data-category="${event.category}" data-id="${event.id}">
      <div class="event-card-header">
        <span class="event-category">${categoryIcons[event.category]} ${categoryLabels[event.category]}</span>
        <button class="event-delete" data-id="${event.id}" aria-label="Supprimer">✕</button>
      </div>
      <h3 class="event-title">${escapeHtml(event.name)}</h3>
      <div class="event-details">
        <div class="event-detail">
          <span>📅</span>
          <span>${formatDate(event.date)}</span>
        </div>
        <div class="event-detail">
          <span>⏰</span>
          <span>${formatTime(event.time)}</span>
        </div>
        <div class="event-detail">
          <span>📍</span>
          <span>${escapeHtml(event.location)}</span>
        </div>
      </div>
      ${event.description ? `<p class="event-description">${escapeHtml(event.description)}</p>` : ''}
    </div>
  `;
}

function filterEvents(eventsToFilter) {
  switch (currentFilter) {
    case 'upcoming':
      return eventsToFilter.filter(event => isUpcoming(event.date));
    case 'past':
      return eventsToFilter.filter(event => isPast(event.date));
    default:
      return eventsToFilter;
  }
}

async function updateStats() {
  try {
    const response = await fetch(`${API_BASE}/events/stats`, { signal: abortController.signal });
    if (response.ok) {
      const stats = await response.json();
      elements.totalEvents.textContent = stats.total;
      elements.upcomingEvents.textContent = stats.upcoming;
      elements.pastEvents.textContent = stats.past;
      return;
    }
  } catch (err) {
    console.error(err);
  }
  // Fallback
  elements.totalEvents.textContent = events.length;
  elements.upcomingEvents.textContent = events.filter(event => isUpcoming(event.date)).length;
  elements.pastEvents.textContent = events.filter(event => isPast(event.date)).length;
}

// ========================================
// Modal
// ========================================
function showEventModal(id) {
  const event = events.find(e => e.id === id);
  if (!event) return;
  
  const categoryLabels = {
    professional: 'Professionnel',
    personal: 'Personnel',
    education: 'Éducation',
    entertainment: 'Divertissement',
    sports: 'Sport',
    other: 'Autre'
  };
  
  const categoryIcons = {
    professional: '💼',
    personal: '🎉',
    education: '📚',
    entertainment: '🎭',
    sports: '⚽',
    other: '📌'
  };
  
  elements.modalBody.innerHTML = `
    <h2 style="font-family: var(--font-secondary); margin-bottom: 1rem;">${escapeHtml(event.name)}</h2>
    <p style="color: var(--text-secondary); margin-bottom: 1rem;">
      <span class="event-category">${categoryIcons[event.category]} ${categoryLabels[event.category]}</span>
    </p>
    <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1rem;">
      <p><strong>📅 Date:</strong> ${formatDate(event.date)}</p>
      <p><strong>⏰ Heure:</strong> ${formatTime(event.time)}</p>
      <p><strong>📍 Lieu:</strong> ${escapeHtml(event.location)}</p>
    </div>
    ${event.description ? `<p style="color: var(--text-muted);">${escapeHtml(event.description)}</p>` : ''}
  `;
  
  elements.modal.classList.add('active');
  
  // Close modal on button click
  document.querySelector('.modal-close').onclick = hideModal;
  
  // Close modal on backdrop click
  elements.modal.onclick = (e) => {
    if (e.target === elements.modal) hideModal();
  };
}

function hideModal() {
  elements.modal.classList.remove('active');
}

// ========================================
// Toast Notifications
// ========================================
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  const icon = type === 'success' ? '✅' : '❌';
  
  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <span class="toast-message">${escapeHtml(message)}</span>
    <button class="toast-close" aria-label="Fermer">✕</button>
  `;
  
  elements.toastContainer.appendChild(toast);
  
  // Close button
  toast.querySelector('.toast-close').addEventListener('click', () => {
    toast.remove();
  });
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    toast.remove();
  }, 5000);
}

// ========================================
// Navigation
// ========================================
function handleNavigation(section) {
  elements.navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.dataset.section === section) {
      link.classList.add('active');
    }
  });
  
  // Scroll to section
  const sectionElement = document.getElementById(section);
  if (sectionElement) {
    sectionElement.scrollIntoView({ behavior: 'smooth' });
  }
}

// ========================================
// Filter Tabs
// ========================================
function handleFilter(filter) {
  currentFilter = filter;
  
  elements.filterTabs.forEach(tab => {
    tab.classList.remove('active');
    if (tab.dataset.filter === filter) {
      tab.classList.add('active');
    }
  });
  
  renderEvents();
}

// ========================================
// Utility Functions
// ========================================
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ========================================
// Event Listeners
// ========================================
function setupEventListeners() {
  // Form submission
  elements.eventForm.addEventListener('submit', addEvent);

  // Filter change reloads
  elements.filterTabs.forEach(tab => {
    tab.addEventListener('click', async () => {
      handleFilter(tab.dataset.filter);
      await loadEvents(currentFilter);
    });
  });
  
  // Theme toggle
  elements.themeToggle.addEventListener('click', toggleTheme);
  
  // Filter tabs
  elements.filterTabs.forEach(tab => {
    tab.addEventListener('click', () => handleFilter(tab.dataset.filter));
  });
  
  // Navigation
  elements.navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      handleNavigation(link.dataset.section);
    });
  });
  
  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Escape to close modal
    if (e.key === 'Escape') {
      hideModal();
    }
  });
  
  // Scroll to top button
  if (elements.scrollTop) {
    elements.scrollTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        elements.scrollTop.classList.add('visible');
      } else {
        elements.scrollTop.classList.remove('visible');
      }
    });
  }
}

// ========================================
// Initialize on DOM ready
// ========================================
// Helper functions
function showLoading(show = true) {
  elements.eventList.style.opacity = show ? '0.5' : '1';
  // Add spinner if needed
}

function saveEvents() {
  localStorage.setItem('events', JSON.stringify(events));
}

document.addEventListener('DOMContentLoaded', init);
