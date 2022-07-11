/**
 * 搜尋方案
 * 讓使用者 可以搜尋方案
 * ===========================================
 * TODO: uid 要改成動態，從登入那邊抓
 * TODO: 運費也要改成動態，從google map api 判斷句離
 * 
 * FIXME: 可以的話，這裡是改變proposal的amount 當其歸0時關閉訂單，可以的畫 蓋成 proposal join sunsua_order
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
        proposalDetail: [],
        // proposalDetail: [
        //     {
        //         id: "001", namePartyA: "Max",
        //         addr: "400台中市中區台灣大道一段1號",
        //         arriveTime: "2022/07/01 14:00:00",
        //         shop: "麥當勞", meal: "麥香雞", cost: 100, amount: 8, mealType: "速食",
        //         setTime: 1656732751321, limitTime: 86400000, state: 1
        //     },
        // ]
        orderDetail: {
            id: "",
            namePartyA: "",
            addr: "",
            arriveTime: "",
            shop: "",
            meal: "",
            cost: null,
            amount: null
        }
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
                    // console.log(this.state.proposalDetail);
                    this.setState({});
                }
            })
            .catch(error => {
                console.log("error:" + error.message);
            });
        // this.setState({});
    }
    /* 訂單確認 */
    orderConfirm = (orderDetail, name, num) => {
        console.log(orderDetail);
        this.state.orderDetail = orderDetail;
        this.state.orderDetail.namePartyB = name;
        this.state.orderDetail.number = num;


        this.setState({});
        let proposalSearch = document.querySelector("#proposalSearch");
        proposalSearch.classList.add("d-none");
        let orderConfirm = document.querySelector("#orderConfirm");
        orderConfirm.classList.remove("d-none");
    }

    /* 送出訂單 */
    orderSubmit = async () => {
        alert("送出訂單");

        let dataToServer = {
            proposalId: this.state.orderDetail.id,
            // TODO: uid 要改成動態，從登入那邊抓
            uidPartyB: '1',
            count: this.state.orderDetail.number,
            // TODO: 運費也要改成動態，從google map api 判斷句離
            freight: 60
        };
        console.log(dataToServer);

        let url = serverHost + '/finalProject_php/sunsua/setSunsuaOrder.php';
        // console.log(`url: ${url}`);
        await axios.post(url, dataToServer)
            .then(res => {
                if (res.status == 200) {
                    console.log("success state = 200");
                }
            })
            .catch(error => {
                console.log("error:" + error.message);
                return;
            });

        /*  */
        dataToServer = {
            id: this.state.orderDetail.id,
            amount: this.state.orderDetail.amount - this.state.orderDetail.number
        };
        console.log(dataToServer);
        url = serverHost + '/finalProject_php/sunsua/chgProposalAmount.php';
        await axios.post(url, dataToServer)
            .then(res => {
                if (res.status == 200) {
                    console.log("success state = 200");
                }
            })
            .catch(error => {
                console.log("error:" + error.message);
                return;
            });

        /* 當訂單被買光時 狀態改變 */
        if (dataToServer.amount == 0) {
            /* 傳給後端 改變資料庫狀態 */
            url = serverHost + '/finalProject_php/sunsua/chgProposalState.php';
            dataToServer = {
                id: this.state.orderDetail.id,
                state: 0
            }
            await axios.put(url, dataToServer)
                .then(res => {
                    if (res.status == 200) { }
                })
                .catch(error => {
                    console.log("error:" + error.message);
                });
        }
        document.location.href = "/sunsua"
    }

    /* 取消 */
    cancel = () => {
        let proposalSearch = document.querySelector("#proposalSearch");
        proposalSearch.classList.remove("d-none");
        let orderConfirm = document.querySelector("#orderConfirm");
        orderConfirm.classList.add("d-none");
    }

    render() {
        return (
            <>
                <div id="proposalSearch" className='container py-3'>
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
                            <ProposalInfo key={index} proposalDetail={value} func={this.orderConfirm}> </ProposalInfo>
                        )
                    })}
                </div>
                <div id="orderConfirm" className='container py-3 d-none'>

                    <h1>確認提案內容</h1>
                    <table className='table'>
                        <tbody className='h3'>
                            <tr>
                                <th>你的姓名</th>
                                <td>{this.state.orderDetail.namePartyB}</td>
                            </tr>
                            <tr>
                                <th>送單人姓名</th>
                                <td>{this.state.orderDetail.namePartyA}</td>
                            </tr>
                            <tr>
                                <th>送到地址</th>
                                <td>{this.state.orderDetail.addr}</td>
                            </tr>
                            <tr>
                                <th>預計到達時間</th>
                                <td>{this.state.orderDetail.arriveTime}</td>
                            </tr>
                            <tr>
                                <th>餐廳</th>
                                <td>{this.state.orderDetail.shop}</td>
                            </tr>
                            <tr>
                                <th>餐點</th>
                                <td>{this.state.orderDetail.meal}</td>
                            </tr>
                            <tr>
                                <th>數量</th>
                                <td>{this.state.orderDetail.number}</td>
                            </tr>
                            <tr>
                                <th>金額</th>
                                <td>{this.state.orderDetail.cost * this.state.orderDetail.number}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='px-5 d-flex flex-row-reverse'>
                        <button className='mx-5' type="" onClick={this.orderSubmit}>送出訂單</button>
                        <button className='mx-5' type="" onClick={this.cancel}>取消</button>
                    </div>
                </div>
            </>


        );
    }
}

export default SunsuaSearchProposal;

