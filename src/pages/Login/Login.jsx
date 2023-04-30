import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const {loginUser} = useContext(AuthContext);

    const [error, setError] = useState("");

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/category/0";

    const handleLogin = event =>{
        setError("")
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
        .then(result =>{
            form.reset();
            navigate(from, {replace: true});
        } )
        .catch(error => setError(error.message))
    }

    return (
        <div className='d-flex justify-content-center'>
            <div className='w-50 d-flex justify-content-center mt-4 border'>
                <Form onSubmit={handleLogin} className='w-75'>
                    <Form.Text className="text-dark text-center">
                        <h3 className='my-5'>Login Your Account</h3>
                    </Form.Text>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>
                    <Button className='w-100' variant="primary" type="submit">
                        Login
                    </Button>
                    <Form.Text className="text-danger">
                        {error && error}
                    </Form.Text>
                    <Form.Text className="">
                        <p className="mt-4">Dont't Have An Account ? <Link to="/registration">Register</Link> </p>
                    </Form.Text>
                </Form>
            </div>
        </div>
    );
};

export default Login;