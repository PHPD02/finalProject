import React, { Component } from 'react';
import ExportExcelButton from "../../kangComponent/ExportExcel_component";

class Tst extends Component {
    state = { 
        time : 1657761970,
    }
    
    ymd = new Date(this.state.time*1000);
    dd = this.ymd.toLocaleDateString();
    // componentDidMount=()=>{
        
    //     this.setState({})
    // }

    render() { 
        return (
            <>
                <h1>tst</h1>
<h1><ExportExcelButton/></h1>
                <h1>{this.dd}</h1>
            </>
        );
    }
}
 
export default Tst;