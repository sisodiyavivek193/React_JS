

import React, { useEffect, useState } from 'react';
import CustomHook from '../Hooks/customHook';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const AddUserData = () => {

    const [username, setusername] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    // const [cookies, setCookie] = useCookies(["name"]);




    // const navigate = useNavigate();
    const { handleChange, inp, errors } = CustomHook({ role: "2" }, {});

    const registration = (event) => {
        event.preventDefault();

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
    }


    var save = () => {
        // navigate("/admin/alluserdata");
    }

    return (
        <div className="row">
            <div className="col">

                <h2 className='text-center mt-4'>Add User Data</h2>
                <form action="" method="post" className="sign-up-htm text-center" onSubmit={registration} s>
                    <div className="group mt-2">
                        <label htmlFor="user" className="label  mt-4">
                            Username
                        </label>

                        <input type="text" value={username} onChange={(e) => setusername(e.target.value)} name='name' onBlur={handleChange} className="thisrequired h5" />
                    </div>
                    <div className="group">
                        <label htmlFor="pass" className="label mt-4">
                            Email Address
                        </label>
                        <input type="text" name='email' value={email} onChange={(e) => setemail(e.target.value)} onBlur={handleChange} className="thisrequired" />
                    </div>
                    <div className="group">
                        <label htmlFor="pass" className="label mt-4">
                            Password
                        </label>
                        <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} name='password' onBlur={handleChange} className="thisrequired" data-type="password" />
                    </div>


                    <div className="group">
                        <Link to="/admin/alluserdata">
                            <input type="submit" className="btn btn-primary  button mt-4" value="Sign Up" />
                        </Link>
                        <Link className='btn btn-primary mx-2' to="/admin/alluserdata">Back</Link>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddUserData;