async function sendMessage() {
  const input = document.getElementById("userInput").value;
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: input })
  });
  const data = await res.json();
  const chatBox = document.getElementById("chatBox");
  chatBox.innerHTML += `<p><strong>You:</strong> ${input}</p>`;
  chatBox.innerHTML += `<p><strong>AI:</strong> ${data.reply}</p>`;
}
