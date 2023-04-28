import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";



const auth = getAuth(app);

const Register = () => {
    const [email,setEmail] = useState('')

    const handleSubmit=(event)=>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email,password);

        createUserWithEmailAndPassword(auth,email,password)
        .then((result) => {
            const logUser = result.user;
            console.log(logUser)
          })
          .catch((error) => {
            console.log(error.message);
    
          });

    }
    const emailHandle=(event)=>{
        // console.log(event.target.value);
        setEmail()
    }
    const passwordHandle=(event)=>{
        // console.log(event.target.value);
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Please Register</h2>
            <Form onSubmit={handleSubmit}>
               <input onChange={emailHandle} type="email" name="email" id="email" placeholder='email here'/><br />
               <input onChange={passwordHandle} className='mt-4 mb-4' type="password" name="password" id="pass" placeholder='password here'/><br />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Register;