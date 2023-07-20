import React from 'react'
import { Outlet,Navigate } from 'react-router-dom';


const item=localStorage.getItem('token');

const PrivateRoute = () => {
  return item?<Outlet/>:<Navigate to='/signin'/>
  
}

export default PrivateRoute;