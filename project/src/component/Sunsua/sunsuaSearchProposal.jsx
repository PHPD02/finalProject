/**
 * 搜尋方案
 * 讓使用者 可以搜尋方案
 * 
 * // 【Q】能不用css直接在html標籤裡面設定Width 或 style 嗎?
 */
import React, { Component } from 'react';
import axios from "axios";

/* 引入 server host url*/
import serverHost from './js/severHost.js';

/* 引入 component */
import ProposalInfo from './ProposalInfo.jsx'

/* 引入 css */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './css/sunsuaSearchProposal.css';
class SunsuaSearchProposal extends Component {
    state = {
        proposalDetail: []
        // proposalDetail: [
        //     {
        //         id: "001", namePartyA: "Max",
        //         addr: "400台中市中區台灣大道一段1號",
        //         arriveTime: "2022/07/01 14:00:00",
        //         shop: "麥當勞", meal: "麥香雞", cost: 100, amount: 8, mealType: "速食",
        //         setTime: 1656732751321, limitTime: 86400000, state: 1
        //     },
        // ]
    }
    componentDidMount = async () => {
        let url = serverHost + '/finalProject_php/sunsua/selProposal.php';
        this.state.proposalDetail = [];
        await axios.get(url)
            .then(res => {
                // console.log("success");
                if (res.status == 200) {
                    // console.log(res.data)
                    this.state.proposalDetail = res.data;
                    console.log(this.state.proposalDetail);
                    this.setState({});
                }
            })
            .catch(error => {
                console.log("error:" + error.message);
            });
        // this.setState({});
    }
    test = () => {
        console.log(new Date().valueOf())
    }

    render() {
        return (
            <div className='container py-3'>
                <h1 className='text-center'>搜尋方案</h1>
                <button onClick={this.test}>Test </button>
                <div>
                    <span>
                        <input id="searchBox" placeholder='請輸入您的地址' />
                        <i className="bi bi-search ml-1"></i>
                    </span>
                    {/* <input id="" placeholder='時間' /><i className="bi bi-search ml-1"></i> */}

                </div>

                <hr />
                {this.state.proposalDetail.map((value, index) => {
                    return (
                        <ProposalInfo key={index} proposalDetail={value}> </ProposalInfo>
                    )
                })}
            </div>

        );
    }
}

export default SunsuaSearchProposal;

