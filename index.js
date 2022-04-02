import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Signup from './components/signup';
import Login from './components/login';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/sign in' element={<Link />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

