import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../pages/Shared/Header';
import NavBarTop from '../pages/Shared/NavBarTop';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
import RightNav from '../pages/Shared/RightNav';

const NewsLayout = () => {
    return (
        <Container>
            <Header></Header>
            <NavBarTop></NavBarTop>
            <Container className='mt-4'>
                <Row>
                    <Col sm={9}>
                        <Outlet></Outlet>
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

export default NewsLayout;