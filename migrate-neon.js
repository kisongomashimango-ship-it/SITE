#!/usr/bin/env node
/**
 * Migration Neon PostgreSQL pour DW EVENT
 * Crée table events identique SQLite
 */

const { Pool } = require('pg');
const url = require('url');

console.log('🐬 Migration Neon PostgreSQL...\n');

const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_atF5zMkP0EOu@ep-mute-brook-alc6k5vo-pooler.c-3.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require';

const params = url.parse(DATABASE_URL, true);
const auth = (params.auth || '').split(':');
const pool = new Pool({
  user: auth[0],
  password: auth[1],
  host: params.hostname,
  port: params.port || 5432,
  database: params.pathname?.replace('/', '') || 'neondb',
  ssl: { rejectUnauthorized: false }
});

// 1. DROP table si existe
pool.query('DROP TABLE IF EXISTS events CASCADE', (err) => {
  if (err) console.error('⚠️ DROP:', err.message);
  
  // 2. CREATE table events (identique SQLite)
  const createTable = `
    CREATE TABLE events (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      date DATE NOT NULL,
      time TIME NOT NULL,
      location TEXT NOT NULL,
      description TEXT,
      category VARCHAR(50) DEFAULT 'other',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    
    -- Index performance
    CREATE INDEX idx_events_date ON events(date);
    CREATE INDEX idx_events_category ON events(category);
  `;
  
  pool.query(createTable, (err, res) => {
    if (err) {
      console.error('❌ CREATE TABLE échouée:', err.message);
      process.exit(1);
    }
    
    console.log('✅ Table `events` créée!');
    console.log('📊 Structure: id, name, date, time, location, description, category, created_at');
    
    // Insert test event
    pool.query(`INSERT INTO events (name, date, time, location, category) 
                VALUES ('Migration Test ✅', CURRENT_DATE, '14:00', 'Neon PostgreSQL', 'system')
                ON CONFLICT DO NOTHING`, (err) => {
      if (err) console.error('⚠️ Test insert:', err.message);
      
      pool.query('SELECT COUNT(*) as total FROM events', (err, res) => {
        console.log(`📈 ${res?.rows[0].total || 0} événements`);
        pool.end(() => {
          console.log('\n🎉 Migration terminée!');
          console.log('Run: npm start  (PG_DB=true pour PostgreSQL)');
        });
      });
    });
  });
});

