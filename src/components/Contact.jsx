import React from "react";
import { Container } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => (
  <section id="contact" className="bg-light py-5">
    <Container className="text-center">
      <h2>Contact Me</h2>
      <p>
        Email: <a href="mailto:your.email@example.com">uday934737@gmail.com</a>
      </p>
      <div className="d-flex justify-content-center gap-3 mt-3">
        <a href="https://github.com/uday7077" target="_blank" rel="noreferrer">
          <FaGithub size={30} />
        </a>
        <a
          href="https://linkedin.com/in/uday-kumar-543005247"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
    </Container>
  </section>
);

export default Contact;
