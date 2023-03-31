import React, { Component } from "react";

class LoaderCompor extends Component {
  render() {
    return (
      <div>
        <div className="loader">
          <div className="loader--dot"></div>
          <div className="loader--dot"></div>
          <div className="loader--dot"></div>
          <div className="loader--dot"></div>
          <div className="loader--dot"></div>
          <div className="loader--dot"></div>
          <div className="loader--text"></div>
        </div>
      </div>
    );
  }
}

export default LoaderCompor;
