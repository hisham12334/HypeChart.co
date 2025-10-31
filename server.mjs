import express from 'express';
import pg from 'pg'; // Import node-postgres
import dotenv from 'dotenv'; // Import dotenv

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const { Pool } = pg;
const app = express();
// Render will provide a PORT, or we default to 3001
const port = process.env.PORT || 3001; 

// Check if DATABASE_URL is set
if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL environment variable is not set!');
  console.log('Please create a .env.local file and add your Neon connection string as DATABASE_URL');
  process.exit(1);
}

// Create a new pool to manage connections
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    // Neon requires SSL but some environments may need this
    rejectUnauthorized: false 
  }
});

// Function to create the table if it doesn't exist
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

// The API endpoint for the waitlist
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

// Start the server and create the table
app.listen(port, '0.0.0.0', async () => {
  await createTable();
  console.log(`Backend server running on port ${port}`);
});