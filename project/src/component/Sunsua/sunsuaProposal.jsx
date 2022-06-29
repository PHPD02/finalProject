/**
 * 發起提案
 * 讓使用者填入 方案的資料後
 * 確認提案後 成立方案
 * ==================================
 * TODO: 
 *  1.submit btn 功能未實現
 *     送出提案 要給後端php資料
 *       (1) 請考量 "提案處理中" 
 *       (2) 方案建立完成 跳轉 順弁首頁 
 *   
*/
import React, { Component } from 'react';
import axios from 'axios'

/* 引入 component */

/* 引入 css */
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/sunsuaProposal.css';

/* 引入 其他資料 */
import cityAreaData from '../../data/taiwan city country/CityCountyData.json'

class SunsuaProposal extends Component {
    state = {
        proposalDetail: {
            namePartyA: "吳承翰",
            addr: null,
            city: null,
            area: null,
            arriveTime: null,
            shop: null,
            meal: null,
            cost: null,
            amount: null,
            mealType: null,
            proposalSetTime: null,
            LimitTime: null,
            LimitTimeHr: null,
            LimitTimeMin: null,
            picture: null,
            namePartyB: []
        }
    }

    constructor(props) {
        super(props);
    }
    async componentDidMount() {
    }


    /* ==【Event Func】選擇到達位置 == */
    citySel = (e) => {
        /* 當選擇 縣市 時，地區 option 相應改變*/
        let area = document.querySelector("#area");
        area.innerHTML = `<option value="-1">地區 </option>`;
        if (e.target.value != -1) {
            this.state.proposalDetail.city = cityAreaData[e.target.value].CityName;
            cityAreaData[e.target.value].AreaList.map((value, index) => {
                area.innerHTML += `<option key=${index} value="${index}">${value.AreaName}</option>`;
            });
        }
    }
    areaSel = (e) => {
        if (e.target.value) {
            let town = document.querySelector("#city").value;
            this.state.proposalDetail.area = cityAreaData[town].AreaList[e.target.value].AreaName;
        }
    }
    addrInput = (e) => {
        if (e.target.value) {
            this.state.proposalDetail.addr = e.target.value;
        }
    }

    /* ==【Event Func】輸入到達時間 == */
    arriveTimeInput = (e) => {
        // console.log(`arriveTime : ${e.target.value}`);
        if (e.target.value) {
            this.state.proposalDetail.arriveTime = e.target.value;
        }
    }

    /* ==【Event Func】輸入 餐廳資訊 == */
    shopInput = (e) => {
        if (e.target.value) {
            this.state.proposalDetail.shop = e.target.value;
        }
    }

    /* ==【Event Func】輸入 餐點資訊 == */
    mealInput = (e) => {
        if (e.target.value) {
            this.state.proposalDetail.meal = e.target.value;
        }
    }
    amountInput = (e) => {
        if (e.target.value) {
            this.state.proposalDetail.amount = e.target.value;
        }
    }
    costInput = (e) => {
        if (e.target.value) {
            this.state.proposalDetail.cost = e.target.value;
        }
    }
    typeSel = (e) => {
        let otherType = document.querySelector("#otherType");
        this.state.proposalDetail.mealType = "";
        if (e.target.value == "其他") {
            otherType.classList.remove("d-none");
        }
        else {
            otherType.classList.add("d-none");
            this.state.proposalDetail.mealType = e.target.value;
        }
    }
    typeInput = (e) => {
        if (e.target.value) {
            this.state.proposalDetail.mealType = e.target.value;
        }
    }
    /* ==【Event Func】時間 == */
    hrInput = (e) => {
        if (e.target.value) {
            this.state.proposalDetail.LimitTimeHr = e.target.value;
        }
    }
    minInput = (e) => {
        if (e.target.value) {
            this.state.proposalDetail.LimitTimeMin = e.target.value;
        }
    }


    /* submit */
    setProposal = (e) => {
        e.preventDefault();
        this.setState({})
        let proposalSet = document.querySelector("#proposalSet");
        proposalSet.classList.add("d-none");
        let proposalConfirm = document.querySelector("#proposalConfirm");
        proposalConfirm.classList.remove("d-none");
    }
    
    // TODO: 1.
    submitProposal = async (e) => {
        // console.clear();
        // e.preventDefault();
        // let url = 'http://localhost/finalProject_php/sunsua/setProposal.php';
        // await axios.post(url, this.state)
        //     .then(res => {
        //         console.log("success");
        //     })
        //     .catch(error => {
        //         console.log("error");
        //         console.log(error.message);
        //     });
    }
    cancel = (e) => {
        e.preventDefault();
        this.setState({})
        let proposalSet = document.querySelector("#proposalSet");
        proposalSet.classList.remove("d-none");
        let proposalConfirm = document.querySelector("#proposalConfirm");
        proposalConfirm.classList.add("d-none");
    }


    /* 測試用 */
    dataShow = () => {
        console.clear();
        // console.log(this.state);
        console.log(this.state.proposalDetail);
    }


    render() {
        return (
            <div className='container py-3'>
                <div id="proposalSet">
                    <h1 className='text-center'>提案頁面</h1>
                    <button onClick={this.dataShow}>Data Show</button>
                    <br />
                    <div className='text-center'>
                        <form action='#'>
                            <table className='table'>
                                <tbody >
                                    {/* 到達地址 */}
                                    <tr>
                                        <td><div className='mt-5'>要送到的地址</div></td>
                                        <td>
                                            <div className='m-3'>
                                                {/* <select id="city" className="mx-3" style={{ width: 70 }} onChange={this.citySel} required> */}
                                                <select id="city" className="mx-3" style={{ width: 70 }} onChange={this.citySel} >
                                                    <option value="-1">縣市</option>
                                                    {cityAreaData.map((val, idx) =>
                                                        <option key={idx} value={idx}>{val.CityName}</option>
                                                    )}
                                                </select>
                                                {/* <select id="area" className="mx-3" style={{ width: 70 }} onChange={this.areaSel} required> */}
                                                <select id="area" className="mx-3" style={{ width: 70 }} onChange={this.areaSel} >
                                                    <option value="-1">地區</option>
                                                </select>
                                            </div>
                                            {/* <input type="text" style={{ width: 300 }} required="required" placeholder="輸入要配送的地點" /> */}
                                            <input type="text" style={{ width: 300 }} placeholder="輸入要配送的地點" onChange={this.addrInput} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>預計到達時間</td>
                                        {/* <td><input type="datetime-local" required="required" placeholder="輸入預計到達時間" /></td> */}
                                        <td><input type="datetime-local" placeholder="輸入預計到達時間" onChange={this.arriveTimeInput} /></td>
                                    </tr>
                                    {/* 餐廳 / 商家 */}
                                    <tr>
                                        <td>餐廳 / 商家</td>
                                        {/* <td><input type="text" required="required" placeholder="輸入要配送的餐廳" width={"1000px"} /></td> */}
                                        <td><input type="text" placeholder="輸入要配送的餐廳" width={"1000px"} onChange={this.shopInput} /></td>
                                    </tr>
                                    {/* 餐點資訊 */}
                                    <tr>
                                        <td>餐點</td>
                                        {/* <td><input type="text" required="required" placeholder="輸入要配送的餐點" /></td> */}
                                        <td><input type="text" placeholder="輸入要配送的餐點" onChange={this.mealInput} /></td>
                                    </tr>
                                    <tr>
                                        <td>餐點上限數量</td>
                                        {/* <td><input type="number" min="0" required="required" placeholder="餐點上限數量" /></td> */}
                                        <td><input type="number" min="0" placeholder="餐點上限數量" onChange={this.amountInput} /></td>
                                    </tr>
                                    <tr>
                                        <td>單筆金額</td>
                                        {/* <td><input type="number" min="0" required="required" placeholder="單筆餐點金額" /></td> */}
                                        <td><input type="number" min="0" placeholder="單筆餐點金額" onChange={this.costInput} /></td>
                                    </tr>
                                    <tr>
                                        <td>單點品項</td>
                                        <td>
                                            {/* <select className="mx-3" style={{ width: 100 }} onChange={this.typeSel} required > */}
                                            <select className="mx-3" style={{ width: 100 }} onChange={this.typeSel} >
                                                <optgroup label="餐點">
                                                    <option value="台式">台式</option>
                                                    <option value="日式">日式</option>
                                                    <option value="港式">港式</option>
                                                    <option value="速食">速食</option>
                                                </optgroup>
                                                <optgroup label="飲料">
                                                    <option value="熱飲">熱飲</option>
                                                    <option value="冷飲">冷飲</option>
                                                </optgroup>
                                                <option value="其他">其他</option>
                                            </select>

                                            {/* <input type='text' id="otherType" className='d-none' style={{ width: 200 }} required="required" placeholder='輸入品項類型'></input> */}
                                            <input type='text' id="otherType" className='d-none' style={{ width: 200 }} placeholder='輸入品項類型' onChange={this.typeInput}></input>
                                        </td>
                                    </tr>
                                    {/* 提案時間 */}
                                    <tr>
                                        <td>提案限制時間</td>
                                        <td>
                                            <span>
                                                <input type="number" min={0} max={24} style={{ width: 50 }} onChange={this.hrInput}></input>
                                                <label className='mx-2'>時</label>
                                            </span>
                                            <span>
                                                {/* <input type="text" size={2}></input> */}
                                                <input type="number" min={0} max={60} style={{ width: 50 }} onChange={this.minInput}></input>
                                                <label className='mx-2'>分</label>
                                            </span>
                                        </td>
                                    </tr>
                                    {/* 提供餐單或照片 */}
                                    <tr>
                                        <td>
                                            資訊提供 <br />
                                            餐單照片&nbsp;或&nbsp;餐點照片
                                        </td>
                                        <td><input type="file" /></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='px-5 d-flex flex-row-reverse'>
                                <button id="submitProposal" className='mx-5' type="" onClick={this.setProposal}>建立提案</button>
                            </div>
                        </form>
                    </div>
                    <hr />
                </div>
                {/* ======================================================= */}
                <div id='proposalConfirm' className='d-none'>
                    <div className='text-center'>
                        <h1>確認提案內容</h1>
                        <table className='table'>
                            <tbody className='h3'>
                                <tr>
                                    <th>提案人 姓名</th>
                                    <td>{this.state.proposalDetail.namePartyA}</td>
                                </tr>
                                <tr>
                                    <th>送到地址</th>
                                    <td>{this.state.proposalDetail.city}{this.state.proposalDetail.area} {this.state.proposalDetail.addr}</td>
                                </tr>
                                <tr>
                                    <th>預計到達時間</th>
                                    <td>{this.state.proposalDetail.arriveTime}</td>
                                </tr>
                                <tr>
                                    <th>餐廳</th>
                                    <td>{this.state.proposalDetail.shop}</td>
                                </tr>
                                <tr>
                                    <th>餐點</th>
                                    <td>{this.state.proposalDetail.meal}</td>
                                </tr>
                                <tr>
                                    <th>餐點金額</th>
                                    <td>{this.state.proposalDetail.cost}</td>
                                </tr>
                                <tr>
                                    <th>餐點數量</th>
                                    <td>{this.state.proposalDetail.amount}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='px-5 d-flex flex-row-reverse'>
                            <button id="submitProposal" className='mx-5' type="" onClick={this.submitProposal}>送出提案</button>
                            <button id="submitProposal" className='mx-5' type="" onClick={this.cancel}>取消</button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default SunsuaProposal;