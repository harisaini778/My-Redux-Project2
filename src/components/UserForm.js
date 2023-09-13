import React from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import { useSelector } from "react-redux";


export const UserForm = () => {

    const isAuth = useSelector(state=> state.auth.isAuthenticated);

    const dispatch = useDispatch();

    const loginHandeler = (event) => {
        event.preventDefault();
        dispatch(authActions.login());
}
    return (
        <div className="d-flex justify-content-center mt-5">
            {!isAuth && <Card>
                <Card.Header className="bg-dark">
                    <h2 style={{color:"white"}}>Redux User Login </h2>
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={loginHandeler}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>
                                Email address :
                            </Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>
                                Enter password :
                            </Form.Label>
                            <Form.Control type="password" placeholder="Enter your password" />
                        </Form.Group>
                        <Container>
                            <Button type="submit" className="btn btn-dark">
                                Login
                            </Button>
                        </Container>
                    </Form>
                </Card.Body>
            </Card>}
    </div>
);

};

