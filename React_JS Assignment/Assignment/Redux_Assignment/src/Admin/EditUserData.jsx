import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import CustomHook from '.././Hooks/customHook';
import AdminDashbord from './AdminDashbord';

const EditUserData = () => {


    const [ErrorMsg, setErrorMsg] = useState("")

    const [state, setState] = useState({ name: "", email: "", password: "" })
    const { handleChange, inp, errors, UpdateData } = CustomHook(state, {});
    const navigate = useNavigate();

    const [disperror, setdisperror] = useState("");

    const { id } = useParams("");



    useEffect(() => {
        loginData();
    }, []);



    const handleChangeUpdateData = async () => {
        // console.log("inside the signupdata", inp);

        // console.log("name", inp.name);
        // console.log("passwword", inp.password);
        // console.log("called");
        try {
            const store = await axios.put(`http://localhost:5000/user/${id}`, inp)
                .then((res) => {
                    // console.log(inp.name);
                    console.log("than inside response", res);
                    if (res.status === 200) {
                        // UpdateData(res.data)
                        // console.log(res.data);
                        // setState(res.data)
                        // inp = res.data
                        setdisperror(false);
                        navigate("/admin/alluserdata")
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
                })
        }
        catch (error) {
            console.log(error);
        }
    }


    const loginData = async (event) => {
        // console.log("inside the signupdata", inp);

        // console.log("name", inp.name);
        // console.log("passwword", inp.password);
        // console.log("called");
        try {
            const store = await axios.get(`http://localhost:5000/user/${id}`)
                .then((res) => {
                    // console.log(inp.name);
                    console.log("than inside response", res);
                    if (res.status === 200) {
                        UpdateData(res.data)
                        // console.log(res.data);
                        setState(res.data)
                        // inp = res.data
                        setdisperror(false);
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
                })
        }
        catch (error) {
            console.log(error);
        }
    }




    return (
        <>
            {JSON.stringify(inp)}
            <div className="row">
                <div className="col-6">
                    <div className="row mt-3">
                        <div className="col">
                            <input type="text" className='form-control'
                                value={ErrorMsg ? "true" : inp.name}
                                placeholder='Enter User Name' name='name'
                                onChange={handleChange}
                                id='' />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <input type="Email" className='form-control'
                                value={ErrorMsg ? "true" : inp.email}
                                placeholder='EnterEmail' name='email'
                                onChange={handleChange}
                                id='' />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <input type="Password" className='form-control'
                                value={ErrorMsg ? "true" : inp.password}
                                placeholder='Enter Password' name='password'
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col">
                            <button className='btn btn-primary ' onClick={handleChangeUpdateData}>Update </button>
                            <Link className='btn btn-primary mx-2' to="/admin/alluserdata">Back</Link>
                        </div>
                    </div>








                </div>
            </div>
        </>
    );
};

export default EditUserData;