import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FunctionCompoMenu from "./FunctionCompoMenu.jsx";
import WelcomeToFunctionalCompo from "./WelcomeToFunctionalCompo.jsx";
import FunctionalCompoState from "./02FunctionalCompoState.jsx";


const FunctionCompoRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<FunctionCompoMenu />}>

                    <Route path="welcometofunctionalcompo" element={<WelcomeToFunctionalCompo />} />
                    <Route path="functionalcompostate" element={<FunctionalCompoState />} />

                </Route>
            </Routes>
        </>
    );
};

export default FunctionCompoRouter;