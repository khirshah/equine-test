// ---------------------------------- IMPORT ------------------------------------------
// --------------------------- React and Bootstrap --------------------------------
import React, { Component} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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
        <Row className={`${styles.footer} mt-auto justify-content-end`} >
          {this.loadFooterImages(this.state.footerImages)}
        </Row>
    );
  }
}