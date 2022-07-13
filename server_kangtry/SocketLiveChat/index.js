// const express = require ('express');
// const app = express();
// const http = require("http");
// const cors =require("cors");
// const {Server} = require("socket.io") 
// app.use(cors());

// const server = http.createServer(app);

// const io = new Server(server,{
//     cors:{
//         origin:"http://localhost:3000",
//         methods:["GET","POST"],
//     },
// });

// io.on("connection",  (socket)=>{
//     console.log(`使用者連線:${socket.id}`);

//     socket.on("加入房間",(data)=>{
//         socket.join(data);  //由client端傳入
//         console.log(`使用者:${socket.id}加入房間:${data}`)
//     });

//     socket.on("sendmessage",(data)=>{  
//         socket.to(data.room).emit("receive_message",data);
//     });

//     socket.on("disconnect",()=>{
//         console.log("無法連接",socket.id)
//     })
// })

// server.listen(8001,()=>{
//     console.log("server運行8001中")
// })

const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", function(socket){
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", function(data) {  //由client端傳入
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", function(data) {  //房間裡的人可以接收
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(8001, () => {
  console.log("SERVER RUNNING");
});