const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Root route (Render এ লিংক ওপেন করলে কাজ করবে)
app.get("/", (req, res) => {
  res.send("✅ Backend is running on Render!");
});

// Example API route
app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  // শুধু ডেমো রেসপন্স
  res.json({
    reply: `You said: ${message}`,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
