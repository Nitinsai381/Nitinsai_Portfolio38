import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import {MdPerson} from "react-icons/md"
import { ConnectMe } from './ConnectMe';

function BodyHome() {
 

  
  return (
    <div class="BodyHome">
    <br/>
    <Container>
    
      <Row class="row-person">

      <Col xs={{order:'last'}} lg={{span:5 ,order:'first'}} class="Col person-box">
            {/* <img src={Coder2} alt='img'  /> */}
            
            
        <MdPerson class="person"/>
        
        <br/><br/>
        </Col>

        <Col  xs={{order:'first'}} lg={{span:7, order:'last'}} class="Col size">
        <h1>Intro About <b>Me</b>.</h1>
        {/* <h1>INTRO ABOUT <b>ME</b>.</h1> */}
        
        <p>Having lot of <b>interest in programming</b>, make me feel that I am the person who belongs here.</p>
        <p>I got good knowledge in <b>Python, Java, JavaScript</b></p>
        <p>I always like to build new <b>Websites</b>, which motivates me to work more.</p>
        <p>This passion of learning new things, pushes me to learn <b>new technologies</b> and explore more in this field.</p>
        </Col>
      </Row>
      
      <Row>
        <Col>
<ConnectMe/>
        </Col>
      </Row>
    </Container></div>
  );
}

export default BodyHome;