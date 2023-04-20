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


            {JSON.stringify(formdata1)}
            {JSON.stringify(formdata)}
            <form action="">
                {/* value={formdata.inputdata.fname ? formdata.inputdata.fname : ""} */}
                <input type="text" onChange={inpitdada} name="fname" id="title" value={formdata.inputdata.fname ? formdata.inputdata.fname : ""} />
                <input type="password" onChange={inpitdada} name='password' value={formdata.inputdata.password ? formdata.inputdata.password : ""} />
                <input type="submit" onClick={save} value="Submit" />

            </form>
        </>
    );
};

export default FunctionalCompoUseEffectExample;