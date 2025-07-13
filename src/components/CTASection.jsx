// src/components/CTASection.jsx

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ctaFamily from '../assets/cta-family.png';
import { FaArrowRight } from 'react-icons/fa';

const CTASection = () => {
  return (
    // 1. Increase the bottom padding to create more space before the footer.
    // We'll also add a top padding for better spacing above.
    <section className="bg-white" style={{ paddingTop: '50px', paddingBottom: '150px' }}>
      <Container>
        <div className="position-relative">
          <div className="bg-primary-orange-gradient p-5 rounded-4 overflow-hidden">
            <Row className="align-items-center">
              <Col lg={7}>
                <h2 className="display-4 fw-bolder text-dark-navy">
                  Ready to Help Your Child Succeed?
                </h2>
                <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
                  <Button size="lg" className="btn-white-custom">
                    Book Your Free Trial Class
                  </Button>
                  <Button size="lg" variant="secondary-blue">
                    Contact Us to Learn More <FaArrowRight />
                  </Button>
                </div>
              </Col>
              <Col lg={5} className="d-none d-lg-block"></Col>
            </Row>
          </div>
          
          <div className="d-none d-lg-block position-absolute" style={{ 
            bottom: 0,
            right: '-40px',
            zIndex: 1 
          }}>
            <img 
              src={ctaFamily} 
              alt="Happy family" 
              style={{ width: '100%', maxWidth: '520px' }} 
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;