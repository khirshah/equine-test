// ---------------------------------- IMPORT ------------------------------------------
// --------------------------- React and Bootstrap --------------------------------
import React, { Component} from "react";
import {Row,Col,Navbar} from 'react-bootstrap';

// --------------------------  styles ---------------------------------------------
import styles from "../styles/footer.css";

// --------------------------  components -----------------------------------------
import FooterImage from './FooterImage';

// --------------------------------- COMPONENT ----------------------------------------

export default class Footer extends Component {

  state = {
    footerImages: ['BEVA','RCVS','DEFRA','APHA']
  }

  loadFooterImages = (images) => {
    return images.map((image, index) => {
      return (
        <FooterImage key={image} img={image}/>
        )
    })
  }

  render() {
    return (
        <Navbar className={`${styles.footer} sticky-bottom mt-auto mb-4 mr-sm-4 justify-content-center justify-content-sm-end`} >
          {this.loadFooterImages(this.state.footerImages)}
        </Navbar>
    );
  }
}