document.getElementById("chat-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  addMessage("user", message);
  input.value = "";

  // TODO: Replace this with real backend call
  setTimeout(() => {
    const fakeReply = "I'm a virtual assistant. I will help you once connected to the AI model.";
    addMessage("bot", fakeReply);
  }, 500);
});

function addMessage(sender, text) {
  const chatBox = document.getElementById("chat-box");
  const msgDiv = document.createElement("div");
  msgDiv.className = `message ${sender}`;
  msgDiv.innerText = text;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}
