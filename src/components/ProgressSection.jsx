// src/components/ProgressSection.jsx

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import progressBoy from '../assets/progress-boy.png';
import checkmarkIcon from '../assets/checkmark-icon.png';
import { FaArrowRight } from 'react-icons/fa';

// Data for the progress points
const progressFeatures = [
    { text: 'WHAT YOUR CHILD HAS ', bold: 'LEARNED' },
    { text: 'STRENGTHS AND AREAS FOR ', bold: 'IMPROVEMENT' },
    { text: 'NEXT STEPS ', bold: 'RECOMMENDED BY THE TUTOR' },
];

const ProgressSection = () => {
    return (
        <section className="py-5 bg-white">
            <Container>
                <Row className="align-items-center g-5">
                    {/* Left Content Column */}
                    <Col lg={6}>
                        <h2 className="fw-bolder" style={{ fontSize: '2.8rem' }}>Progress You Can See</h2>
                        <p className="text-secondary mt-3 mb-4 fs-5">
                            Every 4 weeks, you’ll receive a <strong>clear progress report outlining:</strong>
                        </p>
                        
                        {/* Progress Points List */}
                        <div className="d-grid gap-3">
                            {progressFeatures.map((feature, index) => (
                                <div key={index}>
                                    <div className="feature-item">
                                        <img src={checkmarkIcon} alt="Checkmark" style={{ width: '28px', height: '28px' }} />
                                        <span>
                                            {feature.text}<strong>{feature.bold}</strong>
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Button variant="primary-orange" size="lg" className="mt-4 d-inline-flex align-items-center">
                            Click here to see a sample report <FaArrowRight className="ms-2" />
                        </Button>
                    </Col>
                    
                    {/* Right Image Column */}
                    <Col lg={6}>
                        <img 
                            src={progressBoy} 
                            alt="Happy student showing progress" 
                            className="img-fluid w-100" 
                            style={{ borderRadius: '40px' }} 
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ProgressSection;