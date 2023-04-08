import React, { Component } from 'react';

class ClassCompoControlledCompoObject extends Component {
    constructor() {
        super();
        this.state = { formdata: {} }
    }
    inputData = (event) => {
        this.setState((data) => ({
            // console.log(data);
            formdata: { ...data.formdata, [event.target.id]: event.target.value }
        }))
    }
    sumbit = (event) => {
        event.preventDefault()
        console.log(this.state.formdata);
    }
    render() {
        return (
            <div>
                {JSON.stringify(this.state)}
                <form action="">
                    <input type="text" name="fname" id="fname" placeholder='fname' onChange={this.inputData} /> <br />
                    <input type="text" name="lname" id="lname" placeholder='lname' onChange={this.inputData} /> <br />
                    <input type="email" name="email" id="email" placeholder='email' onChange={this.inputData} /> <br />
                    <input type="password" name="password" id="password" placeholder='password' onChange={this.inputData} /> <br />
                    <input type="date" name="bdata" id="bdata" onChange={(event) => {
                        this.setState((data) => ({
                            formdata: { ...data.formdata, [event.target.name]: event.target.value }
                        }))
                    }} /> <br />
                    <input type="submit" value="submit" onClick={this.sumbit} /><br />

                </form>



                
            </div>
        );
    }
}

export default ClassCompoControlledCompoObject;