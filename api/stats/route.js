import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

export async function GET() {
  try {
    const totalRes = await pool.query('SELECT COUNT(*) as total FROM events');
    return Response.json({ total: parseInt(totalRes.rows[0].total) });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

