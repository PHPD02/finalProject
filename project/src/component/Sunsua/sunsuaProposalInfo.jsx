/**
 * 提案的詳細內容
 */

import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/sunsuaProposalInfo.css";
class SunsuaProposalInfo extends Component {
    state = {
        orderDetail: {
                name: null, time: null, shop: null,
                meal: null, cost: null, amount: 6
        },
        optionNum: []
    }

    async componentDidMount() {
        this.state.orderDetail= this.props.orderDetail
        this.optNumCreate();
    }

    optNumCreate = () => {
        for (let i = 0; i < this.state.orderDetail.amount; i++) {
            console.log(i);
            this.state.optionNum[i] = i + 1;
        }
        this.setState({});
    }
    render() {
        return (
            <div className='container my-2'>
                <div className='row p-1'>
                    <div id="proposalPic" className='col-3 '>
                        <img src="https://dummyimage.com/200x200/a3a3a3/fff" alt="" />
                    </div>
                    <div id="proposalInfo" className='col-6'>
                        <table className='table table-info my-2' border="1">
                            <tbody>
                                <tr>
                                    <th>提案人</th>
                                    <td>{this.state.orderDetail.name}</td>
                                    <th>餐廳</th>
                                    <td>{this.state.orderDetail.shop}</td>
                                </tr>
                                <tr>
                                    <th>剩餘時間</th>
                                    <td>{this.state.orderDetail.time}</td>
                                    <th>餐點</th>
                                    <td>{this.state.orderDetail.meal}</td>
                                </tr>
                                <tr>
                                    <th>送到地點</th>
                                    <td>{this.state.orderDetail.addr}</td>

                                    <th>單份金額</th>
                                    <td>{this.state.orderDetail.cost}</td>
                                </tr>
                                <tr className='text-center'>
                                    <th colSpan={2}>上限數量</th>
                                    <td colSpan={2}>{this.state.orderDetail.amount}</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    <div id="proposalBtn" className='col-3'>
                        <div>
                            <label>請選擇數量</label>
                            &nbsp;
                            &nbsp;
                            <select id='totalMeal' className='my-2'>
                                {this.state.optionNum.map((item, index) => {
                                    return (
                                        <option key={index}>{item}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <br />
                        <button className='bg-danger my-2'>加入定單</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default SunsuaProposalInfo;