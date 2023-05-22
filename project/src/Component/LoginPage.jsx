import React, { useEffect, useState } from 'react';
import CustomHook from '../Hooks/customHook';

const LoginPage = () => {
    const [username, setusername] = useState("");
    const [email, setemail] = useState("");

    const { handleChange, inp, errors } = CustomHook({}, {});
    const [ActiveClass, setActiveClass] = useState(false);
    // console.log(handleChange, " vvvv");
    // console.log(inp, " inp");
    // console.log(errors, " errors");


    const Btnclick = (e) => {
        setActiveClass(!ActiveClass);

    };

    // CustomHook(".thisrequired");
    // console.log(CustomHook(".thisrequired"), " vvvv");

    const signindata = (event) => {
        event.preventDefault();
    }
    // const clearInputData = () => {
    //     setusername("");
    //     setemail("");
    // }
    const signupdata = (event) => {
        event.preventDefault();
        // console.log("called");








        // fetch("http://localhost:5000/user", {
        //     method: "POST", // *GET, POST, PUT, DELETE, etc.
        //     mode: "no-cors", // no-cors, *cors, same-origin
        //     // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        //     // headers: {
        //     //   "Content-Type": "application/json",
        //     //   // 'Content-Type': 'application/x-www-form-urlencoded',
        //     // },
        //     body: JSON.stringify(CustomHook.target.value)
        // }).then((res) => res.json()).then((result) => {
        //     console.log(result);
        //     // navigate("/login")
        // })   
        // console.log(CustomHook.value, "vvv");



    }

    console.log(inp);
    const registration = (event) => {
        event.preventDefault();
        // console.log("save data", inp);
        // fetch("http://localhost/API/registration", {
        fetch("http://localhost:5000/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(inp)
        }).then((res) => res.json()).then((result) => {
            console.log(result);
            //   navigate("/login") 

            username();
            email();

        })
        // fetch(`https://jayramin.000webhostapp.com/loginget?username=${inp.username}&password=${inp.password}`).then((res) => res.json()).then((result) => {
        //   console.log(result);
        // })

    }


    return (
        <>
            <section className='Sec_1'>

                <div className="login-wrap">
                    <div className="login-html ">
                        <input id="tab-1" type="radio" name="tab" onClick={Btnclick} className="sign-in" defaultChecked />
                        <label htmlFor="tab-1" className="tab">
                            Sign In
                        </label>
                        <input id="tab-2" type="radio" name="tab" className="sign-up input" />
                        <label htmlFor="tab-2" className="tab">
                            Sign Up
                        </label>
                        <div className="login-form">

                            <form action="" method="post" className="sign-in-htm" onSubmit={signindata}>
                                <div className="group">
                                    {/* {JSON.stringify(handleChange)} */}
                                    <label className="label">
                                        Username
                                    </label>
                                    <input type="text" name='name' onBlur={handleChange} className="thisrequired" />
                                    {/* {errors.usernameerror ? <span>This Feild is Required</span> : <></>} */}
                                </div>
                                <div className="group">
                                    <label className="label">
                                        Password
                                    </label>
                                    <input type="password" name='password' onBlur={handleChange} className="thisrequired" />
                                </div>
                                {/* <div className="group">
                                    <input id="check" type="checkbox" className="check" />
                                    <label>
                                        <span className="icon"></span> Keep me Signed in
                                    </label>
                                </div> */}
                                <div className="group">
                                    <input type="submit" className='button' value="Sign In" />
                                </div>
                                <div className="hr"></div>
                                <div className="foot-lnk">
                                    <a href="#forgot">Forgot Password?</a>
                                </div>
                            </form>

                            <form action="" method="post" className="sign-up-htm" onSubmit={registration} s>
                                <div className="group">
                                    <label htmlFor="user" className="label">
                                        Username
                                    </label>

                                    <input type="text" value={username} onChange={(e) => setusername(e.target.value)} name='name' onBlur={handleChange} className="thisrequired" />
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">
                                        Email Address
                                    </label>
                                    <input type="text" name='email' value={email} onChange={(e) => setemail(e.target.value)} onBlur={handleChange} className="thisrequired" />
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">
                                        Password
                                    </label>
                                    <input type="password" name='password' onBlur={handleChange} className="thisrequired" data-type="password" />
                                </div>
                                {/* <div className="group">
                                    <label htmlFor="pass" className="label">
                                        Repeat Password
                                    </label>
                                    <input type="password" name='Repeat Password' onBlur={handleChange} className="thisrequired" data-type="password" />
                                </div> */}

                                <div className="group">
                                    <input type="submit" className="button" value="Sign Up" />
                                </div>
                                <div className="hr"></div>
                                <div className="foot-lnk">
                                    <label htmlFor="tab-1">Already a member?</label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default LoginPage;