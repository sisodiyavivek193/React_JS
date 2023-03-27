import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

class Example extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row ">
            <div className="col-12">
              <h1 className="text-center my-3 display-5">Example Component</h1>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-6">
              <Link to="classcomporouter" className="display-6 ">
                Class Component
              </Link>
            </div>
            <div className="col-6">
              <Link to="#" className="display-6 ">
                Function Component
              </Link>
            </div>
          </div>
          <div className="row ">
            <div className="col-12">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Example;
