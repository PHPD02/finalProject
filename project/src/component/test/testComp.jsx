import React, { Component } from 'react';

import Reaselct from './comp/reaselct'

class Testcomp extends Component {
    state = {
        comp : ""
    }
    async componentDidMount(){
        
        let res = (this.props.match.params.comp);
        console.log(res);
        switch(res){
            case "reaselct":
                console.log("h1");
                this.state.comp = <Reaselct></Reaselct>;
            break;
        }
        this.setState({});
    }
    render() { 
        return (
            <div>
                {this.state.comp}
            </div>
        );
    }
}
 
export default Testcomp;