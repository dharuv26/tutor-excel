// src/components/WhyTrust.jsx

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

// 1. Import the new icons from the assets folder
import iconEducators from '../assets/icon-educators.png';
import iconLessons from '../assets/icon-lessons.png';
import iconFlexible from '../assets/icon-flexible.png';
import iconPricing from '../assets/icon-pricing.png';

// 2. Add the imported icons to our data array
const trustData = [
    { 
        icon: iconEducators, 
        title: 'Qualified Educators', 
        description: "Our tutors are handpicked, trained, and dedicated to your child's unique learning journey." 
    },
    { 
        icon: iconLessons, 
        title: 'Curriculum-Aligned Lessons', 
        description: "All sessions follow your child's curriculum and learning goals, wherever you are in Australia." 
    },
    { 
        icon: iconFlexible, 
        title: 'Flexible & Convenient', 
        description: 'Your child can learn comfortably from home, on a schedule that fits your family.' 
    },
    { 
        icon: iconPricing, 
        title: 'Clear, Affordable Pricing', 
        description: 'Simple monthly plans with no hidden fees—and your first class is free.' 
    },
];

const WhyTrust = () => {
  return (
    // 3. Apply the new background class and adjust padding
    <section className="why-trust-section py-5">
      <Container>
        <div className="text-center">
          <h2 className="fw-bolder text-white" style={{ fontSize: '2.8rem' }}>Why Parents Trust TutorExel</h2>
        </div>
        
        <Row className="mt-5 g-4">
          {trustData.map((item, index) => (
            <Col lg={3} md={6} key={index}>
              {/* 4. Update the Card to include the icon image */}
              <Card className="h-100 border-0 shadow-sm p-4 text-center" style={{ borderRadius: '20px' }}>
                <Card.Body>
                  <img 
                    src={item.icon} 
                    alt={`${item.title} icon`} 
                    className="mb-4" 
                    style={{ width: '80px', height: '80px' }} 
                  />
                  <Card.Title as="h4" className="fw-bold text-dark-navy">{item.title}</Card.Title>
                  <Card.Text className="text-secondary mt-3">{item.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhyTrust;