import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import image from "../../assets/react.svg"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const NavBarTop = () => {

    const {user, logOut} = useContext(AuthContext);

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto d-flex gap-4">
                        <Link className='text-decoration-none text-black' to="/category/0">Home</Link>
                        <Link className='text-decoration-none text-black'>About</Link>
                        <Link className='text-decoration-none text-black'>Career</Link>
                    </Nav>
                    <Nav>
                        {user? <>
                        <Image className='me-4 w-25' src={image} roundedCircle />
                        <Button onClick={() => logOut()} variant="primary">Logout</Button>
                        </> :
                        <Link to="/login"><Button variant="primary">Login</Button></Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBarTop;