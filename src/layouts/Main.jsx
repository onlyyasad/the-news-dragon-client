import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer';
import LeftNav from '../pages/Shared/LeftNav';
import NewsHome from '../pages/Home/NewsHome';
import RightNav from '../pages/Shared/RightNav';
import { useLoaderData } from 'react-router-dom';

const Main = () => {
    const [news, setNews] = useState([]);
    const loadedNews = useLoaderData();
    
    useEffect(() =>{
        setNews(loadedNews)
    }, [])
    console.log(news)
    return (
        <Container>
            <Header></Header>
            <Container className='mt-4'>
                <Row>
                    <Col sm={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col sm={6}>
                        <NewsHome news={news}></NewsHome>
                    </Col>
                    <Col sm={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </Container>
    );
};

export default Main;