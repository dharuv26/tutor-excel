// src/components/Hero.jsx

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import heroBoy from '../assets/hero-boy.png'; 
import playIcon from '../assets/play-icon.png'; // 1. Import the PNG image
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero-section-bg py-5">
      <Container>
        <Row className="align-items-center gy-5" style={{ minHeight: 'calc(100vh - 90px)' }}>
          <Col lg={6} className="text-center text-lg-start">
            <h1 className="display-4 fw-bolder text-dark-navy">
              Empowering Your Child to Succeed Anywhere
            </h1>
            <p className="lead text-secondary my-4" style={{ maxWidth: '500px' }}>
              Select a plan, set your schedule, and watch your child's skills and confidence grow.
            </p>
            <div className="d-flex flex-column flex-sm-row align-items-center gap-4 justify-content-center justify-content-lg-start">
              <Button variant="primary-orange" size="lg" className="d-inline-flex align-items-center">
                Book Your Free Trial Class <FaArrowRight className="ms-2" />
              </Button>
              <a href="#" className="btn d-inline-flex align-items-center gap-2 fw-semibold text-dark-navy text-decoration-none">
                {/* 2. Use the imported PNG image in an img tag */}
                <img 
                  src={playIcon} 
                  alt="Play Video" 
                  style={{ 
                    width: '36px', 
                    height: '36px',
                    transition: 'transform 0.2s ease-in-out'
                  }} 
                  onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                Watch Now
              </a>
            </div>
          </Col>
          <Col lg={6} className="d-flex justify-content-center position-relative">
            <div 
              className="position-absolute" 
              style={{ 
                width: '100%', 
                height: '100%', 
                maxWidth: '450px',
                background: 'var(--teal-green)',
                clipPath: 'polygon(25% 0%, 100% 25%, 75% 100%, 0% 75%)',
                opacity: '0.8',
                zIndex: 0,
              }}
            ></div>
            <img 
              src={heroBoy} 
              alt="Student learning with headset" 
              className="img-fluid position-relative" 
              style={{ zIndex: 1, maxWidth: '450px' }} 
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;