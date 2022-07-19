import React, { useRef } from 'react'
import { Card, Button, Form } from 'react-bootstrap'
import { useUserContext } from '../contexts/AuthContext'

const Signin = () => {
    const emailRef = useRef()
    const passwordRef = useRef()

    const { signInUser, forgotPassword } = useUserContext()

    const handleSubmit = (e) => {
        e.prevent.Default()
        const email = emailRef.current.value 
        const password = passwordRef.current.value 
        if (email && password) signInUser(email, password);
    }

    const forgotPasswordHandler = () => {
        const email = emailRef.current.value  
        if (email)
        forgotPassword(email).then(() => {
          emailRef.current.value = '';
        });
    };
  
    return (
    <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4"> Login </h2>
                <Form onSubmit={handleSubmit}>

                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required />
                    </Form.Group>
                    
                    <Form.Group id='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' ref={passwordRef} required />
                    </Form.Group>

                <Button className="w-100" type='submit'>
                    Sign In
                    </Button>

                <p className="w-100 text-center mt-2" onClick={forgotPasswordHandler}>Forgot Password?</p>
                </Form>
            </Card.Body>
        </Card>
     </>
    );
  };
  
  export default Signin;