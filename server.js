// const {server} = require('socket.io');
// const io = new server(3000, {cors:{origin:"http://localhost:3000"}})

const io = require('socket.io')(3000)

const users = {}

io.on('connection', socket => {
  socket.emit("chat-message", "hello World")
  socket.on("")  
  socket.on("send-chat-message", message =>{
    console.log(message)
  })
})