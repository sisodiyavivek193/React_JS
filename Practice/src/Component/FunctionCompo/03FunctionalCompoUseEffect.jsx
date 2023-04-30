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
            <div>
                <ul>
                    <li>useEffect always called tay che tena mate tene dependency tarike  empty arry apvama ave che</li>
                    <li>useEffect e constructor jevuu kaam kre che</li>
                    <li> useEffect ne dependency no apvama ave to function jevu kam ape ane  dependency apvama ave to constructor jevu kam kre</li>
                </ul>
            </div>
            {state}
            {Anything}


            <button onClick={Btnclick}>Click</button>
        </>
    );
};

export default FunctionalCompoUseEffect;