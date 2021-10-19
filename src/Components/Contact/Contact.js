import React from 'react';
import { Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="container-fluid">
            <h1>Contact US</h1>
            <div className="w-75 mx-auto">
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        
                        <Form.Label>Email address</Form.Label>
                        
                        <Form.Control type="email" placeholder="name@example.com" />
                        
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        
                        <Form.Label>Example textarea</Form.Label>
                        
                        <Form.Control as="textarea" rows={3} />
                        
                    </Form.Group>

                    <button className="bg-primary px-4 py-2 my-4 fw-bold text-light">Submit</button>
                    
                </Form>
                
            </div>
        </div>
    );
};

export default Contact;