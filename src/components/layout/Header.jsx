import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logo from '../../assets/images/logo.png';
import { FiSearch } from 'react-icons/fi';

const Header = () => {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm sticky-top py-3">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} height="40" alt="TutorExel Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#home" className="fw-bold text-primary-orange">Home</Nav.Link>
            <Nav.Link href="#about" className="fw-medium">About Us</Nav.Link>
            <Nav.Link href="#subjects" className="fw-medium">Subjects</Nav.Link>
            <Nav.Link href="#pricing" className="fw-medium">Pricing</Nav.Link>
            <Nav.Link href="#contact" className="fw-medium">Contact Us</Nav.Link>
            <Nav.Link href="#faqs" className="fw-medium">FAQs</Nav.Link>
            <Nav.Link href="#search" className="ms-lg-3"><FiSearch size={22} /></Nav.Link>
            <Button variant="primary-orange" className="ms-lg-3 mt-3 mt-lg-0">Free Trial</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
