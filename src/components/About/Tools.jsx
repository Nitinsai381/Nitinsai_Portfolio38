import React from "react";
import { Col, Row } from "react-bootstrap";

import {SiIntellijidea,SiPycharm,SiGithub, SiApachenetbeanside,SiAtom,SiEclipseide} from "react-icons/si"
import {TbBrandVscode} from "react-icons/tb"
function Tools() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
       <Col xs={4} md={2} className="tech-icons">
        <TbBrandVscode />
        <p>VSCode</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
        <p>Intellij IDEA</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
        <p>PyCharm</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <p>Github</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachenetbeanside />
        <p>NetBeans</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAtom />
        <p>Atom</p>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide />
        <p>Eclipse</p>
      </Col>
      
    
    </Row>
  );
}

export default Tools;