/**
 * 搜尋方案
 * 
 */
import React, { Component } from 'react';
import SunsuaProposalInfo from './sunsuaProposalInfo.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


class SunsuaSearchProposal extends Component {
    state = {}

    render() {
        return (
            <div>
                搜尋方案
                <hr />
                <SunsuaProposalInfo></SunsuaProposalInfo>
            </div>

        );
    }
}

export default SunsuaSearchProposal;

