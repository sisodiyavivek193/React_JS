import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import ClassCompoMenu from "./ClassCompoMenu";
import ClassCompoIntro from "./ClassCompoIntro.jsx";
import ClassCompoConstructor from "./02ClassCompoConstructor.jsx";
import ClassCompoState from "./03ClassCompoState.jsx";
import ClassCompojsx from "./04ClassCompojsx.jsx";
import ClassCompoProps from "./05ClassCompoProps.jsx";
import LifeCycle from "./07LifeCycle.jsx";


export default class ClassCompoRouter extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<ClassCompoMenu />}>
            <Route path="/classcompointro" element={<ClassCompoIntro />} />
            <Route
              path="/classcompoconstructor"
              element={<ClassCompoConstructor />}
            />
            <Route path="/classcompostate" element={<ClassCompoState />} />
            <Route path="/classcompojsx" element={<ClassCompojsx />} />
            <Route path="/classcompoprops" element={<ClassCompoProps />} />
            <Route path="/lifecycle" element={<LifeCycle />} />
          </Route>
        </Routes>
      </>
    );
  }
}
