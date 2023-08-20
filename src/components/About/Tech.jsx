import React from "react";
import {Container,Row,Col} from "react-bootstrap";

import Cards from "./Cards";
import Tools from "./Tools";

export function Tech(){
    return <div class="TechSkills">
    <Container>
    <Row>
    <Col>
    <h1>Professionals <b>Skills</b></h1>
    </Col>
    </Row>
    <br/><br/>
<Cards/>
<br/><br/>
<h1><b>Tools</b> and <b>IDEs'</b> I Use</h1>
    <br/><br/>
<Tools/>
</Container>
    </div>
}