import React, { Component } from 'react';
import SunsuaProposalInfo from './sunsuaProposalInfo.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


class SunsuaOrder extends Component {
    state = {}
    
    render() {
        return (
            <div>
                訂單搜尋
                <hr />
                <SunsuaProposalInfo></SunsuaProposalInfo>
            </div>

        );
    }
}

export default SunsuaOrder;

