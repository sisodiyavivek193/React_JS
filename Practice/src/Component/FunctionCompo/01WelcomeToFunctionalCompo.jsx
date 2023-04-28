import React from 'react';

const WelcomeToFunctionalCompo = () => {
    return (
        <>
            <ul>
                <li>A React functional component is a simple JavaScript function that accepts props and returns a React element.</li>
            </ul>
            <h3> QUE-1 What is hooks?</h3>
            <p>ANS-1 Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed. <br />
                <strong>Hook Rules</strong>
                <ul>
                    <li>Hooks can only be called inside React function components.</li>
                    <li>Hooks can only be called at the top level of a component.</li>
                    <li>Hooks cannot be conditional</li>
                </ul> </p>
            <h3> QUE-2 difference between class component and functional component</h3>
            <p>React supports two types of components, class components and functional components. A functional component is a plain <strong> JavaScript function that returns JSX.</strong> A class component is a JavaScript class that extends <b> React.Component and returns JSX inside a render method.</b></p>
        </>
    );
};

export default WelcomeToFunctionalCompo;