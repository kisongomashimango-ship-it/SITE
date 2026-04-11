#!/usr/bin/env node
/**
 * Script de test de connexion PostgreSQL pour DW EVENT
 * Utilise DATABASE_URL (format postgres://user:pass@host:port/db)
 * Run: DATABASE_URL=postgres://... node pg-test.js
 */

const { Pool } = require('pg');
const url = require('url');

console.log('🧪 Test de connexion PostgreSQL...\n');

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  console.error('❌ Erreur: DATABASE_URL non définie');
  console.log('\n💡 Exemple (Windows):');
  console.log('set DATABASE_URL=postgres://user:pass@localhost:5432/mydb');
  console.log('node pg-test.js');
  process.exit(1);
}

// Parser DATABASE_URL
const params = url.parse(databaseUrl, true);
const auth = (params.auth || '').split(':');

const poolConfig = {
  user: auth[0],
  password: auth[1],
  host: params.hostname,
  port: params.port || 5432,
  database: params.pathname.replace('/', ''),
  ssl: params.protocol === 'postgres:' ? { rejectUnauthorized: false } : false,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
};

const pool = new Pool(poolConfig);

// Test 1: Connexion
pool.query('SELECT 1 as status, version() as pg_version', (err, res) => {
  if (err) {
    console.error('❌ Connexion échouée:');
    console.error('   Erreur:', err.message);
    if (err.code) console.error('   Code:', err.code);
    process.exit(1);
  }

  console.log('✅ Connexion réussie!');
  console.log('   PostgreSQL version:', res.rows[0].pg_version);
  
  // Test 2: Créer table test si n'existe pas
  pool.query(`
    CREATE TABLE IF NOT EXISTS connection_test (
      id SERIAL PRIMARY KEY,
      test_message VARCHAR(255) DEFAULT 'Connexion OK ✅',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `, (err) => {
    if (err) {
      console.error('⚠️  Table test échouée:', err.message);
    } else {
      console.log('✅ Table connection_test créée/OK');
    }
    
    // Fermer pool
    pool.end(() => {
      console.log('\n🎉 Test terminé avec succès!');
      console.log('\n📝 DATABASE_URL valide pour déploiement!');
    });
  });
});

// Gestion des erreurs non capturées
process.on('SIGINT', () => {
  pool.end(() => process.exit(0));
});

