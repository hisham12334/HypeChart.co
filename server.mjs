import express from 'express';
import pg from 'pg'; 
import dotenv from 'dotenv';
import cors from 'cors'; // <-- We are still importing this

dotenv.config({ path: '.env.local' });

const { Pool } = pg;
const app = express();
const port = process.env.PORT || 3001; 

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL environment variable is not set!');
  process.exit(1);
}

// --- NEW CORS SETTING ---
// This line allows ALL domains. 
// It's a great way to debug if CORS is the problem.
app.use(cors()); 
// --- END OF NEW SETTING ---

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false 
  }
});

const createTable = async () => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS waitlist (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255),
      whatsapp VARCHAR(50),
      timestamp TIMESTAMPTZ DEFAULT NOW()
    );
  `;
  try {
    await pool.query(createTableQuery);
    console.log('"waitlist" table is ready.');
  } catch (error) {
    console.error('Unable to create "waitlist" table:', error);
    process.exit(1);
  }
};

app.use(express.json());

app.post('/api/waitlist', async (req, res) => {
  const { email, whatsapp } = req.body;

  if (!email && !whatsapp) {
    return res.status(400).json({ message: 'Email or WhatsApp number is required.' });
  }

  const insertQuery = `
    INSERT INTO waitlist (email, whatsapp)
    VALUES ($1, $2)
    RETURNING id;
  `;
  const values = [email || null, whatsapp || null];

  try {
    const result = await pool.query(insertQuery, values);
    console.log('New waitlist entry added with ID:', result.rows[0].id);
    res.status(201).json({ message: 'Successfully added to waitlist!' });
  } catch (error) {
    console.error('Failed to write to database:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

app.listen(port, '0.0.0.0', async () => {
  await createTable();
  console.log(`Backend server running on port ${port}`);
});