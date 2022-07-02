/**
 * 搜尋方案
 * 讓使用者 可以搜尋方案
 * 
 * // 【Q】能不用css直接在html標籤裡面設定Width 或 style 嗎?
 */
import React, { Component } from 'react';
import ProposalInfo from './ProposalInfo.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './css/sunsuaSearchProposal.css';
class SunsuaSearchProposal extends Component {
    state = {
        proposalDetail: [
            {
                id: "001", namePartyA: "Max",
                addr: "400台中市中區台灣大道一段1號",
                arriveTime: "2022/07/01 14:00:00",
                shop: "麥當勞", meal: "麥香雞", cost: 100, amount: 8, mealType: "速食",
                setTime: 1656644679584, limitTime: 86400000, status: "open"
            },
            {
                id: "002", namePartyA: "Tony",
                addr: "台灣省台中市北屯區大鵬路陳平里１２之３巷５之１弄３之２鄰５８號６樓之３",
                arriveTime: "2022/07/04 16:00:00",
                shop: "肯德基", meal: "蛋塔", cost: 100, amount: 20, mealType: "速食",
                setTime: 1656644679584, limitTime: 26400000, status: "open"
            },
            {
                id: "003", namePartyA: "Tony",
                addr: "桃園縣龜山鄉迴龍村萬壽路",
                arriveTime: "2022/07/04 16:00:00",
                shop: "50嵐", meal: "珍珠奶茶", cost: 20, amount: 10, mealType: "冷飲",
                setTime: 1656644679584, limitTime: 26400000, status: "open"
            },
        ]
    }

    render() {
        return (
            <div className='container py-3'>
                <h1 className='text-center'>搜尋方案</h1>
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

