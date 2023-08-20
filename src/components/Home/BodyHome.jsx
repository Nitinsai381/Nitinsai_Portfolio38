import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Coder2 from "../../Assets/coder2.png"

import {MdPerson} from "react-icons/md"
import { ConnectMe } from './ConnectMe';

function BodyHome() {
  return (
    <div class="BodyHome">
    <br/><br/><br/><br/><br/><br/>
    <Container>
    
      <Row>

      <Col class="person-box">
            {/* <img src={Coder2} alt='img'  /> */}
            <MdPerson class="person"/>
        </Col>

        <Col class="size"><h1>INTRO ABOUT <b>ME</b></h1>
        <br/><br/>
        <p>Having lots of <b>interest in programming</b>, make me feel that I learnt atleast something to create things.</p>
        <p>I got good knowledge in <b>Python, Java, JavaScript</b></p>
        <p>I always like to build new <b>Websites</b>, which motivates me to work more.</p>
        <p>This passion of learning new things, pushes me to learn <b>new technologies</b> and explore more in this field.</p>
        </Col>
      </Row>
      <br/><br/><br/><br/>
      <Row>
        <Col>
<ConnectMe/>
        </Col>
      </Row>
    </Container></div>
  );
}

export default BodyHome;