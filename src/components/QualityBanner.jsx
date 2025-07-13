// src/components/QualityBanner.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import teacherOk from '../assets/teacher-ok.png';

const QualityBanner = () => {
    return (
        <section className="bg-white py-5">
            <Container>
                {/* Use rounded-4 for large rounded corners on the entire component */}
                <Row className="g-0 rounded-4 overflow-hidden">
                    {/* Image Column */}
                    <Col md={6}>
                        {/* Use img-fluid to make the image responsive within its column */}
                        <img src={teacherOk} alt="Teacher assuring quality instruction" className="img-fluid h-100 w-100" style={{ objectFit: 'cover' }} />
                    </Col>
                    
                    {/* Orange Content Column */}
                    <Col md={6} className="bg-primary-orange-gradient d-flex align-items-center p-5">
                        <h2 className="text-white fw-bolder" style={{ fontSize: '2.5rem', lineHeight: '1.4' }}>
                            No matter which option you choose, your child receives high-quality instruction, caring support, and measurable progress.
                        </h2>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default QualityBanner;