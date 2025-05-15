import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaBootstrap,
} from "react-icons/fa";

const Technologies = () => (
  <section id="technologies" className="bg-light py-5">
    <Container>
      <h2 className="text-center mb-4">Technologies I Use</h2>
      <Row className="text-center">
        <Col>
          <FaHtml5 size={40} /> <p>HTML</p>
        </Col>
        <Col>
          <FaCss3Alt size={40} /> <p>CSS</p>
        </Col>
        <Col>
          <FaJs size={40} /> <p>JavaScript</p>
        </Col>
        <Col>
          <FaReact size={40} /> <p>React</p>
        </Col>
        <Col>
          <FaPython size={40} /> <p>Python</p>
        </Col>
        <Col>
          <FaBootstrap size={40} /> <p>Bootstrap</p>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Technologies;
