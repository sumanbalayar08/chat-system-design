import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChatBody = ({ messages }) => {
  const navigate = useNavigate();

  const handleLeaveChat = () => {
    localStorage.removeItem('userName');
    navigate('/');
    window.location.reload();
  };

  if (!Array.isArray(messages) || messages.length === 0) {
    // Handle the case when messages is not an array or it is empty
    return (
      <>
        <header className="w-full md:w-auto h-5 items-center justify-between flex p-20 bg-slate-500 text-white">
          <p>Hangout with Colleagues</p>
          <button className="p-2 border cursor-pointer bg-red-700 justify-end" onClick={handleLeaveChat}>
            LEAVE CHAT
          </button>
        </header>
        <div className="fixed text-lg font-medium">
          <p>No messages available</p>
        </div>
      </>
    );
  }

  return (
    <>
      <header className="w-full md:w-auto h-5 items-center justify-between flex p-20 bg-slate-500 text-white">
        <p>Hangout with Colleagues</p>
        <button className="p-2 border cursor-pointer bg-red-700 justify-end" onClick={handleLeaveChat}>
          LEAVE CHAT
        </button>
      </header>

      <div className="fixed text-lg font-medium">
        {messages.map((message) =>
          message.username === localStorage.getItem('token') ? (
            <div className="w-full bg-slate-600 h-full" key={message.id}>
              <p className="text-red text-right">You</p>
              <div className="ml-auto  ">
                <p >{message.text}</p>
              </div>
            </div>
          ) : (
            <div className="w-full bg-slate-600 h-full" key={message.id}>
              <p>{message.name}</p>
              <div className="message__recipient">
                <p>{message.text}</p>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default ChatBody;