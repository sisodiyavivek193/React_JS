import React, { useEffect, useState } from 'react';

const CustomHook = () => {

    useEffect(() => {
        const creates = document.querySelectorAll(".thisrequired");

        creates.forEach((element) => {
            element.addEventListener('blur', inputchange);

        })
    }, []);


    const inputchange = (event) => {

        const element = event.target;
        console.log(element);

        // console.log(event);

        const val = element.getAttribute("name");


        const error = val + "required";

        const text = document.createElement("SPAN");
        text.innerHTML = error;

        const validation = element.nextSibling;

        console.log(validation);

        if (element.value === "") {
            if (!validation || validation.nodeName !== "SPAN") {
                element.insertAdjacentElement("afterend", text);
            }
        } else {
            if (validation && validation.nodeName === "SPAN") {
                validation.remove();
            }

        }


    }

    return {
        inputchange,

    }
    // console.log(inputchange);

}
export default CustomHook;