import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blogger from "../../Assets/Projects/blogger.png";
import product from "../../Assets/Projects/product.png";
import wikigame from "../../Assets/Projects/wikigame.png";
import token_generator from "../../Assets/Projects/token_generator.png";
import train_reservation from "../../Assets/Projects/train_reservation.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Son <strong className="purple">Çalışmalarım </strong>
        </h1>
        <p style={{ color: "white" }}>
          Github üzerinde bulunan ve üzerinde çalıştığım birkaç proje.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wikigame}
              isBlog={false}
              title="WikiGame"
              description="Game encyclopedia website made with laravel framework.."
              ghLink="https://github.com/dervistprk/wikigame"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogger}
              isBlog={false}
              title="Blogger"
              description="Blogger-like app made with laravel.."
              ghLink="https://github.com/dervistprk/laravel-blog"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={token_generator}
              isBlog={false}
              title="Token Generator"
              description="Token generator app made with laravel and PHP."
              ghLink="https://github.com/dervistprk/token-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={train_reservation}
              isBlog={false}
              title="Train Reservation"
              description="An reservation app where customers buy tickets for trains."
              ghLink="https://github.com/dervistprk/train_reservation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={product}
              isBlog={false}
              title="Product Registerition"
              description="Product registerition app for inventory management system."
              ghLink="https://github.com/dervistprk/product"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
