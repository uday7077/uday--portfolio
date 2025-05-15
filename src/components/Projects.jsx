import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const projects = [
  {
    title: "Myntra Clone",
    desc: "A fully functional clone of Myntra built with React, Redux, and Bootstrap.",
    link: "https://myntraclone-tt46.vercel.app/",
  },
  {
    title: "Weather App",
    desc: "Weather info using OpenWeather API with dynamic UI and responsive design.",
    link: "https://weather-nine-self.vercel.app/",
  },
  {
    title: "Movie App",
    desc: "Displaying the popular movies and also my dynami searching of movies by fetching data from omdb Api dynamic UI and responsive design.",
    link: "https://movie-app-eight-neon.vercel.app/",
  },
];

const Projects = () => (
  <section id="projects" className="py-5">
    <Container>
      <h2 className="text-center mb-4">My Projects</h2>
      <Row>
        {projects.map((proj, idx) => (
          <Col md={6} key={idx} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{proj.title}</Card.Title>
                <Card.Text>{proj.desc}</Card.Text>
                <Button href={proj.link} target="_blank">
                  View Live
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Projects;
