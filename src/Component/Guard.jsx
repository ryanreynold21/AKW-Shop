import React, { Children } from 'react'
import { Navigate } from 'react-router'

const Guard = ({children}) => {
    const userData = JSON.parse(localStorage.getItem('userData'))
    if(userData?.token) return children;
    else return <Navigate to={'/login'} />
}

export default Guard
