import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer';
import LeftNav from '../pages/Shared/LeftNav';
import NewsHome from '../pages/Home/NewsHome';
import RightNav from '../pages/Shared/RightNav';

const Main = () => {
    return (
        <Container>
            <Header></Header>
            <Container className='mt-4'>
                <Row>
                    <Col sm={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col sm={6}>
                        <NewsHome></NewsHome>
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