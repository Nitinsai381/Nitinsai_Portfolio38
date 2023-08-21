import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {SiJquery,SiBootstrap,SiHtml5, SiCss3} from "react-icons/si"
import { TbSql } from "react-icons/tb";

function Cards() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
       <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p>Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <p>HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
        <p>CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJquery/>
        <p>Jquery</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap/>
        <p>Bootstrap</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p>NodeJs</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p>ReactJs</p>
      </Col>
      
     
      
      <Col xs={4} md={2} className="tech-icons">
        <TbSql />
        <p>SQL</p>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p>Git</p>
      </Col>
          
    </Row>
  );
}

export default Cards;