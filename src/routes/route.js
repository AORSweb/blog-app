import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../components/login';
import Register from '../components/Register';
import Home from '../components/Home';


const AppRoutes = () => (
  <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
  </Router>
);

export default AppRoutes;