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
    state = {
        orderDetail: [
            /**
             * 
             */
            {
                id: "001", name: "Max", time: 300, shop: "麥當勞", meal: "麥香雞", cost: 100, addr: "台中火車站", amount: 8, status: "open"
            },
            {
                id: "002", name: "Chatty", time: 350, shop: "肯德基", meal: "蛋塔", cost: 50, addr: "彰化火車站", amount: 20, status: "open"
            }
        ]
    }

    render() {
        return (
            <div className='container py-3'>
                <h1 className='text-center'>搜尋方案</h1>
                <input id="searchBox" placeholder='請輸入您的地址' /><i className="bi bi-search ml-1"></i>
                <hr />
                {this.state.orderDetail.map((value, index) => {
                    return (
                        <SunsuaProposalInfo orderDetail={value}> </SunsuaProposalInfo>
                    )
                })}
            </div>

        );
    }
}

export default SunsuaSearchProposal;

