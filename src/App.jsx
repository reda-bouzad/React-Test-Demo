import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Card from './Card/Card';
import Detail from './Detail/detail';
import List from './List/List'

function App() {


  return (
    <Router>
      <div className="main">

      </div>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
