import React, { useEffect, useState } from 'react';

const CustomHook = () => {





    useEffect(() => {
        const Creates = document.querySelectorAll(".thisrequired");

        Creates.forEach((element) => {
            element.addEventListener('Blur', inputchange);

        })
    }, []);


    const inputchange = (event) => {

        const element = event.target
        console.log(element);

        console.log(event);

        const val = element.getAttribute("name");


        const error = val + "required";

        const text = document.createElement("span");

        const validation = element.nextsibling;


        if (element.value === "") {
            if (!validation || validation.nodename !== "span") {
                element.insertAdjacentElement("afterend", text);
            }


        } else {
            if (validation && validation.nodename !== "span") {
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