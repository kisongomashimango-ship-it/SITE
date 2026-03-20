const sqlite3 = require('sqlite3').verbose();
const path = require('path');

/**
 * Module DB pour DW EVENT
 * Gère la table events avec SQLite
 */

const dbPath = path.join(__dirname, 'events.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Erreur DB:', err.message);
  } else {
    console.log('✅ Base de données connectée:', dbPath);
  }
});

// Créer table si elle n'existe pas
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    date TEXT NOT NULL,
    time TEXT NOT NULL,
    location TEXT NOT NULL,
    description TEXT,
    category TEXT DEFAULT 'other',
    createdAt TEXT DEFAULT CURRENT_TIMESTAMP
  )`);
});

module.exports = db;

