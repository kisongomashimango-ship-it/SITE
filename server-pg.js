const express = require('express');
const cors = require('cors');
const path = require('path');
const { Pool } = require('pg');
const url = require('url');
const dotenv = require('dotenv');

// Charge .env automatiquement
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// DATABASE_URL from .env or process.env
const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  console.error('❌ DATABASE_URL manquante (.env ou env var)');
  console.log('💡 Exemple .env: DATABASE_URL=postgresql://user:pass@host/db');
  process.exit(1);
}

console.log('🔗 DATABASE_URL loaded:', DATABASE_URL.split('@')[0] + '@***');

// Parse pour pg Pool
const params = url.parse(DATABASE_URL, true);
const auth = (params.auth || '').split(':');
const pool = new Pool({
  user: auth[0],
  password: auth[1],
  host: params.hostname,
  port: params.port || 5432,
  database: params.pathname?.replace('/', '') || 'neondb',
  ssl: { rejectUnauthorized: false },
  max: 20,
  idleTimeoutMillis: 30000
});

// Test connexion au démarrage
pool.query('SELECT version() as pg_version', (err, res) => {
  if (err) {
    console.error('❌ PG Connexion KO:', err.message);
  } else {
    console.log('✅ PostgreSQL connecté:', res.rows[0].pg_version);
  }
});

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname));

// PWA Headers
app.use((req, res, next) => {
  res.setHeader('Service-Worker-Allowed', '/');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  next();
});

// Serve events.html
app.get('/events.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'events.html'));
});

// Routes API PostgreSQL (async-like avec callbacks)
app.get('/api/events', (req, res) => {
  const filter = req.query.filter || 'all';
  let query = 'SELECT * FROM events ORDER BY created_at DESC';
  const values = [];
  const today = new Date().toISOString().split('T')[0];
  
  if (filter === 'upcoming') {
    query = 'SELECT * FROM events WHERE date >= $1 ORDER BY date ASC, time ASC';
    values.push(today);
  } else if (filter === 'past') {
    query = 'SELECT * FROM events WHERE date < $1 ORDER BY date DESC, time DESC';
    values.push(today);
  }
  
  pool.query(query, values, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result.rows);
  });
});

app.get('/api/events/stats', (req, res) => {
  const today = new Date().toISOString().split('T')[0];
  pool.query('SELECT COUNT(*)::int as total FROM events', (err, total) => {
    if (err) return res.status(500).json({ error: err.message });
    pool.query('SELECT COUNT(*)::int as upcoming FROM events WHERE date >= $1', [today], (err, upcoming) => {
      if (err) return res.status(500).json({ error: err.message });
      pool.query('SELECT COUNT(*)::int as past FROM events WHERE date < $1', [today], (err, past) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({
          total: total.rows[0].total,
          upcoming: upcoming.rows[0].upcoming,
          past: past.rows[0].past
        });
      });
    });
  });
});

app.post('/api/events', (req, res) => {
  const { name, date, time, location, description, category = 'other' } = req.body;
  const query = `INSERT INTO events (name, date, time, location, description, category) 
                 VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`;
  pool.query(query, [name, date, time, location, description || '', category], (err, result) => {
    if (err) {
      console.error('POST event error:', err);
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: result.rows[0].id, success: true });
  });
});

app.delete('/api/events/:id', (req, res) => {
  const id = parseInt(req.params.id);
  pool.query('DELETE FROM events WHERE id = $1 RETURNING id', [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: !!result.rows.length, deletedId: id });
  });
});

// 404 fallback
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Graceful shutdown
process.on('SIGINT', () => {
  pool.end(() => console.log('PG Pool fermé'));
  process.exit(0);
});

app.listen(PORT, () => {
  console.log(`\n🚀 DW EVENT PostgreSQL http://localhost:${PORT}`);
  console.log(`📱 Événements: http://localhost:${PORT}/events.html`);
  console.log(`📊 API: http://localhost:${PORT}/api/events`);
  console.log(`💾 Neon PostgreSQL Live!`);
});

