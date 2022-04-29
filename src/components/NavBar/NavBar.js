import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">RIM COMPUTERS</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto my-2 my-lg-0" navbarScroll >
                        <Nav.Link >Home</Nav.Link>
                        <Nav.Link >Manage Inventory</Nav.Link>
                        <Nav.Link >Login</Nav.Link>
                        <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;