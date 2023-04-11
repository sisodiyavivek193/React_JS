import React, { Component } from 'react';

class CompositionChild extends Component {
    render() {
        return (
            <>
                Parent data:{this.props.data}
                {this.props.children}
            </>
        );
    }
}

export default CompositionChild;