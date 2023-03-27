import React, { Component } from "react";
import CardCustomStructure from "./06CardCustomStructure.jsx";

class ClassCompoProps extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-3">
          <CardCustomStructure title="title 1" imgurl="/img/fortuner.png" />
        </div>
        <div className="col-3">
          <CardCustomStructure title="photo-2" />
        </div>
        <div className="col-3">
          <CardCustomStructure title="pic-3" />
        </div>
        <div className="col-3">
          <CardCustomStructure title="image-4" />
        </div>
      </div>
    );
  }
}

export default ClassCompoProps;
