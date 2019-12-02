// ---------------------------------- IMPORT ------------------------------------------
// --------------------------- React and Bootstrap --------------------------------
import React, {Component} from "react";
import {Row} from 'react-bootstrap';

// -------------------------------  components ------------------------------------
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
        <Row className='footer sticky-bottom mt-auto mb-4 justify-content-center justify-content-sm-end' >
          {this.loadFooterImages(this.state.footerImages)}
        </Row>
    );
  }
}