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