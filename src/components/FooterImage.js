// ---------------------------------- IMPORT ------------------------------------------
// --------------------------- React and Bootstrap --------------------------------
import React, { Component} from "react";
import {Col, Image} from 'react-bootstrap';

// --------------------------  styles ---------------------------------------------
import styles from "../styles/footerImage.css";

// --------------------------------- COMPONENT ----------------------------------------

export default class LoginContainer extends Component{
  render() {
    return (
        <Col xs={2} className={`${styles.footerImageContainer} d-flex align-items-center`}>
          <Image src={require(`../assets/logos/${this.props.img}_logo.png`)} className={styles.footerImage}/>
        </Col>
    );
  }
}