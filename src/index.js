import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Saludo from './Components/Saludo';
import Example from './Components/Example';
import Timer from './Components/Timer';
import DynamicTitle from './Components/DynamicTitle';
import WelcomeMessage from './Components/WelcomeMessage';
import BackgroundChange from './Components/BackgroundChange';
import FormularioRegistro from './Components/FormularioRegistro';
import Container from './Components/Container';
import CounterApp from './Components/CounterApp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Usuarios from './Components/Usuarios';
import Fetch from './Components/Fetch';
import TodoList from './Components/TodoList';
import AddTodo from './Components/AddTodo';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Fetch />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
