import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../components/login';
import Register from '../components/Register';


const AppRoutes = () => (
  <Router>
      <Routes>
        <Route path="/" element={<div>
            <h2>Home Page</h2>
            <br/>
            <p>change url to '/login' </p>
        </div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
  </Router>
);

export default AppRoutes;