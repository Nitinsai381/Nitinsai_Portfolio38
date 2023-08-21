import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Coderanim5 from "../../Assets/coderanim5.gif"
import { Tech } from "./Tech";

function AboutMe(){
  
    return <div class ="Aboutme">
    <Container>
      <Row>
        <Col md={6} sm={8} lg={6} class="size1">
          <h1 class="Head">KNOW MORE ABOUT <b>ME</b></h1>
          <br/>
          <h1>Hi, I am <b>Nitin Sai</b>. I am from <b>Hyderabad, India</b></h1>
          <br/>
          <p>I recently completed <b>B. Tech </b>in <b>Information Technology</b> from <b>Aurora's Technological and Research Institute</b> (Affliated to <b>JNTUH</b>).</p>
          <br/>
          <p>Apart from <b>studies</b>, I would like to :</p>
          <p>✩ Play <b>Cricket</b></p>
          <p>✩ <b>Travel</b> and <b>explore places</b></p>
          <p>✩ Communicate with <b>friends</b></p>
        </Col>
        <Col></Col>
        <Col md={6} sm={4} lg={4} className="size2">
          <img src={Coderanim5}/>
        </Col>
        </Row>
        <br/><br/><br/>
       <Row><Col><Tech/></Col></Row>
       <br/><br/>
    </Container>
   
    
    </div>
}

export default AboutMe