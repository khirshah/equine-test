// ---------------------------------- IMPORT ------------------------------------------
// --------------------------- React and Bootstrap --------------------------------
import React, {Component} from "react";
import {Image} from 'react-bootstrap';

// ---------------------------------  styles --------------------------------------
import styles from "../styles/footerImage.css";

// --------------------------------- COMPONENT ----------------------------------------

export default class LoginContainer extends Component {
  render() {
    return (
        <div  className='footerImageContainer d-flex p-2 align-items-center'>
          <Image className={styles.footerImage} src={require(`../assets/logos/${this.props.img}_logo.png`)}/>
        </div>
    );
  }
}