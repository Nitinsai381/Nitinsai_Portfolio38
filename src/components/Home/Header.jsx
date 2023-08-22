import React from "react";
import BodyHome from "./BodyHome";
import { Container,Row,Col } from "react-bootstrap";
import { Type } from "./Type";
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
    <div style={{  textAlign: "left" }}>
                <Type />
    </div>
    </Col>
    <Col lg={4} className="laptop-box" >
       
        <FaLaptopCode className="laptop"/>
    </Col>
    </Row>
    </Container>
    <br/><br/>
    <BodyHome/>
    </div>
}
export default Header;