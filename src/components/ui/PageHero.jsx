// src/components/ui/PageHero.jsx

import React from 'react';
import { Container } from 'react-bootstrap';
import './ui.css'; // 1. Ensure the component's stylesheet is imported

/**
 * A reusable hero banner for page titles.
 *
 * @param {object} props The component props.
 * @param {string} props.title The main title to display on the banner.
 */
const PageHero = ({ title }) => {
  return (
    // 2. Use the new hardcoded CSS class. No more props for styling.
    <section className="page-hero-banner">
      <Container>
        <div className="text-start">
          <h1 className="display-3 fw-bolder text-dark-navy">{title}</h1>
        </div>
      </Container>
    </section>
  );
};

export default PageHero;