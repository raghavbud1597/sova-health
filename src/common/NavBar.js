import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import logo from './../images/logo.webp';

export default function NavBar() {
    return (
        <Navbar expand="lg" fixed="top" className="nav-bar">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" height="60px"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between align-items-center">
                    <Nav
                        activeKey="/"
                        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                        className="justify-content-center w-100 nav-link-item"
                    >
                        <Nav.Item>
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/howitworks">How It Works</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="In Progress">Pricing</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="In Progress">Science</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="In Progress">FAQS</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="In Progress">About Us</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Button variant="danger" className="rounded-pill font-weight-bolder px-5 py-2 text-nowrap">
                        Get Started
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
