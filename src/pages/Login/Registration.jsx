import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Registration = () => {
    const [accepted, setAccepted] = useState(false);

    const {createUser} = useContext(AuthContext);

    const handleRegistration = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result =>{
            const createdUser = result.user;
            form.reset();
        })
        .catch(error => console.log(error.message))
    }

    return (
        <div className='d-flex justify-content-center'>
            <div className='w-50 d-flex justify-content-center my-4 border'>
                <Form onSubmit={handleRegistration} className='w-75'>
                    <Form.Text className="text-dark text-center">
                        <h3 className='my-5'>Register Your Account</h3>
                    </Form.Text>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter your Name" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name='photo' placeholder="Photo URL" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={() => setAccepted(!accepted)} type="checkbox" name="accept" label="Accept Terms & Conditions" />
                    </Form.Group>
                    <Form.Text className="text-danger">

                    </Form.Text>
                    <Button className='w-100' disabled={!accepted} variant="primary" type="submit">
                        Register
                    </Button>
                    <Form.Text className="">
                        <p className="mt-4">Already Have An Account ? <Link to="/login">Login</Link> </p>
                    </Form.Text>
                </Form>
            </div>
        </div>
    );
};

export default Registration;