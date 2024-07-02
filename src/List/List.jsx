import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';

function List() {

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
        <div className="card-container">
            <h1>Liste de tous les articles</h1>

            {articles.map((article) => (
                <Card key={article.id} id={article.id} title={article.title} text={article.text.substring(1, 50)} image={article.image} />
            ))}
        </div>
    )
}

export default List;