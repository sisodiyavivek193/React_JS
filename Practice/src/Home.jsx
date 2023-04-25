import React, { Component } from "react";
import Child from "./styled/child.jsx"

class Home extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <div className="row my-4">
            <div className="col-lg-4">
              {/* <h2>vivek</h2> */}
              <Child MDBCardRuppe="₹12000" MDBCardCard="SBI ATM" />
            </div>
            {/* <div className="col-lg-4">
              <Child MDBCardName="Balt" />
            </div> */}
          </div>
        </div>
      </section>

    );
  }
}

export default Home;
