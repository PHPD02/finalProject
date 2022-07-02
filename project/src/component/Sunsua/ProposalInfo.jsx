/**
 * 提案的詳細內容
 */

import React, { Component } from 'react';
import TimeCountDown from './comp/TimeCountDown.jsx'


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
            status: "open"
        },
        optionNum: []
    }

    constructor() {
        super();
    }
    async componentDidMount() {
        // console.log(this);
        this.state.proposalDetail = this.props.proposalDetail
        this.optNumCreate();
        this.setState({})
    }

    optNumCreate = () => {
        for (let i = 0; i < this.state.proposalDetail.amount; i++) {
            this.state.optionNum[i] = i + 1;
        }
        this.setState({});
    }

    addProposal = () => {
        console.log(this.state)
    }

    /*  給 TimeCountDown 呼叫
        讓 倒數為0 時，方案狀態改變
    */
    timeoutChageState = () => { }

    render() {
        return (
            <div className='container my-2'>
                <div className='row p-1'>
                    <div className='col-lg-3 d-flex align-items-center justify-content-center'>
                        {/* <img src="https://dummyimage.com/100x100/a3a3a3/fff" alt="" /> */}
                        <img src="https://dummyimage.com/150x150/a3a3a3/fff" alt="" />
                        {/* <img src="https://dummyimage.com/200x200/a3a3a3/fff" alt="" /> */}
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
                                <tr className='text-center'>
                                    <th colSpan={2}>剩餘數量</th>
                                    <td colSpan={2}>{this.state.proposalDetail.amount}</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    <div id="proposalBtn" className='col-lg-3'>
                        <div className='m-1 text-center'>
                            <label className='h3 mr-2'>提案剩餘時間</label>
                            {/* <l1abel className='h4'>2:30:00</l1abel> */}
                            <TimeCountDown
                                // limitTime={this.state.proposalDetail.limitTime}
                                // setTime={this.state.proposalDetail.setTime}
                                limitTime={this.props.proposalDetail.limitTime}
                                setTime={this.props.proposalDetail.setTime}
                                parentFunc={this.timeoutChageState}
                            >
                            </TimeCountDown>
                        </div>
                        <div>
                            <label className='mr-2'>請選擇數量</label>
                            <select id='totalMeal' className='my-2'>
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