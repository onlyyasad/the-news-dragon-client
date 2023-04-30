import React from 'react';
import { Container } from 'react-bootstrap';
import NavBarTop from '../pages/Shared/NavBarTop';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <Container>
            <NavBarTop></NavBarTop>
            <Outlet></Outlet>
        </Container>
    );
};

export default LoginLayout;