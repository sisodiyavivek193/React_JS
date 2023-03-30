import React, { Component } from 'react';



class LifeCycle  extends Component {

    constructor(props) {
        super(props);
        this.state = { data: 'black', }
    }


    // componentWillMount() {
    //     console.log("componentWillMount");
    // }

    componentDidMount() {
        console.log("componentDidMount");

        setTimeout(() => {
            this.setState({ data: "yellow" })
        }, 3000)

    }

    // componentDidMount(nextProps) {
    //     console.log("componentDidMount");

    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        return true
    }

    // componentWillUpdate(nextProps, nextState) {
    //     console.log("componentWillUpdate");
    // }

    componentDidUpdate() {
        console.log("componentDidUpdate");
        setTimeout(() => {
            this.setState({ data: "red  " })
        }, 4000)
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
        setTimeout(() => {
            this.setState({ data: null })
        }, 4000)
    }

    render() {
        return (
            <>
                {/* <p>Change Data</p> */}
                {/* <button onClick={changeDataFunc}>Click</button> */}
                {/* <button onClick={this.changedata}>Click</button> */}
                <p className='display-5'><strong>State</strong>   {this.state.data}</p>
            </>
        );
    }
}
export default LifeCycle ;