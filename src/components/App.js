// ---------------------------------- IMPORT ------------------------------------------
// --------------------------- React and Bootstrap --------------------------------
import React, { Component} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


// --------------------------  styles ---------------------------------------------
import styles from "../styles/app.css";

// --------------------------  components -----------------------------------------
import LoginContainer from './LoginContainer';
import Footer from './Footer';
// --------------------------------- COMPONENT ----------------------------------------

class App extends Component{
  render() {
    return (
      <Container className={`${styles.App} w-100 h-100`} fluid>
        <Row>
          <Col md={6} xs={{span:12, height: 50}} className={`${styles.backgroundImage}`}></Col>
          <Col md={6} xs={{span:12, height: 50}} className={`${styles.loginInterface}  d-flex flex-column justify-content-center`} >
            <LoginContainer/>
            <Footer/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;