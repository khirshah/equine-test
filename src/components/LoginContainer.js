// ---------------------------------- IMPORT ------------------------------------------
// --------------------------- React and Bootstrap --------------------------------
import React, { Component} from "react";
import {Row, Col, Image} from 'react-bootstrap';


// --------------------------  styles ---------------------------------------------
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'

// --------------------------  components -----------------------------------------
import LoginForm from './LoginForm'

// --------------------------------- COMPONENT ----------------------------------------

export default class LoginContainer extends Component{
  render() {
    return (
        <Row className='loginContainer mt-auto'>
          <style type="text/css">
            {`
            .customizedLink, .customizedLink:hover, .customizedLink:active, .customizedLink:visited {
              color: #006760;
              text-decoration: underline;
            }
            .smallerText {
              font-size: 10px;
            }
            `}
          </style>
          <Col sm={{span:5,offset:2}} >
            <Col xs={10} className='p-0'>
              <Image src={require('../assets/background_images/EQ-logo-CMYK-300dpi--green.png')} fluid />
            </Col>
            <Col className="p-0 mb-5"><h4><FontAwesomeIcon icon={faLock} /> Vet Login</h4></Col>
            <LoginForm/>
            <div className='smallerText text-center mt-3'>
              <div>Don't have an account?</div>
              <div><a  className='customizedLink smallerText' href="">Register for free account</a></div>
            </div>
          </Col>
        </Row>
    );
  }
}