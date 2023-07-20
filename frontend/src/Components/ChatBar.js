import React, { useState, useEffect } from 'react';

const ChatBar = ({ socket }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on('newUserResponse', (data) => {
      try {
        //const parsedData = JSON.parse(data);
        console.log('Parsed dataArray:', data);
        setUsers(data);
      } catch (error) {
        console.error('Error parsing data:', error);
      }
    });
    console.log(users)
  }, [socket,users]);

  return (
    <div className="h-full bg-slate-700 p-5 border-r border-[#fdfdfd]">
      <h2 className='text-white text-2xl'>Simple Chat</h2>
      <div>
        <h4 className="text-white mt-20">ACTIVE USERS</h4>
        <div className="text-red-500 text-2xl">
          {users.map((user) => (
            <li key={user.socketID} className='text-red-600'>{user.username}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;