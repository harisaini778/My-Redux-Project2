import React from "react";
import { Navbar, Nav, Container,Stack,Button } from "react-bootstrap";

export const Header = () => {

    return (
        <div>
           <Navbar expand="lg" className="bg-primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Redux Auth</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Stack direction = "horizontal" gap="2" >
                                <Nav.Link href="MyProducts" >My Products</Nav.Link>
                                <Nav.Link href="MySales">My Sales</Nav.Link>
                                <Button className="btn btn-warning">
                                 Logout
                                </Button>                    
            </Stack>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
)

};
 