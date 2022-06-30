import React, { Component } from 'react';

class Teststate extends Component {
    state = { 
        name:"wong"
    };

    doClick = () => {
        this.setState({name:"yang"});
    }

    render() { 
        return (
            <React.Fragment>
                <button onClick={this.doClick}>click me</button>
                <div>{this.state.name}</div>
            </React.Fragment>
        );
    }
}
 
export default Teststate;