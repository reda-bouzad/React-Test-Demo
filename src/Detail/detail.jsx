import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch(`/data.json`) // Adjusted path to match a local JSON file
     .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
     .then(data => {
        const articleData = data.find(item => item.id === id);
        if (articleData) {
          setArticle(articleData);
        } else {
          console.error(`Article with id ${id} not found`);
        }
      })
     .catch(error => console.error('There was a problem with your fetch operation:', error));
  }, [id]); // Dependency array includes id to refetch if it changes

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detail">
      <h1>{article.title}</h1>
      <p>{article.text}</p>
    </div>
  );
}

export default Detail;
