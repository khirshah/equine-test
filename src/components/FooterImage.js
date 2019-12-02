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
        <div  className={`${styles.footerImageContainer} d-flex  p-2 align-items-center`}>
          <Image src={require(`../assets/logos/${this.props.img}_logo.png`)} className={`${styles.footerImage}`}/>
        </div>
    );
  }
}