import React from "react";
import { Form, Button, Card, Container } from "react-bootstrap";


export const UserForm = () => {

    return (
        <div className="d-flex justify-content-center mt-5">
            <Card>
                <Card.Header>
                    <h2>Redux User Login </h2>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>
                                Email address : 
                            </Form.Label>
                            <Form.Control type="email" placeholder="Enter your email"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>
                            Enter password : 
                            </Form.Label>
                            <Form.Control type="password" placeholder="Enter your password"/>
                        </Form.Group>
                        <Container>
                            <Button>
                                Login
                            </Button>
                        </Container>
                    </Form>
                </Card.Body>
            </Card>
    </div>
);

};

