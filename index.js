const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/user");
const Message = require("./models/message");
const PORT = 4000;

mongoose
  .connect("mongodb://localhost:27017/chatApp")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  }); //Local Host for Mongodb Connection

const app = express();
const http = require("http").Server(app);
app.use(express());
app.use(cors());
app.use(express.json())
app.use("/api", require("./routes/UserRoutes"));

http.listen(PORT, () => {
  try {
    console.log("Server Started Successfully");
  } catch (err) {
    console.warn(`Internal Server Error ${err}`);
  }
});

let users = [{ username: '076bei042', socketID: 'w7tTIZ6muyKWvFXDAAAB' },
{ username: 'anju', socketID: '2F-gd4cYJJ2usQmfAAAD' }];

const socketIO=require('socket.io') (http,{
  cors:{
    origin:"http://localhost:3000"
  }
})

socketIO.on('connection',(socket)=>{
  console.log(`User connected ${socket.id}`);

  socket.on('newuser', (data) => {
    users.push(data);
    console.log(users)
    socketIO.emit('newUserResponse', users);
  });

socket.on('message',(data)=>{
  socketIO.emit('messageResponse', data);
})

  socket.on('disconnect',()=>{
    console.log('A user Disconnected')
    users=users.filter((user)=>user.socketID!=socket.id)
    socketIO.emit('newUserResponse', users);
  })
})
