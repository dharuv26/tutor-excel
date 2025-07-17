import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import { FiSearch } from 'react-icons/fi';

const Header = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Subjects', path: '/subjects' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <Navbar bg="white" expand="lg" className="shadow-sm sticky-top py-3">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} height="36" alt="TutorExel Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {navLinks.map((link) => (
              <Nav.Link 
                key={link.name} 
                as={NavLink} 
                to={link.path}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? '#FF9E10' : '#FFFFFF',
                  color: isActive ? '#FFFFFF' : '#070709'
                })}
              >
                {link.name}
              </Nav.Link>
            ))}
            <Nav.Link href="#search" className="ms-lg-3"><FiSearch size={22} /></Nav.Link>
            <Button variant="primary-orange" className="btn-primary-orange ms-lg-3 mt-3 mt-lg-0">Free Trial</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
