import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Sanofi from "../../Assets/Projects/Sanofi.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card" style={{ width: "100%" }}>
            <ProjectCard
              imgPath={Sanofi}
              isBlog={false}
              title="Sanofi – Pharmaceutical Project"
              description="As part of the SAP development team for SANOFI, a global pharmaceutical client, I worked extensively in the FI module, focusing on building and enhancing backend functionalities to support financial processes and data integration.
Key responsibilities and contributions:

Collaborated with the functional team to translate business requirements into detailed technical specifications and design documents.

Developed scalable and efficient RICEF objects using ABAP programming, aligned with business logic and compliance standards.

Designed and implemented custom Function Modules, SmartForms, Enhancements, BAdIs, CDS Views, RFCs, and IDOCs to handle complex financial operations and reporting needs.

Built inbound and outbound interfaces using AIF, enabling seamless integration between SAP and external systems.

Applied Object-Oriented ABAP principles to build reusable and maintainable solutions, improving long-term system flexibility and efficiency.

Conducted thorough Unit Testing, SIT, and UAT cycles, ensuring functional correctness and system stability across releases.

Participated in code reviews and peer testing sessions, contributing to improved code quality and adherence to best practices.

Provided rapid resolution for production issues, performed root cause analysis, and implemented corrective measures to prevent recurrence."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
