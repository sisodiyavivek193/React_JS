import React, { useState } from 'react';

const FunctionalCompoState = () => {
    const [state, setstate] = useState("vivek")
    const [state1, setstate1] = useState(true)
    let btnclick = () => {
        setstate("sisodiya")
        setstate1(!state1)
        console.log(JSON.stringify(!state1));
    }
    return (
        <div>
            <h3> QUE--What is useState?</h3>
            <p>ANS--UseState accepts an <u> initial  state</u> and<strong> returns two values</strong>:
        <ul>
            <li>The current state.</li>
            <li>A function that updates the state.</li>
            <li>The React useState Hook allows you to have state variables in functional components. You pass the initial state to this function, and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.</li>
        </ul>
            </p>    
            <br /><br /><br />


            {state}
            <div>{state1 ? <p>kaushik</p> : <p>valiya</p>}</div>


            
            <button onClick={btnclick}> click</button>
        </div>
    );
};

export default FunctionalCompoState ;










// import React, { useState } from 'react';

// const FunctionalCompoState = () => {
  
// };

// export default FunctionalCompoState;