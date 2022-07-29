import React, { Component } from 'react';


class ObjToArray extends Component {
    state = { array: 123 }
    componentDidMount = () => {

        console.log(this.state['array'])
    }
    render() {
        return (
            <>
                <h1>(╬▔皿▔)╯</h1>
            </>
        );
    }
}

export default ObjToArray;