import { useRef, React } from 'react';

const FunctionalCompoUseRef = () => {

    const counter = useRef(0);

    // increase the counter by one
    const handleIncreaseCounter = () => {
        counter.current = counter.current + 1;
        console.log(counter.current);
    };
    return (
        <>
            <h1>Learn about useRef!</h1>
            <h2>Value: {counter.current}</h2>
            <button onClick={handleIncreaseCounter}>
                Increase counter
            </button>

        </>
    );
};

export default FunctionalCompoUseRef;
