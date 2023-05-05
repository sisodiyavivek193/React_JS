import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FunctionCompoMenu from "./FunctionCompoMenu.jsx";
import WelcomeToFunctionalCompo from "./01WelcomeToFunctionalCompo.jsx";
import FunctionalCompoState from "./02FunctionalCompoState.jsx";
import FunctionalCompoUseEffect from "./03FunctionalCompoUseEffect.jsx";
import FunctionalCompoUseCallback from "./04FunctionalCompoUseCallback.jsx";
import FunctionalCompoUseMemo from "./05FunctionalCompoUseMemo.jsx";
import FunctionalCompoUseEffectExample from "./3.1FunctionalCompoUseEffectExample.jsx";
import UseContext from "./07UseContext.jsx/FunctionalCompoUseContext.jsx";
import FunctionalCompoUseReducer from "./08FunctionalCompoUseReducer.jsx";


const FunctionCompoRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<FunctionCompoMenu />}>

                    <Route path="welcometofunctionalcompo" element={<WelcomeToFunctionalCompo />} />
                    <Route path="functionalcompostate" element={<FunctionalCompoState />} />
                    <Route path="functionalcompouseeffect" element={<FunctionalCompoUseEffect />} />
                    <Route path="functionalcompouseecallback" element={<FunctionalCompoUseCallback />} />
                    <Route path="functionalcompoUseeffectexample" element={<FunctionalCompoUseEffectExample />} />
                    <Route path="usecontext" element={<UseContext />} />
                    <Route path="functionalcompousememo" element={<FunctionalCompoUseMemo />} />
                    <Route path="functionalcompousereducer" element={<FunctionalCompoUseReducer />} />

                </Route>
            </Routes>
        </>
    );
};

export default FunctionCompoRouter;