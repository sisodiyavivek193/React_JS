import React, { useState } from 'react';

const CustomHook = (inputdata, inputerror) => {
    const [input, setInput] = useState(inputdata)
    const [error, setError] = useState(inputerror)
    const inputchange = (e) => {
        // const SpanId =
        console.log("called");
        setInput((input) => ({ ...input, [e.target.name]: e.target.value }))
        if (e.target.name == "username") {
            if (e.target.value == "") {
                setError({ ...error, "usernameerror": "username is requrid" })

            } else {
                setError({ ...error, "usernameerror": "" })

            }

        }

    }
    console.log(input);

    return {
        inputchange,
        input,
        error

    }

};

export default CustomHook;