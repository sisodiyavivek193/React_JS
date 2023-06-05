import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CustomHook from '.././Hooks/customHook';
import AdminDashbord from './AdminDashbord';

const EditUserData = () => {


    const [ErrorMsg, setErrorMsg] = useState("")

    const [state, setState] = useState({ name: "", email: "", password: "" })
    const { handleChange, inp, errors, UpdateData } = CustomHook(state, {});
    const navigate = useNavigate();
    const [allUser, setAllUser] = useState("");

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
                    <div className="card m-5">
                        <input type="text" className='form-control'
                            value={ErrorMsg ? "true" : inp.name}
                            placeholder='Enter User Name' name='name'
                            onChange={handleChange}
                            id='' />
                        <input type="Email" className='form-control'
                            value={ErrorMsg ? "true" : inp.email}
                            placeholder='EnterEmail' name='email'
                            onChange={handleChange}
                            id='' />

                        <input type="Password" className='form-control'
                            value={ErrorMsg ? "true" : inp.password}
                            placeholder='Enter Password' name='password'
                            onChange={handleChange}
                        />
                        <button onClick={handleChangeUpdateData}>Update Data</button>

                    </div>
                </div>
            </div>


        </>
    );
};

export default EditUserData;