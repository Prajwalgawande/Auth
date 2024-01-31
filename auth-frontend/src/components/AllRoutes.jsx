import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Login from './login-register/Login';
import Register from './login-register/Register';
import Home from './Home';
const AllRoutes = () => {
    const isAuthenticated = !!localStorage.getItem('token');
  return (

    <Router>
            <Routes>
                <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" replace />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>

  )
}

export default AllRoutes