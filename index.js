const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

app.get("/",(req,res) =>{
    console.log("hi")
    res.sendFile(__dirname + "/index.html")
})

server.listen(3000, ()=>{
    console.log("listening on *:3000")
})