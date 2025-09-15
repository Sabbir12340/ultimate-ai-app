// app.js (Ultimate AI App - GitHub Pages + Render ready)

const generateBtn = document.getElementById('generateBtn');
const promptInput = document.getElementById('prompt');
const resultEl = document.getElementById('result');

// Replace this URL with your actual Render backend URL
const BACKEND_URL = 'https://ultimate-ai-app.onrender.com/api/generate';

generateBtn.addEventListener('click', async () => {
  const prompt = promptInput.value.trim();
  if (!prompt) return alert('Please enter a prompt');

  resultEl.textContent = 'Generating...';

  try {
    const res = await fetch(BACKEND_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });

    const data = await res.json();
    resultEl.textContent = data.result || 'No response';
  } catch (err) {
    console.error(err);
    resultEl.textContent = 'Error connecting to backend';
  }
});
