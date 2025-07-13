// src/components/InfoSection.jsx

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import tutoringGirl from '../assets/tutoring-girl.png';
import checkmarkIcon from '../assets/checkmark-icon.png';
import { FaArrowRight } from 'react-icons/fa';

const features = [
  { regular: 'CHOOSE YOUR ', bold: 'PREFERRED SLOT' },
  { regular: 'PROGRESS REPORTS ALIGNED WITH THE ', bold: 'AUSTRALIAN CURRICULUM' },
  { regular: 'FREE CONSULTATION ', bold: 'AND DEMO CLASS' },
  { regular: 'AUD 23/HOUR - ', bold: 'NO CONTRACTS' },
];

const InfoSection = () => {
  return (
    // We add an inline style to increase the vertical padding
    <section className="bg-white" style={{ padding: '100px 0' }}>
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <img 
              src={tutoringGirl} 
              alt="Student at desk with headphones" 
              className="img-fluid w-100" 
              style={{ borderRadius: '40px' }}
            />
          </Col>
          <Col lg={6}>
            <h2 className="fw-bolder text-dark-navy" style={{ fontSize: '2.5rem' }}>
              Private Online Tutoring Across Australia
            </h2>
            <p className="text-secondary mt-3 mb-4 fs-5">
              One-on-one and group lessons for all grades, subjects, and test preparation.
            </p>
            <div className="d-grid gap-3">
              {features.map((feature, index) => (
                <div key={index}>
                  <div className="feature-item">
                    <img src={checkmarkIcon} alt="Checkmark" style={{ width: '28px', height: '28px' }} />
                    <span>
                      {feature.regular}<strong>{feature.bold}</strong>
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="primary-orange" size="lg" className="mt-4 d-inline-flex align-items-center">
              Book Your Free Trial Class <FaArrowRight className="ms-2" />
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default InfoSection;