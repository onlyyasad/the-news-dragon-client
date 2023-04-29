import React from 'react';
import { Button, Container } from 'react-bootstrap';
import logo from "../../assets/logo.png";
import moment from 'moment'
import Marquee from 'react-fast-marquee';
import NavBarTop from './NavBarTop';

const Header = () => {
    return (
        <>
            <div className='text-center mt-4'>
                <img src={logo} alt="" />
                <p className='mt-2'>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex align-items-center p-2 mb-4 text-white bg-secondary'>
                <Button variant="danger">Latest</Button>
                <Marquee pauseOnHover={true}>
                    I can be a React component, multiple React components, or just some text...
                </Marquee>
            </div>
            <NavBarTop></NavBarTop>
        </>
    );
};

export default Header;