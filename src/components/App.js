// ---------------------------------- IMPORT ------------------------------------------
// --------------------------- React and Bootstrap --------------------------------
import React, {Component} from "react";
import Container from 'react-bootstrap/Container';
import {Row, Col} from 'react-bootstrap';

// ---------------------------------  styles --------------------------------------
import styles from "../styles/app.css";

// -------------------------------  components ------------------------------------
import LoginContainer from './LoginContainer';
import Footer from './Footer';

// --------------------------------- COMPONENT ----------------------------------------

class App extends Component{
  render() {
    return (
      <Container className={styles.App} fluid>
        <Row className='vh-100'>
          <Col sm={6} xs={12} className={`${styles.backgroundImage}`}></Col>
          <Col sm={6} xs={12} className={`${styles.loginInterface} d-flex flex-column justify-content-sm-center`} >
            <LoginContainer/>
            <Footer/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;