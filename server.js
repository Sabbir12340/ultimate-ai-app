// server.js (placeholder)
// Run: npm install && npm start
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve frontend static files (frontend is sibling of backend)
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// Example API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

/*
NOTE:
- Replace or extend this file with your actual backend code.
- If you need additional npm packages, add them to package.json and run `npm install`.
*/
