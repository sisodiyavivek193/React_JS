import React, { useState } from 'react';
import CustomHook from '../Hooks/customHook';


const LoginPage = () => {

    const { inputchange, inputdata, error } = CustomHook({}, {});
    // console.log(handleChange);
    console.log(inputdata);

    const [ActiveClass, setActiveClass] = useState(false);
    const Btnclick = (e) => {
        setActiveClass(!ActiveClass);
    }

    return (
        <>
            <section className='Sec_1'>

                <div className="login-wrap">
                    <div className="login-html">
                        <input id="tab-1" type="radio" name="tab" onClick={Btnclick} className="sign-in" defaultChecked />
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
                                    {JSON.stringify(error)}
                                    <label className="label">
                                        Username
                                    </label>
                                    <input onBlur={inputchange} type="text" name='username' className="input" />
                                    {error.usernameerror ? <span>{error.usernameerror}</span> : <></>}
                                </div>
                                <div className="group">
                                    <label className="label">
                                        Password
                                    </label>
                                    <input onBlur={inputchange} type="password" name='password' className="input" />
                                </div>
                                {/* <div className="group">
                                    <input id="check" type="checkbox" className="check" />
                                    <label>
                                        <span className="icon"></span> Keep me Signed in
                                    </label>
                                </div> */}
                                <div className="group">
                                    <input type="submit" className="button" value="Sign In" />
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
                                    <input type="text" className="input" />
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">
                                        Password
                                    </label>
                                    <input type="password" className="input" data-type="password" />
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">
                                        Repeat Password
                                    </label>
                                    <input type="password" className="input" data-type="password" />
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">
                                        Email Address
                                    </label>
                                    <input type="text" className="input" />
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

export default LoginPage;