import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer';
import LeftNav from '../pages/Shared/LeftNav';
import NewsHome from '../pages/Home/Category';
import RightNav from '../pages/Shared/RightNav';
import { Outlet, useLoaderData } from 'react-router-dom';
import NavBarTop from '../pages/Shared/NavBarTop';

const Main = () => {

    return (
        <Container>
            <Header></Header>
            <NavBarTop></NavBarTop>
            <Container className='mt-4'>
                <Row>
                    <Col sm={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col sm={6}>
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

export default Main;