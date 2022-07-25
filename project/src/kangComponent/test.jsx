import React, { Component } from 'react';
import D3 from "./chart/D3chart.jsx"
import {Barchart} from "./chart/Barchart"


class Try extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <D3/>
            <Barchart/>
            </>
        );
    }
}
 
export default Try;