import React, { Component } from "react";
import LoaderCompo from "./09LoaderCompor.jsx";

class LoaderLifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = { data: "vivek ", loader: false };
  }
  // componentWillMount() {

  // }
  // render pachi je method  called ty tene componentDidMount kevay
  componentDidMount() {
    setTimeout(() => {
      this.setState({ data: "Nandan", loader: true });
    }, 3000);
  }

  // componentWillReceiveProps(nextProps) {

  // }

   //jyare props and state ni value ke event ma jyare component refresh karva ni jarur pade tyare shouldcomponentupdate ni value true ke flase lakhva ni jarur che je thi component refresh thai che
  //   shouldComponentUpdate(nextProps, nextState) {
  //     return
  //   }

  // componentWillUpdate(nextProps, nextState) {

  // }

    // jyare component updated thai gayo hoi tyare componentDidUpdate() method called thai che
  componentDidUpdate() {
    setTimeout(() => {
      this.setState({ loader: false });
    }, 3000);
  }


    // jyare component updated thai gayo hoi tyare componentDidUpdate() method called thai che
  // componentWillUnmount() {

  // }

  render() {
    let Htmldisp = null;//variable with null value will be adopt any data with its type
    // let Htmldisp = "";//variable with empty value will be adopt any value with only String type
    // let Htmldisp = 0;//variable with empty value will be adopt any value with only Num type
    // let Htmldisp = {};//variable with empty value will be adopt any value with only object type
    // let Htmldisp = [];//variable with empty value will be adopt any value with only Array type

    if (this.state.laoder) {
      // jyare loader ni value true thase tyare loader show thase
      Htmldisp = <LoaderCompo />;
    } else {
      // jyare loader ni value flase thase tyare data change and show thase
      Htmldisp = <p>{this.state.data}</p>;
    }

    return (
      <div>
        {/* {this.state.loader ? (
          <LoaderCompo></LoaderCompo>
        ) : (
          <p>{this.state.data}</p>
        )} */}
        {/* {JSON.stringify(this.state.loader)} */}
        {Htmldisp}
      </div>
    );
  }
}

export default LoaderLifeCycle;
