/**
 * 提案的詳細內容
 */

import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

class SunsuaProposalInfo extends Component {
    state = {
        orderDetail: {
            name: "Max", time: 300, shop: "麥當勞",
            meal: "麥香雞", cost: 100, amount: 3
            //     name: null, time: null, shop: null,
            //     meal: null, cost: null, amount: 6
        },
        num: 0
    }
    async componentDidMount() {

    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-3'>
                        <img src="https://dummyimage.com/200x200/a3a3a3/fff" alt="" />
                    </div>
                    <div className='col-6'>

                        <table border="2">
                            <tbody>
                                <tr>
                                    <th>提案人</th>
                                    <td>{this.state.orderDetail.name}</td>
                                </tr>
                                <tr>
                                    <th>剩餘時間</th>
                                    <td>{this.state.orderDetail.time}</td>
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
                                    <th>單份金額</th>
                                    <td>{this.state.orderDetail.cost}</td>
                                </tr>
                                <tr>
                                    <th>上限數量</th>
                                    <td>{this.state.orderDetail.amount}</td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                    <div className='col-3'>
                        <select id='totalMeal' className='my-2'>
                            {/* TODO: 將這邊改成 對應數量 */}
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                        <br />
                        <button className='bg-danger my-2'>加入定單</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default SunsuaProposalInfo;