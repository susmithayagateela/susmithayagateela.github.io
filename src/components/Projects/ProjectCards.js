import React from "react";
import Card from "react-bootstrap/Card";

function ProjectCards(props) {
  return (
    <Card className="project-card-view d-flex flex-row">
      <div style={{ flex: "1" }}>
        <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{ height: "100%", objectFit: "cover" }} />
      </div>
      <Card.Body style={{ flex: "2" }}>
        <Card.Title style={{ textAlign: "left" }}><strong className="purple">{props.title}</strong></Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
