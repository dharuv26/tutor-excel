// src/components/TrustSection.jsx

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

/**
 * A reusable component for displaying a grid of trust-building feature cards.
 *
 * @param {object} props The component props.
 * @param {string} [props.headingText='Why Our Customers Trust Us'] The main heading text for the section.
 * @param {Array<{icon: string, title: string, description: string, highlight?: boolean}>} [props.cardsData=[]] An array of data for the feature cards.
 * @param {React.CSSProperties} [props.customStyles={}] Custom inline styles to apply to the section container.
 */
const TrustSection = ({
  headingText = 'Why Our Customers Trust Us',
  cardsData = [],
  customStyles = {},
}) => {
  return (
    // The main section with the wavy orange background
    <section className="why-trust-section py-5" style={customStyles}>
      <Container>
        <div className="text-center">
          <h2 className="fw-bolder text-white" style={{ fontSize: '2.8rem' }}>
            {headingText}
          </h2>
        </div>
        
        <Row className="mt-5 g-4">
          {cardsData.map((card, index) => (
            <Col lg={3} md={6} key={index}>
              <Card 
                className="h-100 border-0 shadow-sm p-4 text-center" 
                // Conditionally apply a blue border if the highlight prop is true
                style={{ 
                  borderRadius: '20px', 
                  border: card.highlight ? '3px solid #22A3D2' : 'none' 
                }}
              >
                <Card.Body>
                  <img 
                    src={card.icon} 
                    alt={`${card.title} icon`} 
                    className="mb-4" 
                    style={{ width: '80px', height: '80px' }} 
                  />
                  <Card.Title as="h4" className="fw-bold text-dark-navy">{card.title}</Card.Title>
                  <Card.Text className="text-secondary mt-3">{card.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TrustSection;