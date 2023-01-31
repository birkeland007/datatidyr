import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './style.css';
import Editor from './views/editor';
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} exact path="/" />
        <Route element={<Editor />} exact path="/editor" />
      </Routes>
    </Router>
  );
};

createRoot(document.getElementById('app')).render(<App />);
