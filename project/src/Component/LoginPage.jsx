import React, { useEffect, useState } from 'react';
import CustomHook from '../Hooks/customHook';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username, setusername] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");


    const [disperror, setdisperror] = useState(false);

    const navigate = useNavigate();
    const { handleChange, inp, errors } = CustomHook({ role: "Clint" }, {});
    const [ActiveClass, setActiveClass] = useState(false);
    // console.log(handleChange, " vvvv");
    // console.log(inp, " inp");
    // console.log(errors, " errors");



    const Btnclick = (e) => {
        setActiveClass(!ActiveClass);

    };

    // CustomHook(".thisrequired");
    // console.log(CustomHook(".thisrequired"), " vvvv");
    const loginData = async (event) => {
        // console.log("inside the signupdata", inp);

        event.preventDefault();
        console.log("name", inp.name);
        console.log("passwword", inp.password);
        // console.log("called");
        try {
            await axios.get(`http://localhost:5000/user?name=${inp.name}&password=${inp.password}`)
                .then((response) => {
                    console.log("than inside response", response);
                    if (response.status == 200) {
                        console.log("server connect", response);
                        // console.log("server connect", response.data[0].role);

                        if (response.data[0].role == 1) {
                            console.log("server connect inside if", response.data[0]);
                            navigate("/admindashbord")
                        } else {
                            navigate("/dashbord")
                        }


                    } else {
                        console.log(" error server  connect");
                    }

                }).catch((error) => {
                    // console.log("vvvv", error);
                    setdisperror(true);
                    if (error.response) {
                        console.log(error.response);
                        console.log("server responded");
                    } else if (error.request) {
                        console.log("network error");
                    } else {
                        console.log(error);
                    }
                });;
        } catch (error) {
            console.log(error);
        }



    }

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

            setusername("");
            setemail("");
            setpassword("")
            // username();
            // email();

        })
        // fetch(`https://jayramin.000webhostapp.com/loginget?username=${inp.username}&password=${inp.password}`).then((res) => res.json()).then((result) => {
        //   console.log(result);
        // })

    }


    return (
        <>
            <section className='Sec_1'>

                <div className="login-wrap">

                    {disperror ? <>error while conectiong please try after osme time</> :
                        <>
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

                                    <form action="" method="post" className="sign-in-htm" onSubmit={loginData}>
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
                                            <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} name='password' onBlur={handleChange} className="thisrequired" data-type="password" />
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
                        </>
                    }

                </div>
            </section>

        </>
    );
};

export default LoginPage;