// ---------------------------------- IMPORT ------------------------------------------
// --------------------------- React and Bootstrap --------------------------------
import React, {Component} from "react";
import {Row, Col, Form, Button} from 'react-bootstrap';

// ---------------------------------  styles --------------------------------------
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faChevronRight} from '@fortawesome/free-solid-svg-icons'

// --------------------------------- COMPONENT ----------------------------------------

export default class LoginForm extends Component {

  state = {
    isPasswordVisible: false
  }

  togglePassword = () => {
    this.setState({
      isPasswordVisible: !this.state.isPasswordVisible
    });
  };

  render() {
    return (
      <Form className='loginForm'>
          <style type="text/css">
            {`
            #formBasicEmail, #formBasicPassword {
              border: solid 1px black;
              border-radius: 0px;
            }
            .togglePW {
              width: 55px;
              margin-left: auto;
              margin-top: -23px;
            }
            .btn, .btn:hover, .btn:focus, .btn:active {
              background-color: #006760;
              color: white;
              border: solid #006760;
            }
            .customTextColor {
              color: #006760;
            }
            .customizedLink, .customizedLink:hover, .customizedLink:active, .customizedLink:visited {
              color: #006760;
              text-decoration: underline;
            }
            `}
          </style>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" >
          <Form.Label>Password</Form.Label>
          <Form.Control 
          type={this.state.isPasswordVisible ? "text" : "password"}
          />
          <div style={{cursor: 'pointer'}} className=' togglePW customTextColor text-right mr-2' onClick={() => this.togglePassword()}>
            {this.state.isPasswordVisible ? 
              <FontAwesomeIcon icon={faEyeSlash} /> : 
              <FontAwesomeIcon icon={faEye} />}
            {this.state.isPasswordVisible ? ' Hide' : ' Show'}
          </div>
          <Form.Text className="mr-1 mt-3 text-right">
            <a className='customizedLink' href="">Forgot password?</a>
          </Form.Text>
        </Form.Group>
        <Button variant="outline-dark" type="submit" className="w-100 ">
          <strong> LOGIN </strong>
          <FontAwesomeIcon className='ml-2' icon={faChevronRight} />
        </Button>
      </Form>
    );
  }
}


