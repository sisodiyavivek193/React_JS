import React from 'react';
import { useReducer } from 'react';


const initval = 0;
function funname(state, action) {
    console.log("State ", state, "action ", action);
    switch (action) {
        case "decrement":
            return state - 1;
        case "increment":
            return state + 1;
        case "reset":
            return 0;

        default:
            console.log("Called by default");
            break;
    }
}
const FunctionalCompoUseReducer = () => {
    const [state, dispatch] = useReducer(funname, initval)
    return (
        <>
            <h2>useReducer</h2>
            <p>ak j function ander multiple action handle karvi hoi tyare useReducer</p>
            <h4>Dispatch</h4>
            <p>The dispatch function returned by useReducer lets you update the state to a different value and trigger a re-render. You need to pass the action as the only argument to the dispatch function.</p>

            <div className="box text-center" >
                {state}
                <br />
                <button className='btn mx-3' onClick={() => dispatch("increment")}>increment</button>
                <button className='btn mx-3' onClick={() => dispatch("decrement")}>decrememnt</button>
                <button className='btn mx-3' onClick={() => dispatch("reset")}>reset</button>
            </div>
        </>
    );
};

export default FunctionalCompoUseReducer;





// import React from 'react';
// import { useState } from 'react';
// import { useReducer } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// const initval = { count: 0, show: false }
// function funname(state, action) {
//     console.log("State ", state.count, "action ", action.type);
//     switch (action.type) {
//         case "decrement":
//             return { count: state.count - 1 }
//         case "increment":
//             return { count: state.count + 1 }
//         case "show":
//             return { show: true }
//         default:
//             console.log("Called by default");
//             break;
//     }
// }
// const FunctionalCompoUseReducer = () => {
//     // const [stateData,setStateData] = useState("")
//     const [state, dispatch] = useReducer(funname, initval)
//     // const [show, setShow] = useState(false);

//     // const handleClose = () => setShow(false);
//     // const handleShow = () => setShow(true);
//     return (
//         <>
//             <button onClick={() => dispatch({ type: 'decrement' })}>decrememnt</button>
//             {state.count}
//             <button onClick={() => dispatch({ type: 'increment' })}>increment</button>


//             <Button variant="primary" onClick={() => dispatch({ type: 'show' })}>
//                 Launch demo modal
//             </Button>

//             <Modal show={state.show}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Modal heading</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" >
//                         Close
//                     </Button>
//                     {/* <Button variant="primary" onClick={handleClose}>
//                         Save Changes
//                     </Button> */}
//                 </Modal.Footer>
//             </Modal>
//         </>
//     );
// };

// export default FunctionalCompoUseReducer;