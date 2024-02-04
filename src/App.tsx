import React from 'react';
import {BrowserRouter as Router, Route, Routes, useRoutes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import './scss/application.scss';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <HomePage/> }/>
      </Routes>
    </Router>
  );
}

export default App;
