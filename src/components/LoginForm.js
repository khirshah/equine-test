// ---------------------------------- IMPORT ------------------------------------------
// --------------------------- React and Bootstrap --------------------------------
import React, { Component} from "react";
import {Row, Col, Form, Button} from 'react-bootstrap';

// --------------------------  styles ---------------------------------------------
import styles from "../styles/loginForm.css";

// --------------------------  components -----------------------------------------


// --------------------------------- COMPONENT ----------------------------------------

export default class LoginForm extends Component{
  render() {
    return (
      <Form className={styles.loginForm}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"/>
            <div className='text-right'><span toggle="#input-pwd" className="fa fa-fw field-icon toggle-password fa-eye"></span>Show</div>
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


