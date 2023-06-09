import { React, useContext } from 'react';
import { ThemeContext } from "./Panel";
import { MDBBtn } from 'mdb-react-ui-kit';



const Form = () => {
    const theme = useContext(ThemeContext);
    const className = 'panel-' + theme;

    return (
        <>
            <section className={className}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In harum aut, dolore nam quisquam obcaecati eum quia ducimus suscipit saepe vitae neque architecto dignissimos mollitia ex totam enim fugit quasi.</p>
                <form action="" method="post">
                    <input type="text" />
                    <br />
                    <MDBBtn className='mt-2' type="submit">Submit</MDBBtn>
                </form>
            </section>

        </>
    );
};

export default Form;



// const form = () => {
//     return (
//         <Panel title="Welcome">
//             anything
//             <Button>Sign up</Button>
//             <Button>Log in</Button>
//         </Panel>
//     );
// };

// export default form;