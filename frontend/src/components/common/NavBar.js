import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import React from 'react';


export default class NavBar extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top" sticky="top">
                <Navbar.Brand href="#home">
                    <img
                        src="static/react.svg"
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Brand href="#home"> Sample Dashboad</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/dashboard">Dashboad</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                    <Navbar.Text className="justify-content-end">
                        Signed in as: <a href="#login">James Bond</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
