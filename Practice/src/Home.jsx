import React, { Component } from "react";
import Child from "./styled/child.jsx"
import Footer from "./styled/Footer.jsx"

class Home extends Component {
  render() {
    return (
      <>
        <section>
          <div className="container">
            <div className="row ">
              <div className="col-lg-4">
                {/* <h2>vivek</h2> */}
                <Child MDBCardRuppe="₹12000" MDBCardCard="SBI ATM" />
              </div>
              <div className="col-lg-4">
                <Child MDBCardName="Balt" />
              </div>
              <div className="col-lg-4">
                <Child MDBCardName="Balt" />
              </div>
            </div>
          </div>
        </section>
        <footer className=" mt-8" >
          <div className=" container">
            <div className="row ">
              {/* <div className="col ">
                <Footer />
              </div> */}

              <Footer />

            </div>
          </div>

        </footer>
      </>
    );
  }
}

export default Home;
