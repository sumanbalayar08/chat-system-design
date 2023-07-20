import React from "react";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./Components/Chat";
import Navbar from "./Components/Navbar";
import PrivateRoute from "./Components/PrivateRoute";
import { PublicRoute } from "./Components/PublicRoute";
import  SocketIO  from "socket.io-client";

const socket=SocketIO.connect('http://localhost:4000')

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
       
        <Route path="/chat" element={<Chat socket={socket} />} />
        <Route path="/" element={<Login socket={socket}/>} />
        <Route path="/signup" element={<Register />} />
        
      </Routes>
    </BrowserRouter>
  );
}
