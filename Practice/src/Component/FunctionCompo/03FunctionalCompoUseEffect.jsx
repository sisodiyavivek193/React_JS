import React, { useEffect, useLayoutEffect, useState } from 'react';

const FunctionalCompoUseEffect = () => {
    const [state, setstate] = useState("vivek")
    const [Anything, Kuchbhi] = useState("new")


    useEffect(() => {
        console.log("called of useEffect Anything");
    }, [Anything]);


    // useLayoutEffect(() => {
    //     console.log("called of useLayoutEffect");
    // });


    const Btnclick = () => {
        // console.log("callad");
        setstate("sdfghj")
        Kuchbhi("change")
    };

    return (
        <>
            {state}
            {Anything}
            <button onClick={Btnclick}>Click</button>
        </>
    );
};

export default FunctionalCompoUseEffect;