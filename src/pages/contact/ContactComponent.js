import React, { Component } from "react";
import "./ContactComponent.css";
import { contactPageData } from "../../portfolio.js";
import { Col } from "react-bootstrap";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

const ContactData = contactPageData.contactSection;

class Contact extends Component {
  render() {

    return (
      <div className="contact-main">
        <div className="basic-contact">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img src={require(`../../Assets/images/susimitha.jpeg`)}
                  alt=""
                />
              </div>
              <div className="contact-heading-text-div">
                <h1 className="contact-heading-text">
                  {ContactData["title"]}
                </h1>
                <p className="contact-header-detail-text subTitle">
                  {ContactData["description"]}
                </p>
                      <Col md={12} className="home-about-social">
                  <h1>FIND ME ON</h1>
                  <p>
                    Feel free to <span className="purple">connect </span>with me
                  </p>
                  <ul className="home-about-social-links">
                    <li className="social-icons">
                      <a
                        href="https://www.linkedin.com/in/susmitha9907/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                      >
                        <FaLinkedinIn />
                      </a>
                    </li>

                    <li className="social-icons">
                      <a
                        href="mailto:susmitha9907@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                      >
                                          <SiGmail />
                      </a>
                    </li>
                  </ul>
                </Col>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Contact;
