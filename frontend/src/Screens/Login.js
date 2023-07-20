import React, { useState} from "react";
import { Link,useNavigate } from "react-router-dom";

const Login = ({socket}) => {

  const[Credential, setCredential] = useState({username:"",password:""});
const navigate=useNavigate();

  const handleSubmit= async (e)=>{
     e.preventDefault(e);
     let response = await fetch("http://localhost:4000/api/loginuser",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({username:Credential.username, password:Credential.password}),
     });
     const data =await response.json();
     //console.log(data.userId)
     if(data.success){ 
        localStorage.setItem('token',data.username);
        socket.emit('newuser',{username:Credential.username,socketID:socket.id})
        navigate('/chat')
     } else{
        console.warn('Failed to Log in')
     }
    }

  const onChange=(e)=>{
    setCredential({...Credential,[e.target.name]:e.target.value});
  }


  return (
    <div className="flexjustify-center items-center max-w-full px-[20%]">
    <form className="bg-black shadow-md rounded px-4 pt-6 pb-8" onSubmit={handleSubmit}>
    <div className="mb-4">
      <label className="block text-white text-sm font-bold mb-2" >
        UserName
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="username" value={Credential.username} onChange={onChange} type="text" placeholder="Enter the Username"/>
    </div>
    
    <div className="mb-8">
      <label className="block text-white text-sm font-bold mb-2" >
        Password
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="password" value={Credential.password} onChange={onChange} type="password" placeholder="Enter password"/>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Login
      </button>
       <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        <Link to='/signup'>Not a User?</Link>
      </button>
    </div>
  </form>
  </div>
  );
};
export default Login;
