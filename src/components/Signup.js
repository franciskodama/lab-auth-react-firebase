import React, { useRef, useState } from 'react'
import { Card, Button, Form, Alert } from 'react-bootstrap'
import { useUserContext } from '../contexts/AuthContext'

const Signup = () => {
    const emailRef = useRef()
    const nameRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    const [ messagePasswordError, setMessagePasswordError ] = useState('')

    const { signUpUser } = useUserContext()

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = emailRef.current.value
        const name = nameRef.current.value
        const password = passwordRef.current.value
        const passwordConfirm = passwordConfirmRef.current.value

        if(password !== passwordConfirm) {
            return setMessagePasswordError('Passwords do not match')
        } 
        
        if(name && email && password) {
            signUpUser(name, email, password)
        }
    }

  return (
    <>
     <Card>
        <Card.Body>
            <h2 className='text-center mb-4'>Sign Up</h2>
            {messagePasswordError && <p className='error'>{messagePasswordError}</p>}
            <Form onSubmit={handleSubmit}>
                
                <Form.Group id='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='name' ref={nameRef} required />
                </Form.Group>
                
                <Form.Group id='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' ref={emailRef} required />
                </Form.Group>
                
                <Form.Group id='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' ref={passwordRef} required />
                </Form.Group>
                
                <Form.Group id='password-confirm'>
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type='password' ref={passwordConfirmRef} required />
                </Form.Group>
                
                <Button 
                // disabled={loading} 
                className='w-100' type='submit' >
                    Sign Up
                </Button>

            </Form>
        </Card.Body>
     </Card>
    </>
  )
}

export default Signup