// src/components/layout/Header.jsx

import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Row, Col } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import { FiSearch } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';
import './layout.css';

const subjectsByYear = Array.from({ length: 10 }, (_, i) => ({
  year: `Year ${i + 1}`,
  subjects: ['Maths', 'Science', 'English', 'Hindi', 'Punjabi', 'Music'],
}));

const Header = () => {
  const [showSubjects, setShowSubjects] = useState(false);

  return (
    <>
      <div className="top-bar"></div>
      <Navbar bg="white" expand="lg" className="shadow-sm p-0">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} height="40" alt="TutorExel Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar-nav" />
          <Navbar.Collapse id="main-navbar-nav">
            
            <Nav className="mx-auto nav-centered">
              <NavLink to="/" className="nav-link-base">Home</NavLink>
              <NavLink to="/about" className="nav-link-base">About Us</NavLink>
              
              {/* Custom Dropdown Implementation */}
              <div 
                className="subjects-dropdown-container"
                onMouseEnter={() => setShowSubjects(true)}
                onMouseLeave={() => setShowSubjects(false)}
                onClick={() => setShowSubjects(!showSubjects)}
              >
                {/* This is the visible "Subjects" link */}
                <div className="nav-link-base">
                  Subjects
                  <IoIosArrowDown className={`nav-arrow ${showSubjects ? 'open' : ''}`} />
                </div>
                
                {/* This is the actual dropdown menu, shown conditionally */}
                {showSubjects && (
                  <div className="subjects-mega-menu">
                    <Container>
                      <Row>
                        {subjectsByYear.map((yearGroup) => (
                          <Col key={yearGroup.year}>
                            <h5>{yearGroup.year}</h5>
                            {yearGroup.subjects.map((subject) => (
                               <Link key={subject} to={`/subjects/${yearGroup.year.replace(' ', '-').toLowerCase()}/${subject.toLowerCase()}`}>
                                {subject}
                              </Link>
                            ))}
                          </Col>
                        ))}
                      </Row>
                    </Container>
                  </div>
                )}
              </div>

              <NavLink to="/pricing" className="nav-link-base">Pricing</NavLink>
              <NavLink to="/contact" className="nav-link-base">Contact Us</NavLink>
              <NavLink to="/careers" className="nav-link-base">Careers</NavLink>
            </Nav>

            <Nav className="align-items-center justify-content-end" style={{ gap: '2rem' }}>
              <Nav.Link href="#search" className="text-dark-navy">
                <FiSearch size={24} />
              </Nav.Link>
              <Button variant="secondary-blue" className="d-inline-flex align-items-center">
                Free Trial
              </Button>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;