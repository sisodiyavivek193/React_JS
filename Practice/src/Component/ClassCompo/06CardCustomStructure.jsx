import React, { Component } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

class CardCustomStructure extends Component {
  render() {
    return (
      <div>
        <MDBCard>
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay"
          >
            <MDBCardImage
              src={this.props.imgurl}
              style={{ height: "150px", objectFit: "fill" }}
              fluid
              alt="..."
            />
            <a>
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>{this.props.tittle}</MDBCardTitle>
            <MDBCardText >
            {this.props.paragraph}
            </MDBCardText>
            <MDBBtn href="#">Button</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </div>
    );
  }
}

export default CardCustomStructure;
