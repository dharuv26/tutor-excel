import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCalculator, FaFlask, FaBook, FaArrowRight } from 'react-icons/fa';

const subjectsData = [
  { icon: <FaCalculator size={40} className="text-success" />, title: 'Mathematics', description: 'Build strong numeracy skills and master concepts aligned with the Australian curriculum.' },
  { icon: <FaFlask size={40} className="text-primary-blue" />, title: 'Science', description: 'Explore biology, chemistry, and physics with engaging lessons that spark curiosity.' },
  { icon: <FaBook size={40} className="text-success" />, title: 'English', description: 'Improve reading, writing, and comprehension confidence in communication.' },
];

const Subjects = () => {
  return (
    <section className="py-5 bg-light-gray">
      <Container className="text-center">
        <h2 className="fw-bolder">Subjects We Offer</h2>
        <p className="lead text-secondary mx-auto" style={{ maxWidth: '700px' }}>
          TutorExel helps your child excel in every area:
        </p>
        <Row className="mt-5 g-4 justify-content-center">
          {subjectsData.map((subject, index) => (
            <Col lg={4} md={6} key={index}>
              <Card className="h-100 shadow-sm border-0 p-4">
                <Card.Body>
                  <div className="mb-4">{subject.icon}</div>
                  <Card.Title as="h4" className="fw-bold">{subject.title}</Card.Title>
                  <Card.Text className="text-secondary my-3">{subject.description}</Card.Text>
                  <a href="#" className="fw-semibold text-primary-blue text-decoration-none d-inline-flex align-items-center gap-2">
                    Learn more <FaArrowRight />
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default Subjects;