import React, { Component } from "react";

class ClassCompoState extends Component {
  constructor(props) {
    super(props);
    this.state = { kuchbhi: "hello", vvv: "hiii" };
    // Arrow fun no use na kriye tyre binding krvu
    // this.ChangeData = this.ChangeData.bind(this);
  }
  //   ChangeData() {
  //     // changing state
  //     this.setState({ kuchbhi: "new data", vvv: "aaaa" });
  //   }
  ChangeData = () => {
    // changing state
    this.setState({ kuchbhi: "new data", vvv: "aaaa" });
  };

  render() {
    // let Something = "Data";
    // const changeDataFunc=()=>{
    //     console.log("called");
    //     Something = "Change"
    // }
    return (
      <>
        <h3>message :</h3>
        <p>
          {this.state.kuchbhi} <br />
          {this.state.vvv}
        </p>
        <button onClick={this.ChangeData}>Click</button>
        {/* <button onClick={this.changeDataFunc}>Click</button>
        {Something}
        <p>
          <strong>State</strong>
          {this.state.data}
        </p> */}
      </>
    );
  }
}

export default ClassCompoState;
