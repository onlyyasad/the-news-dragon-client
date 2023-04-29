import React from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import image from "../../assets/react.svg"

const NavBarTop = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link to="/">Home</Nav.Link>
                        <Nav.Link to="/about">About</Nav.Link>
                        <Nav.Link to="/career">Career</Nav.Link>
                    </Nav>
                    <Nav>
                        <Image className='me-4 w-25' src={image} roundedCircle />
                        <Button variant="primary">Login</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBarTop;