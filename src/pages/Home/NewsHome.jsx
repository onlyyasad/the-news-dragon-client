import React from 'react';
import { Button, Card } from 'react-bootstrap';
import NewsCard from '../News/NewsCard';

const NewsHome = ({ news }) => {
    return (
        <div>
            <h4>Dragon News Home</h4>
            <div>
                {
                    news.map(singleNews => <NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default NewsHome;