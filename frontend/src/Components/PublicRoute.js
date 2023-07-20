import React from 'react'
import { Outlet,Navigate } from 'react-router-dom';

const item=localStorage.getItem('token');

export const PublicRoute = () => {
    return item?<Navigate to='/'/>:<Outlet/>

}
