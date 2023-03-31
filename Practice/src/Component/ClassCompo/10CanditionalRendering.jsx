import React, { Component } from "react";

class CanditionalRendering extends Component {
  constructor(props) {
    super(props);
    this.state = { theme: "dark" };
  }
  changthemedark = () => {
    this.setState({ theme: "dark" });
  };
  changthemegreen = () => {
    this.setState({ theme: "green" });
  };
  toggletheme = () => {
    if (this.state.theme == "dark") {
      this.setState({ theme: "green" });
    } else {
      this.setState({ theme: "dark" });
    }
  };
  render() {
    let ThemeDarkData = "";
    if (this.state.theme == "dark") {
      ThemeDarkData = (
        <div className="dark">This will display dark theme data</div>
      );
    } else {
      ThemeDarkData = (
        <div className="Green">This will display Green theme data</div>
      );
    }
    return (
      <>
        <button onClick={this.changthemedark}>Click dark</button>
        <button onClick={this.changthemegreen}>Click Green</button>
        <button onClick={this.toggletheme}>toggle theme</button>
        <div className="conditional">
          {this.state.theme == "dark" ? "vivek" : "Kuchbhi"}
        </div>
        {ThemeDarkData}
        <div
          // className="dark"
          style={
            this.state.theme == "dark"
              ? { backgroundColor: "black", color: "yellow" }
              : { backgroundColor: "green", color: "black" }
          }
          //   style={{ backgroundColor: "black", color: "yellow" }}
        >
          this will change
        </div>
      </>
    );
  }
}

export default CanditionalRendering;
