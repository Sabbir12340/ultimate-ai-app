const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public")); // Frontend serve করার জন্য

app.get("/", (req, res) => {
  res.send("✅ Backend is running on Render!");
});

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;
  res.json({ reply: `You said: ${message}` });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
