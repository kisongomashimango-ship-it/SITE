import { Pool } from 'pg';
import { parse } from 'url';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

export async function GET(request) {
  try {
    const events = await pool.query('SELECT * FROM events ORDER BY created_at DESC');
    return Response.json(events.rows);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, date, time, location, description, category } = body;
    const result = await pool.query(
      'INSERT INTO events (name, date, time, location, description, category) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [name, date, time, location, description || '', category || 'other']
    );
    return Response.json(result.rows[0]);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

