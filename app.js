// app.js (placeholder)
document.getElementById('helloBtn').addEventListener('click', async () => {
  try {
    const res = await fetch('/api/hello');
    const data = await res.json();
    alert(data.message);
  } catch (err) {
    console.error(err);
    alert('Error fetching from backend (check server).');
  }
});

// Replace this file with your real frontend JS.
