import React, { useState } from 'react';

const CustomHook = () => {

    const { handleChange, inp, errors } = CustomHook({}, { usernameError: "" });
    // console.log(handleChange);
    const [ActiveClass, setActiveClass] = useState(false);
    const toggleForm = () => {
        setActiveClass(!ActiveClass);
    }
    return (
        <>
            <section className='Sec_1'>


                <div className="login-wrap">
                    <div className="login-html">
                        <input id="tab-1" type="radio" name="tab" className="sign-in" checked />
                        <label htmlFor="tab-1" className="tab">
                            Sign In
                        </label>
                        <input id="tab-2" type="radio" name="tab" className="sign-up" />
                        <label htmlFor="tab-2" className="tab">
                            Sign Up
                        </label>
                        <div className="login-form">
                            <div className="sign-in-htm">
                                <div className="group">
                                    <label htmlFor="user" className="label">
                                        Username
                                    </label>
                                    <input id="user" onBlur={handleChange} type="text" className="input" />
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">
                                        Password
                                    </label>
                                    <input id="pass" onBlur={handleChange} type="password" className="input" data-type="password" />
                                </div>
                                <div className="group">
                                    <input id="check" onBlur={handleChange} type="checkbox" className="check" checked />
                                    <label htmlFor="check">
                                        <span className="icon"></span> Keep me Signed in
                                    </label>
                                </div>
                                <div className="group">
                                    <input type="submit" onClick={toggleForm} className="button" value="Sign In" />
                                </div>
                                <div className="hr"></div>
                                <div className="foot-lnk">
                                    <a href="#forgot">Forgot Password?</a>
                                </div>
                            </div>
                            <div className="sign-up-htm">
                                <div className="group">
                                    <label htmlFor="user" className="label">
                                        Username
                                    </label>
                                    <input id="user" type="text" className="input" />
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">
                                        Password
                                    </label>
                                    <input id="pass" type="password" className="input" data-type="password" />
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">
                                        Repeat Password
                                    </label>
                                    <input id="pass" type="password" className="input" data-type="password" />
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">
                                        Email Address
                                    </label>
                                    <input id="pass" type="text" className="input" />
                                </div>
                                <div className="group">
                                    <input type="submit" className="button" value="Sign Up" />
                                </div>
                                <div className="hr"></div>
                                <div className="foot-lnk">
                                    <label htmlFor="tab-1">Already a member?</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default CustomHook;