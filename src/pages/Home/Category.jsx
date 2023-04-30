import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import NewsCard from '../News/NewsCard';
import { useLoaderData, useParams } from 'react-router-dom';

const Category = () => {
    const {id} = useParams();
    const categoryNews = useLoaderData();
    return (
        <div>
            <h4>Dragon News Home</h4>
            <div>
                {
                    categoryNews.map(singleNews => <NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default Category;