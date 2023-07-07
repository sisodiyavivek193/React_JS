import React, { useEffect, useState } from 'react';
import { Await, json } from 'react-router-dom';

const ApiFatch = () => {
    const [api, setapi] = useState();
    const [fatch, setfatch] = useState(false);

    useEffect(() => {
        // fetch("https://justjayapi.000webhostapp.com/allusers").then((res) => res.json()).then((result) => {
        //     setapi(result);
        FatchAllData();
    }, [])


    const FatchAllData = async () => {
        const response = await fetch("https://justjayapi.000webhostapp.com/allusers").then((res) => res.json()).then((result) => {
            setapi(result);
            setfatch(true);
        })
    }


    let Listdata = "";
    if (fatch) {

        Listdata = Object.entries(api.Data).map(([key, value], i) => {

            // console.log("value is", value.username);
            // console.log("key is", key);
            return <>
                <li key={key}>
                    {value.username}
                </li>
            </>
        })

    } else {
        Listdata = <>No data</>
    }

    return (
        <>
            {/* {JSON.stringify(api)} */}
            {Listdata}
        </>

    );
};

export default ApiFatch;

