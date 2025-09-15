const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Root route → Render লিংক ওপেন করলে Not Found আর দেখাবে না
app.get("/", (req, res) => {
  res.send("✅ Backend is running on Render!");
});

// Example API route
app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  // ডেমো রেসপন্স (পরে এখানে AI API কল বসানো যাবে)
  res.json({
    reply: `You said: ${message}`,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
