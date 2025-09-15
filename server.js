// server.js
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all origins
app.use(cors());
app.use(express.json());

// Example API route for AI response
app.post('/api/generate', (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: 'Prompt missing' });

  // Sample AI response (replace with real AI logic later)
  const response = `AI Response: ${prompt}`;
  res.json({ result: response });
});

// Optional: simple health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
