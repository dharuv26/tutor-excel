// src/components/HowItWorks.jsx

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';

import iconAssess from '../assets/icon-assess.png';
import iconPlan from '../assets/icon-plan.png';
import iconExperience from '../assets/icon-experience.png';
import iconLearnGrow from '../assets/icon-learn-grow.png';

const steps = [
    { 
        icon: iconAssess, 
        title: 'Assess', 
        description: "Upload your child's recent assessment scores—or take a free assessment with us to understand their current level." 
    },
    { 
        icon: iconPlan, 
        title: 'Plan', 
        description: "We create a customised learning plan tailored to your child's needs and curriculum." 
    },
    { 
        icon: iconExperience, 
        title: 'Experience', 
        description: 'Start with a free trial class to see how engaging and effective online learning can be.' 
    },
    { 
        icon: iconLearnGrow, 
        title: 'Learn & Grow', 
        description: 'Select a plan, set your schedule, and watch your child’s skills and confidence grow.' 
    },
];

const HowItWorks = () => {
    return (
        <section className="hero-section-bg py-5">
            <Container>
                {/* 1. Create a white container for the inner content */}
                    <div className="text-center">
                        <h2 className="fw-bolder" style={{ fontSize: '2.8rem' }}>How It Works</h2>
                    </div>
                    <div className="bg-white p-5 rounded-4 shadow-sm">
                    {/* 2. Use justify-content-between to spread the items out wider */}
                    <Row className="mt-5 g-4 justify-content-between align-items-start">
                        {steps.map((step, index) => (
                            <React.Fragment key={index}>
                                {/* 3. Adjust column size to give content more room */}
                                <Col lg={2} md={6} className="text-center">
                                    <img 
                                        src={step.icon} 
                                        alt={`${step.title} icon`} 
                                        className="mb-3" 
                                        style={{ width: '60px', height: '60px' }} 
                                    />
                                    <h4 className="fw-bold">{step.title}</h4>
                                    <p className="text-secondary small">{step.description}</p>
                                </Col>

                                {index < steps.length - 1 && (
                                    <Col lg="auto" className="d-none d-lg-flex align-items-center" style={{ paddingTop: '40px' }}>
                                        <FaArrowRight size={24} className="text-secondary" />
                                    </Col>
                                )}
                            </React.Fragment>
                        ))}
                    </Row>
                    </div>
                    {/* 4. Move the button inside the white container */}
                    <div className="text-center mt-5">
                        <Button variant="primary-orange" size="lg" className="d-inline-flex align-items-center">
                            Take your assessment test <FaArrowRight className="ms-2" />
                        </Button>
                    </div>
                
            </Container>
        </section>
    );
};

export default HowItWorks;