import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../App';
import { Login } from '../Pages/Login';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signIn" element={<Login />} />
    </Routes>
  );
};

export default Router;
