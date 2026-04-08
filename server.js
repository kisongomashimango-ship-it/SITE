const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./db.js');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname)); // Serve frontend files

// PWA Headers
app.use((req, res, next) => {
  res.setHeader('Service-Worker-Allowed', '/');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  next();
});

// Routes API Événements
app.get('/api/events', (req, res) => {
  const filter = req.query.filter || 'all';
  let query = 'SELECT * FROM events ORDER BY createdAt DESC';
  
  if (filter === 'upcoming') {
    const today = new Date().toISOString().split('T')[0];
    query = `SELECT * FROM events WHERE date >= '${today}' ORDER BY date ASC, time ASC`;
  } else if (filter === 'past') {
    const today = new Date().toISOString().split('T')[0];
    query = `SELECT * FROM events WHERE date < '${today}' ORDER BY date DESC, time DESC`;
  }
  
  db.all(query, (err, events) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(events);
    }
  });
});

app.get('/api/events/stats', (req, res) => {
  db.all('SELECT COUNT(*) as total FROM events', (err, total) => {
    if (err) return res.status(500).json({ error: err.message });
    
    const today = new Date().toISOString().split('T')[0];
    db.all(`SELECT COUNT(*) as upcoming FROM events WHERE date >= '${today}'`, (err, upcoming) => {
      if (err) return res.status(500).json({ error: err.message });
      
      db.all(`SELECT COUNT(*) as past FROM events WHERE date < '${today}'`, (err, past) => {
        if (err) return res.status(500).json({ error: err.message });
        
        res.json({
          total: total[0].total,
          upcoming: upcoming[0].upcoming,
          past: past[0].past
        });
      });
    });
  });
});

app.post('/api/events', (req, res) => {
  const { name, date, time, location, description, category } = req.body;
  const query = `INSERT INTO events (name, date, time, location, description, category) 
                 VALUES (?, ?, ?, ?, ?, ?)`;
  
  db.run(query, [name, date, time, location, description || '', category || 'other'], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ id: this.lastID, success: true });
    }
  });
});

app.delete('/api/events/:id', (req, res) => {
  const id = req.params.id;
  db.run('DELETE FROM events WHERE id = ?', [id], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ success: true, deletedId: parseInt(id) });
    }
  });
});

// 404 handler
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Serveur démarrage
app.listen(PORT, () => {
  console.log(`🚀 Serveur DW EVENT démarré sur http://localhost:${PORT}`);
  console.log(`📊 API: http://localhost:${PORT}/api/events`);
  console.log(`📁 DB: events.db créée automatiquement`);
});

