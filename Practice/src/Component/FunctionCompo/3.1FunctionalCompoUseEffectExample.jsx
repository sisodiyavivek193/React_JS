import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';

const FunctionalCompoUseEffectExample = () => {

    const [formdata, setformdata] = useState({ inputdata: { fname: null, password: null } });
    const [formdata1, setformdata1] = useState({});

    useEffect(() => {
        setformdata(() => ({
            inputdata: {}
        }));

    }, [formdata1])


    const inpitdada = (e) => {
        console.log(e.target.value);
        setformdata((data) => ({
            inputdata: { ...data.inputdata, [e.target.name]: e.target.value }
        }))
    }

    var save = (event) => {
        event.preventDefault();
        // console.log(formdata.inputdata);
        setformdata1(formdata.inputdata);
    }


    return (

        <>



            <div className="row">
                <div className="col-lg-6 ">
                    {JSON.stringify(formdata)}
                    <form action="">
                        {/* value={formdata.inputdata.fname ? formdata.inputdata.fname : ""} */}
                        <MDBInput type="text" label="Firstname" className='mt-3 d-block' size='lg' onChange={inpitdada} name="fname" id="title" value={formdata.inputdata.fname ? formdata.inputdata.fname : ""} />
                        <MDBInput type="password" label="Password" size='lg' className='mt-3 d-block' onChange={inpitdada} name='password' value={formdata.inputdata.password ? formdata.inputdata.password : ""} />
                        <MDBBtn type="submit" onClick={save} value="Submit" className='mt-3'>Save</MDBBtn>

                    </form>
                </div>
                <div className="col-lg-6">
                    {JSON.stringify(formdata1)}

                </div>
            </div>


        </>
    );
};

export default FunctionalCompoUseEffectExample;