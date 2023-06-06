import React from 'react';
import { useState } from 'react';

const CustomHook = (intval, initError) => {

    const [inp, setInput] = useState(intval)
    const [errors, setError] = useState(initError)

    const handleChange = (e) => {


        setInput((inp) => ({ ...inp, [e.target.name]: e.target.value }));
        const errorSpan = document.createElement('SPAN');
        // console.log(errorSpan);
        const errorKey = e.target.name;
        // const errorMessage = `${e.target.name} is required`;
        const errorMessage = e.target.name + ' is required';
        // console.log(errorMessage);

        const errorContainer = e.target.nextElementSibling;
        // console.log(e.target);
        // console.log(e.target.value);
        console.log(e.target.className);
        // if (e.target.className == "thisrequired") {
        if (e.currentTarget.classList.contains = "thisrequired") {
            if (e.target.value === "") {
                console.log("error");
                setError((prevErrors) => ({ ...prevErrors, [errorKey]: errorMessage }));
                // console.log({ [errorKey]: errorMessage });


                if (!errorContainer || errorContainer.nodeName !== 'SPAN') {

                    // errorSpan.style.position = 'absolute';
                    errorSpan.textContent = errorMessage;
                    e.target.insertAdjacentElement('afterend', errorSpan);
                }
            } else {
                setError((prevErrors) => ({ ...prevErrors, [errorKey]: "" }));
                if (errorContainer && errorContainer.nodeName === 'SPAN') {
                    errorContainer.remove();
                }
            }
        }
    }

    const UpdateData = (data) => {
        setInput(data)
    }
    return { handleChange, inp, errors, UpdateData }
};

export default CustomHook;





























// import React, { useEffect, useState } from 'react';

// const CustomHook = () => {

//     useEffect(() => {
//         const creates = document.querySelectorAll(".thisrequired");

//         creates.forEach((element) => {
//             element.addEventListener('blur', inputchange);

//         })
//     }, []);


//     const inputchange = (event) => {

//         const element = event.target;
//         console.log(element);

//         // console.log(event);

//         const val = element.getAttribute("name");


//         const error = val + "required";

//         const text = document.createElement("SPAN");
//         text.innerHTML = error;

//         const validation = element.nextSibling;

//         console.log(validation);

//         if (element.value === "") {
//             if (!validation || validation.nodeName !== "SPAN") {
//                 element.insertAdjacentElement("afterend", text);
//             }
//         } else {
//             if (validation && validation.nodeName === "SPAN") {
//                 validation.remove();
//             }

//         }


//     }

//     return {
//         inputchange,

//     }
//     // console.log(inputchange);

// }
// export default CustomHook;