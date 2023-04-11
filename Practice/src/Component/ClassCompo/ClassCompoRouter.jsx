import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import ClassCompoMenu from "./ClassCompoMenu";
import ClassCompoIntro from "./ClassCompoIntro.jsx";
import ClassCompoConstructor from "./02ClassCompoConstructor.jsx";
import ClassCompoState from "./03ClassCompoState.jsx";
import ClassCompojsx from "./04ClassCompojsx.jsx";
import ClassCompoProps from "./05ClassCompoProps.jsx";
import LifeCycle from "./07LifeCycle.jsx";
import LoaderLifeCycle from "./08LoaderLifeCycle.jsx";
import CanditionalRendering from "./10CanditionalRendering.jsx";
import ListKeysMap from "./11ListKeysMap.jsx";
import ListKeysMapExample from "./12ListKeysMapExample.jsx";
import DynamicSubMenu from "./13DynamicSubMenu";
import ClassCompoSpreadRest from "./14ClassCompoSpreadRest.jsx";
import ClassCompoControlledCompo from "./15ClassCompoControlledCompo.jsx";
import ClassCompoControlledCompoObject from "./15.1ClassCompoControlledCompoObject.jsx";
import ClassCompoUnControlledCompo from "./16ClassCompoUnControlledCompo.jsx";
import ClassCompoCompositionVsInheritance from "./17ClassCompoCompositionVsInheritance.jsx";
import StateLiftingMain from "./19StateLiftingMain.jsx";

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
            <Route path="/loaderlifecycle" element={<LoaderLifeCycle />} />
            <Route
              path="/Canditionalrendering"
              element={<CanditionalRendering />}
            />
            <Route path="/Listkeysmap" element={<ListKeysMap />} />
            <Route path="/ListKeysmapexample" element={<ListKeysMapExample />} />
            <Route path="/dynamicsubmenu" element={<DynamicSubMenu />} />
            <Route path="/classcompospreadrest" element={<ClassCompoSpreadRest />} />
            <Route path="/classcompocontrolledcompo" element={<ClassCompoControlledCompo />} />
            <Route path="/classcompocontrolledcompoobject" element={<ClassCompoControlledCompoObject />} />
            <Route path="/classcompouncontrolledcompo" element={<ClassCompoUnControlledCompo />} />
            <Route path="/classcompocompositionvsinheritance" element={<ClassCompoCompositionVsInheritance />} />
            <Route path="/stateliftingmain" element={<StateLiftingMain />} />
          </Route>
        </Routes>
      </>
    );
  }
}
