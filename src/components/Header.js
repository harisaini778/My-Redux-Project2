import React from "react";
import { Navbar, Nav, Container, Stack, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../store";

export const Header = () => {

    const isAuth = useSelector(
        state => state.auth.isAuthenticated
    );

    const dispatch = useDispatch();

    const logoutHandeler = (event) => {
        event.preventDefault();
        dispatch(authActions.logout());
    }

    return (
        <div>
            <Navbar expand="lg" className="bg-dark" variant="dark">
                <Container >
                    <Navbar.Brand href="#home"><h1>Redux Auth</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {isAuth && <Nav className="ms-auto">
                            <Stack direction="horizontal" gap="2" >
                                <Nav.Link href="MyProducts" >My Products</Nav.Link>
                                <Nav.Link href="MySales">My Sales</Nav.Link>
                                <Button onClick={logoutHandeler} className="btn btn-warning">
                                    Logout
                                </Button>
                            </Stack>
                        </Nav>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )

};
 