import React, { Component } from "react";
import CardCustomStructure from "./06CardCustomStructure.jsx";
import Image from "../ClassCompo/download.jpg";

class ClassCompoProps extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-3">
          <CardCustomStructure
            tittle="Fortuner"
            imgurl="/img/fortuner.png"
            paragraph="The Toyota Fortuner has 1 Diesel Engine and 1 Petrol Engine on offer. The Diesel engine is 2755 cc while the Petrol engine is 2694 cc ."
          />
        </div>
        <div className="col-3">
          <CardCustomStructure
            tittle="Maruti Suzuki"
            imgurl={Image}
            paragraph="Maruti Suzuki 800 is a 4-seater Hatchback available at a starting price of Rs. 2.08 Lakh. The car is available in 8 variants"
          />
        </div>
        <div className="col-3">
          <CardCustomStructure
            tittle="Porsche"
            imgurl={process.env.PUBLIC_URL + "/img/porsche.jpg"}
            paragraph="Dr. Ing. h.c. F. Porsche AG, usually shortened to Porsche is a German automobile manufacturer specializing in high-performance sports cars "
          />
        </div>
        <div className="col-3">
          <CardCustomStructure
            tittle="Bugatti"
            imgurl="https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-d37f5243f6ae21dcfb1fbf28dfe261f5.jpg"
            paragraph=" Bugatti Automobiles S.A.S. (French pronunciation: ​[bygati]) is a French luxury hyper-sports car manufacturer."
          />
        </div>
      </div>
    );
  }
}

export default ClassCompoProps;
