// ---------------------------------- IMPORT ------------------------------------------
// --------------------------- React and Bootstrap --------------------------------
import React, { Component} from "react";
import {Row,Col,Navbar} from 'react-bootstrap';

// --------------------------  styles ---------------------------------------------

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
        <Row no-gutters className='footer sticky-bottom mt-auto mb-4 mr-sm-4 justify-content-center justify-content-sm-end' >
          {this.loadFooterImages(this.state.footerImages)}
        </Row>
    );
  }
}