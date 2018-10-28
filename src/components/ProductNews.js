import React from 'react';
import './ProductNews.css';

const ProductNews = ({ news }) => {
    return (
        <div className="FakeNews">
            <h1>{news.title}</h1>
            <p>{news.story}</p>
        </div>
    );
};

export default ProductNews;
