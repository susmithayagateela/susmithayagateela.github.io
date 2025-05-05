import React, { Component } from "react";
import "./Experience.css";
import {experience} from "../../portfolio"
import ExperienceAccordion from "../../containars/ExperienceAccordion";

class Experience extends Component {
    render() {
        return (
          <div className="experience-main">
            <div className="basic-experience">
                <div className="experience-heading-div">
                  <div className="experience-heading-text-div">
                    <h1
                      className="experience-heading-text"
                      style={{ color: "white", textAlign: "center" }}
                    >
                      Work <strong className="purple">Experience </strong>
                    </h1>
                  </div>
                </div>
            </div>
            <ExperienceAccordion sections={experience["sections"]} />
          </div>
        );
      }
}

export default Experience;