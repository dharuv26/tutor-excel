// src/components/CTASection.jsx

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import defaultImage from '../../assets/images/cta-family.png';

/**
 * A reusable Call-to-Action section with an overflowing image.
 *
 * ... (all other props documentation) ...
 * @param {string} [props.primaryButtonTextColor] The text color for the primary (white) button.
 * @param {string} [props.secondaryButtonTextColor] The text color for the secondary (blue) button.
 */
const CTASection = ({
  headingText = 'Ready to Get Started?',
  image = defaultImage,
  imageAlt = 'Call to action image',
  primaryButtonText = 'Primary Action',
  secondaryButtonText = 'Secondary Action',
  primaryButtonIcon,
  secondaryButtonIcon = <FaArrowRight />,
  primaryButtonTextColor, // 1. Add new prop
  secondaryButtonTextColor, // 2. Add new prop
  customStyles = {},
}) => {
  return (
    <section className="bg-white" style={{ paddingTop: '80px', paddingBottom: '150px', ...customStyles }}>
      <Container>
        <div className="position-relative">
          <div className="bg-primary-orange-gradient p-5 rounded-4 overflow-hidden">
            <Row className="align-items-center">
              <Col lg={7}>
                <h2 className="display-4 fw-bolder text-white">
                  {headingText}
                </h2>
                <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
                  {/* 3. Apply the custom text color to the primary button */}
                  <Button 
                    size="sm" 
                    className="btn-white-custom" 
                    style={{ color: primaryButtonTextColor }}
                  >
                    {primaryButtonText} {primaryButtonIcon && <span className="ms-2">{primaryButtonIcon}</span>}
                  </Button>
                  
                  {/* 4. Apply the custom text color to the secondary button */}
                  <Button 
                    size="sm" 
                    variant="secondary-blue" 
                    style={{ color: secondaryButtonTextColor }}
                  >
                    {secondaryButtonText} {secondaryButtonIcon && <span className="ms-2">{secondaryButtonIcon}</span>}
                  </Button>
                </div>
              </Col>
              <Col lg={5} className="d-none d-lg-block"></Col>
            </Row>
          </div>
          
          <div className="d-none d-lg-block position-absolute" style={{ bottom: 0, right: '-40px', zIndex: 1 }}>
            <img 
              src={image} 
              alt={imageAlt} 
              style={{ width: '100%', maxWidth: '520px' }} 
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
