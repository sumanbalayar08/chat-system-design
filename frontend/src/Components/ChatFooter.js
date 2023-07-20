import React, { useState } from 'react';

const ChatFooter = ({socket}) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    //console.log(message)
    if (message.trim() && localStorage.getItem('token')) {
        socket.emit('message', {
          text: message,
          username: localStorage.getItem('token'),
          id: `${socket.id}${Math.random()}`,
          socketID: socket.id,
        });
      }    
      setMessage('');
  };
  return (
    <div className="p-10 bg-slate-500 h-20">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="border cursor-pointer bg-blue-900">SEND</button>
      </form>
    </div>
  );
};

export default ChatFooter;