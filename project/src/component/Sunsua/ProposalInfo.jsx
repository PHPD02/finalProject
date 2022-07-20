/**
 * 提案的詳細內容
 */

import React, { Component } from 'react';
import axios from 'axios';

/* 引入 server host */
import serverHost from './js/severHost.js';

/* 引入 component */
import TimeCountDown from './comp/TimeCountDown.jsx'

/* 引入 css */
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/sunsuaProposalInfo.css";
class ProposalInfo extends Component {
    state = {
        proposalDetail: {
            id: null,
            namePartyA: null,
            addr: null,
            arriveTime: null,
            shop: null,
            meal: null,
            cost: 0,
            amount: 0,
            mealType: null,
            setTime: null,
            limitTime: null,
            picUrl: '',
            state: "open"
        },
        optionNum: []
    }
    mealAmount = 1
    constructor() {
        super();
    }
    componentDidMount = async () => {
        // console.log(this);
        this.state.proposalDetail = this.props.proposalDetail
        // console.log(this.state);
        this.optNumCreate();
        this.setState({})
    }
    /*  */
    optNumCreate = () => {
        for (let i = 0; i < this.state.proposalDetail.amount; i++) {
            this.state.optionNum[i] = i + 1;
        }
        this.setState({});
    }

    /* 選擇餐點數量 */
    selNum = (event) => {
        this.mealAmount = event.target.value;
        console.log(this.mealAmount);
    }
    /* 加入方案 建立訂單 */
    addProposal = () => {
        if (this.state.proposalDetail.state != 1) {
            alert("提案已關閉");
        }
        else {
            // TODO: 要根據帳號 輸入姓名
            let num = this.mealAmount;
            this.props.func(this.state.proposalDetail, "王大明", num);
        }
    }

    /*  給 TimeCountDown 呼叫，讓倒數為0時，方案狀態改變 */
    timeoutChageState = async () => {
        // console.log("結案!!!!");
        this.state.proposalDetail.state = 0;

        /* 傳給後端 改變資料庫狀態 */
        let url = serverHost + '/finalProject_php/sunsua/chgProposalState.php';
        let dataToServer = {
            id: this.state.proposalDetail.id,
            state: 0
        }
        await axios.put(url, dataToServer)
            .then(res => {
                // console.log("success");
                if (res.status == 200) { }
            })
            .catch(error => {
                console.log("error:" + error.message);
            });

    }
    /*  */
    stateChk = () => {
        // console.log(this.state.proposalDetail);
        console.log(this.state.proposalDetail.picUrl);
    }
    render() {
        return (
            <div className='container my-2'>
                <button onClick={this.stateChk}> stateChk</button>
                <div className='row p-1'>
                    <div className='col-lg-3 d-flex align-items-center justify-content-center'>
                        {/* <img src="https://dummyimage.com/100x100/a3a3a3/fff" alt="" /> */}
                        {/* <img src="https://dummyimage.com/150x150/a3a3a3/fff" alt="" /> */}
                        {/* <img src="https://dummyimage.com/200x200/a3a3a3/fff" alt="" /> */}
                        <img src={this.state.proposalDetail.picUrl} alt="" width={150} height={150} />
                    </div>
                    <div className='col-lg-6 d-flex align-items-center'>
                        <table className='table table-info my-2' border="1">
                            <tbody>
                                <tr>
                                    <th>提案人</th>
                                    <td>{this.state.proposalDetail.namePartyA}</td>
                                    <th>餐廳</th>
                                    <td>{this.state.proposalDetail.shop}</td>
                                </tr>
                                <tr>
                                    <th>預計到達時間</th>
                                    <td>{this.state.proposalDetail.arriveTime}</td>
                                    <th>餐點</th>
                                    <td>{this.state.proposalDetail.meal}</td>
                                </tr>
                                <tr>
                                    <th>送到地點</th>
                                    <td>{this.state.proposalDetail.addr}</td>

                                    <th>單份金額</th>
                                    <td>{this.state.proposalDetail.cost}</td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                    <div className='col-lg-3 d-flex flex-column justify-content-center align-items-center '>
                        <div className='m-1 text-center'>
                            <label className='h3 mr-2'>提案剩餘時間</label>
                            <TimeCountDown
                                // limitTime={this.state.proposalDetail.limitTime}
                                // setTime={this.state.proposalDetail.setTime}
                                limitTime={this.props.proposalDetail.limitTime}
                                setTime={this.props.proposalDetail.setTime}
                                parentFunc={this.timeoutChageState}
                            >
                            </TimeCountDown>
                        </div>
                        <br />
                        <div>
                            <label className='h3'>剩餘數量 : </label>
                            &nbsp;
                            <label className='h4'>{this.state.proposalDetail.amount}</label>
                            <label className='mr-2'>請選擇數量</label>
                            <select id='totalMeal' className='my-2' defaultValue={1} onChange={this.selNum}>
                                {this.state.optionNum.map((item, index) => {
                                    return (
                                        <option key={index}>{item}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <button className='bg-danger my-2' onClick={this.addProposal}>加入定單</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProposalInfo;