import React from "react";
import {Container, Row, Col} from "react-bootstrap"
import {BsGithub,BsInstagram,BsLinkedin} from "react-icons/bs"

import {FaTwitter} from "react-icons/fa"


export function ConnectMe(){

    return <div class="connect">
        <Container>
            <Row>
                <Col>
                    <h2>Let's get <b>connected</b> on</h2>
                </Col>
            </Row>
            
                
<a href="https://github.com/Nitinsai381" class="btn btn-primary icon-connect"><BsGithub class="iconLogo"/></a>
<a href="https://twitter.com/nitinsai33" class="btn btn-primary icon-connect"><FaTwitter class="iconLogo"/></a>
<a href="https://www.linkedin.com/in/nitin-sai-61bb25b9" class="btn btn-primary icon-connect"><BsLinkedin class="iconLogo"/></a>
<a href="https://www.instagram.com/nitinsai138" class="btn btn-primary icon-connect"><BsInstagram class="iconLogo"/></a>
                
            
        </Container>
    </div>
}