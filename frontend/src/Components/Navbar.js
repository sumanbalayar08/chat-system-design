import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="bg-green-600 ">
      <ul className="flex py-5 items-center">
       <li className="ml-2 text-white font-medium italic text-2xl">
        <Link to='/chat'>Chat</Link>
       </li>
       <li className="ml-5 text-white font-medium text-md">
        <Link to='/'>Sign In</Link>
       </li >
       <li className="ml-5 text-white font-medium text-md">
        <Link to='/signup'>Sign Up</Link>
       </li>
       
      </ul>
    </div>
  );
};
export default Navbar;
