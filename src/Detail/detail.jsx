import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import './Detail.css';

function Detail() {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`/data.json`)
           .then(response => {
                return response.json();
            })
           .then(data => {
                const articleData = data.find(item => item.id === id);
                if (articleData) {
                    setArticle(articleData);
                }
            });
    }, [id]);

    if (!article) {
        return <div>Loading...</div>;
    }

    return (
        <div className="detail">
            <h1>{article.title}</h1>
            <img width={300} src={article.image} alt="" srcset="" />
            <p>{article.text}</p>
            <button onClick={() => navigate('/')}>Home Page</button>
        </div>
    );
}

export default Detail;
