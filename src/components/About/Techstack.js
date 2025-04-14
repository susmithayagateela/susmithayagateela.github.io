import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiTailwindcss } from 'react-icons/si'; // From Simple Icons
import { SiSap } from 'react-icons/si';
import { SiC } from 'react-icons/si';
import { SiFigma } from 'react-icons/si';
import { SiJenkins } from 'react-icons/si';

import {
  DiMysql, DiCss3, DiHtml5, DiBootstrap, DiGit,
  DiJavascript1,
  DiPython,
} from "react-icons/di";
import {
  SiPostgresql,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiC />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSap/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiJenkins/>
      </Col>
      
    </Row>
  );
}

export default Techstack;
