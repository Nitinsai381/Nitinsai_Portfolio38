import React from "react";
import BodyHome from "./BodyHome";
import { Container,Row,Col } from "react-bootstrap";

import {FaLaptopCode} from "react-icons/fa"
function Header(){

    return <div className="header">
    <Container>
    <Row>
    <Col lg={8}>
    <br/><br/>
    <h1 className="name">
    Hello! </h1>
    <br/><br/>
    <h1 className="name">I'm <b>Nitin Sai.</b></h1>
    <br/>
    <h2 className="work line-1 anim-typewriter">A Web Designer.</h2>
    </Col>
    <Col lg={4} className="laptop-box" >
        {/* <img className="imgHeader" src={coder1} alt="Coder_image"/> */}
        <FaLaptopCode className="laptop"/>
    </Col>
    </Row>
    </Container>
    <br/><br/>
    <BodyHome/>
    </div>
}
export default Header;