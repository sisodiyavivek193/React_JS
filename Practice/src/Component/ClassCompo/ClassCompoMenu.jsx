import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

class ClassCompoMenu extends Component {
  render() {
    return (
      <>
        <ul>
          <li className="mt-2 ">
            <Link to="classcompointro" className="h4  text-capitalize ">
              class component intro
            </Link>
          </li>
          <li className="mt-2 ">
            <Link to="classcompoconstructor" className="h4  text-capitalize ">
              class component constructor
            </Link>
          </li>
          <li className="mt-2 ">
            <Link to="classcompostate" className="h4  text-capitalize ">
              class component state
            </Link>
          </li>
          <li className="mt-2 ">
            <Link to="classcompojsx" className="h4  text-capitalize ">
              class component jsx
            </Link>
          </li>
          <li className="mt-2 ">
            <Link to="classcompoprops" className="h4  text-capitalize ">
              class component props
            </Link>
          </li>
          <li className="mt-2 ">
            <Link to="lifecycle" className="h4  text-capitalize ">
              life Cycle
            </Link>
          </li>
          <li className="mt-2 ">
            <Link to="loaderlifecycle" className="h4  text-capitalize ">
              loader life Cycle
            </Link>
          </li>
        </ul>
        <Outlet></Outlet>
      </>
    );
  }
}

export default ClassCompoMenu;
