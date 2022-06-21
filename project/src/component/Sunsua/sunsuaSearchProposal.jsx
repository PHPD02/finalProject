/**
 * 搜尋方案
 * // 【Q】能不用css直接在html標籤裡面設定Width 或 style 嗎?
 */
import React, { Component } from 'react';
import SunsuaProposalInfo from './sunsuaProposalInfo.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './css/sunsuaSearchProposal.css'; 
class SunsuaSearchProposal extends Component {
    state = {}

    render() {
        return (
            <div className='container py-3'>
                <h1 className='text-center'>搜尋方案</h1>
                <input id="searchBox"  placeholder='請輸入您的地址'/><i className="bi bi-search ml-1"></i>
                <hr />
                <SunsuaProposalInfo></SunsuaProposalInfo>
            </div>

        );
    }
}

export default SunsuaSearchProposal;

