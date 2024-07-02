import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Card from './Card/Card';
import Detail from './Detail/detail';

function App() {
  const [articles, setArticles] = useState([]);

  const getData = () => {
    fetch('data.json')
     .then(response => response.json())
     .then(myJson => setArticles(myJson));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Router>
      <div className="main">
        <h1>Liste de tous les articles</h1>
        <div className="card-container">
          {articles.map((article) => (
            <Card key={article.id} id={article.id} title={article.title} text={article.text.substring(1,20)} image={article.image} />
          ))}
        </div>
      </div>
      <Routes>
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
