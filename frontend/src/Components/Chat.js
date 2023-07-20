import React, { useEffect, useState } from 'react'
import ChatBar from './ChatBar'
import ChatBody from './ChatBody'
import ChatFooter from './ChatFooter'

const Chat = ({socket}) => {

const[messages,setMessages]=useState('');

useEffect(()=>{
  socket.on('messageResponse',(data)=>setMessages([...messages,data]));
},[socket,messages]);

  return (
    <div className="w-full h-screen flex items-center">
      <ChatBar socket={socket}/>
      <div className="h-screen ">
        <ChatBody messages={messages}/>
        <ChatFooter socket={socket}/>
      </div>
    </div>
  )
}

export default Chat