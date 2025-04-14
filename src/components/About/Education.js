import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import AUMLogo from "../../Assets/AUMLogo.png";
import VemuLogo from "../../Assets/vemuLogo.png"
function Education() {
  const educationData = [
    {
      universityLogo: AUMLogo,
      universityName: "University of XYZ",
      stream: "Master of Science in Computer Science",
      startYear: "2022",
      endYear: "2024",
    },
    {
      universityLogo: VemuLogo,
      universityName: "ABC College of Engineering",
      stream: "Bachelor of Technology in Information Technology",
      startYear: "2018",
      endYear: "2022",
    },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "30px" }}>
        <strong className="purple">Education</strong> Details
      </h1>
      {educationData.map((edu, idx) => (
        <Col md={6} lg={5} key={idx} className="mb-4">
          <Card className="bg-dark text-white shadow-lg">
            <Card.Body className="d-flex align-items-center">
              <img
                src={edu.universityLogo}
                alt="university-logo"
                style={{ width: "70px", height: "70px", marginRight: "20px" }}
              />
              <div>
                <Card.Title>{edu.universityName}</Card.Title>
                <Card.Text>{edu.stream}</Card.Text>
                <Card.Text>
                  {edu.startYear} - {edu.endYear}
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Education;
