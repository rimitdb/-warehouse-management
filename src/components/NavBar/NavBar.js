import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="success" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">RIM COMPUTERS</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto my-2 my-lg-0" navbarScroll >
                        <Nav.Link className="px-2 text-light" as={Link} to="/">Home</Nav.Link>
                        <Nav.Link className="px-2 text-light" as={Link} to="/manage-inventory">Manage Inventory</Nav.Link>
                        <Nav.Link className="px-2 text-light" as={Link} to="/login">Login</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;