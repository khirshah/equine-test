// ---------------------------------- IMPORT ------------------------------------------
// --------------------------- React and Bootstrap --------------------------------
import React, { Component} from "react";
import {Row, Col, Form, Button} from 'react-bootstrap';

// --------------------------  styles ---------------------------------------------
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import styles from "../styles/loginForm.css";

// --------------------------  components -----------------------------------------


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
      <Form className={styles.loginForm}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" data-toggle="password"/>
            <div className={`${styles.togglePassword} text-right`} onClick={() => this.togglePassword()}>
              {this.state.isPasswordVisible ? 
                <FontAwesomeIcon icon={faEyeSlash} /> : 
                <FontAwesomeIcon icon={faEye} />}
              {this.state.isPasswordVisible ? ' Hide' : ' Show'}
            </div>
          <Form.Text className="text-muted text-right">
            Forgot password?
          </Form.Text>
        </Form.Group>
          <style type="text/css">
            {`
            .btn-primary, .btn-primary:hover{
              background-color: #006760;
              border: solid #006760;
            }
            `}
          </style>
        <Button variant="primary" type="submit" className="w-100">
          LOGIN >
        </Button>
      </Form>
    );
  }
}


