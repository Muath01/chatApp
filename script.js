const socket = io("http://localhost:3000")
const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')


socket.emit('new-user', name)

socket.on('chat-message', data => {
  console.log(data)
})

messageForm.addEventListener("submit", e =>{
  e.preventDefault();
  const message = messageInput.ariaValueMax;
  socket.emit("send-chat-message", message);
  messageInput.value = ""
})
