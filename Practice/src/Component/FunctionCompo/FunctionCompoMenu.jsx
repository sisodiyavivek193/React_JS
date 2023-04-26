import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const FunctionCompoMenu = () => {
    return (
        <>
            <div className="row">
                <div className="col-6 offset-6">
                    <ul>
                        <li className="mt-2 ">
                            <Link to="welcometofunctionalcompo" className="h4  text-capitalize ">
                                Function Compo Intro
                            </Link>
                        </li>
                        <li className="mt-2 ">
                            <Link to="functionalcompostate" className="h4  text-capitalize ">
                                Function Compo State
                            </Link>
                        </li>
                        <li className="mt-2 ">
                            <Link to="functionalcompouseeffect" className="h4  text-capitalize ">
                                Function Compo Use Effect
                            </Link>
                        </li>
                        <li className="mt-2 ">
                            <Link to="functionalcompouseecallback" className="h4  text-capitalize ">
                                Function Compo Use Callback
                            </Link>
                        </li>
                        <li className="mt-2 ">
                            <Link to="functionalcompoUseeffectexample" className="h4  text-capitalize ">
                                Function Compo Use Effect Example
                            </Link>
                        </li>
                      
                        <li className="mt-2 ">
                            <Link to="usecontext" className="h4  text-capitalize ">
                                Function Compo Use Context
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="row">
                <div className="col">

                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default FunctionCompoMenu;