import React, { Component } from "react";

class ClassCompojsx extends Component {
  ChangdataFun = () => {
    console.log("ChangdataFun");
  };
  render() {
    const Changdata = () => {
      console.log("calllad");
    };

    const Html = "Kuchbhi";
    return (
      <>
        <div>
          <h3>JSX</h3>
          <p>
            JSX stands for JavaScript XML. JSX allows us to write HTML in React.
            JSX makes it easier to write and add HTML in React.
          </p>
        </div>
        <p>Addition 52+85 is {52 + 85}</p>
        {Html}
        <button onClick={this.ChangdataFun}>Click</button>
        <button onClick={Changdata}>Click</button>
      </>
    );
  }
}

export default ClassCompojsx;
