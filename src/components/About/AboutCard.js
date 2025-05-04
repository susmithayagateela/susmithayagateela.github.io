import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Susmitha Yagateela </span>
            What motivates me is the opportunity to tackle real-world challenges—whether it's optimizing performance,
            enhancing system reliability, or delivering a seamless user experience. I approach every project with a 
            mindset of innovation and purpose, constantly exploring new technologies to elevate the quality and 
            scalability of my work.
            <br />
            Driven by curiosity and a dedication to continuous growth, I find fulfillment in turning ideas into 
            practical, long-term solutions that empower businesses and create lasting impact.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Code Enthusiast
            </li>
            <li className="about-activity">
              <ImPointRight /> Creation of  Innovative things
            </li>
            <li className="about-activity">
              <ImPointRight /> Problem Solving and logical thinking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Susmitha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
