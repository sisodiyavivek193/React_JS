import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FunctionCompoMenu from "./FunctionCompoMenu.jsx";
import WelcomeToFunctionalCompo from "./WelcomeToFunctionalCompo.jsx";
import FunctionalCompoState from "./02FunctionalCompoState.jsx";
import FunctionalCompoUseEffect from "./03FunctionalCompoUseEffect.jsx";
import FunctionalCompoUseEffectExample from "./3.1FunctionalCompoUseEffectExample.jsx";
import SIRFunctionalCompoUseContext from "./SIRFunctionalCompoUseContext.jsx";

import UseContext from "./07UseContext.jsx/FunctionalCompoUseContext.jsx";


const FunctionCompoRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<FunctionCompoMenu />}>

                    <Route path="welcometofunctionalcompo" element={<WelcomeToFunctionalCompo />} />
                    <Route path="functionalcompostate" element={<FunctionalCompoState />} />
                    <Route path="functionalcompouseeffect" element={<FunctionalCompoUseEffect />} />
                    <Route path="functionalcompoUseeffectexample" element={<FunctionalCompoUseEffectExample />} />
                    <Route path="sirfunctionalcompousecontext" element={<SIRFunctionalCompoUseContext />} />
                    <Route path="usecontext" element={<UseContext />} />

                </Route>
            </Routes>
        </>
    );
};

export default FunctionCompoRouter;