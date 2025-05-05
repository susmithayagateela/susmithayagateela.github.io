import React, { Component } from "react";
import "./ExperienceAccordion.css";
import ExperienceCard from "../components/ExperienceCard/ExperienceCard";
import Accordion from "react-bootstrap/Accordion";

class ExperienceAccordion extends Component {
  render() {
    return (
      <div className="experience-accord">
        <Accordion defaultActiveKey="0">
          {this.props.sections.map((section, sectionIndex) => (
            <Accordion.Item eventKey={String(sectionIndex)} key={section.title}>
              <Accordion.Header>{section.title}</Accordion.Header>
              <Accordion.Body>
                {section.experiences.map((experience, index) => (
                  <ExperienceCard
                    key={index}
                    index={index}
                    totalCards={section.experiences.length}
                    experience={experience}
                  />
                ))}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    );
  }
}

export default ExperienceAccordion;