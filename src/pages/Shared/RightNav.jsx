import React from 'react';
import { Button, ButtonGroup, Card } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from './QZone';
import bg from '../../assets/bg.png'


const RightNav = () => {
    return (
        <div>
            <div>
                <h4 className='mb-2'>Login With</h4>
                <Button className='mb-2 w-100' variant="outline-secondary"><FaGoogle /> Login with Google</Button>
                <Button className='w-100' variant="outline-secondary"><FaGithub /> Login with GitHub</Button>
            </div>
            <div className='my-4'>
                <h4>Find Us On</h4>
                <ButtonGroup className='w-100' vertical>
                    <Button className='text-start text-primary py-3' variant="outline-secondary"><FaFacebookF /> Facebook</Button>
                    <Button className='text-start text-primary py-3' variant="outline-secondary"><FaTwitter /> Twitter</Button>
                    <Button className='text-start text-danger py-3' variant="outline-secondary"><FaInstagram /> Instagram</Button>
                </ButtonGroup>
            </div>
            <div className='p-3 bg-light'>
                <QZone></QZone>
            </div >
            <div className='mt-4'>
                <Card className="bg-dark text-center text-white">
                    <Card.Img src={bg} alt="Card image" />
                    <Card.ImgOverlay className='d-flex align-items-center'>
                        <div>
                            <Card.Title className='fs-2'>Create an Amazing Newspaper</Card.Title>
                            <Card.Text>
                                Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
                            </Card.Text>
                            <Button variant="danger">Learn More</Button>
                        </div>
                    </Card.ImgOverlay>
                </Card>
            </div>
        </div>
    );
};

export default RightNav;