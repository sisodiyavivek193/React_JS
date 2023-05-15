import React, { useEffect, useState } from 'react';

const CustomHook = () => {





    useEffect(() => {
        const Creates = document.querySelectorAll(".thisrequired");

        Creates.forEach((element) => {
            element.addEventListener('blur', inputchange);

        })
    }, []);


    const inputchange = (event) => {

        const element = event.target;
        console.log(element);

        console.log(event);

        const val = element.getAttribute("name");


        const error = val + "required";

        const text = document.createElement("SPAN");
        text.innerHTML = error;

        const validation = element.nextsibling;


        if (element.value === "") {
            if (!validation || validation.nodename !== "SPAN") {
                element.insertAdjacentElement("afterend", text);
            }
            console.log("colld");


        } else {
            if (validation && validation.nodename !== "SPAN") {
                validation.remove();
            }

        }


    }

    return {
        inputchange,

    }
    console.log(inputchange);

}
export default CustomHook;