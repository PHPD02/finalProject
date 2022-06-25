/**
 * 發起提案
 * TODO: 
 * 
 * FIXME:
 *  選擇 town時 改換 city 會有bug
*/
import React, { Component } from 'react';

/* 引入 component */

/* 引入 css */
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/sunsuaProposal.css';

/* 引入 其他資料 */
import cityAreaData from '../../data/taiwan city country/CityCountyData.json'

class SunsuaProposal extends Component {
    state = {}
    proposal = {
        name: "吳承翰",
        city: null,
        town: null,
        address: null,
        shop: null,
        meal: null,
        cost: null,
        deadlineTime: null,
        arriveTime: null,
        pic: null
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
            cityAreaData[e.target.value].AreaList.map((value, index) => {
                area.innerHTML += `<option key=${index} value="${value.AreaName}">${value.AreaName}</option>`;
            });
        }
    }
    areaSel = () => { }
    addrInput = () => { }

    /* ==【Event Func】輸入到達時間 == */
    arriveTimeInput = () => { }

    /* ==【Event Func】輸入 餐廳資訊 == */
    shopInput = () => { }

    /* ==【Event Func】輸入 餐點資訊 == */
    amountInput = () => { }
    costInput = () => { }
    typeSel = (e) => {
        let otherType = document.querySelector("#otherType");
        if (e.target.value == "其他") {
            otherType.classList.remove("d-none");
        }
        else {
            otherType.classList.add("d-none");
        }
    }
    /* ==【Event Func】時間 == */
    hrInput = () => { }
    minInput = () => { }



    /* 測試用 */
    dataShow = () => {
        console.clear();
        console.log(this.state);
    }

    
    render() {
        return (
            <div className='container py-3'>
                <h1 className='text-center'>提案頁面</h1>
                <button onClick={this.dataShow}>Data Show</button>
                <br />
                <div className='text-center'>
                    <form action='' method=''>
                        <table className='table'>
                            <tbody >
                                {/* 提案人姓名 */}
                                <tr>
                                    <td className="col-3">姓名</td>
                                    <td>{this.proposal.name}</td>
                                </tr>
                                {/* 到達地址 */}
                                <tr>
                                    <td><div className='mt-5'>要送到的地址</div></td>
                                    <td>
                                        <div className='m-3'>
                                            <select id="city" className="mx-3" style={{ width: 70 }} onChange={this.citySel} required>
                                                <option value="-1">縣市</option>
                                                {cityAreaData.map((val, idx) =>
                                                    <option key={idx} value={idx}>{val.CityName}</option>
                                                )}
                                            </select>
                                            <select id="area" className="mx-3" style={{ width: 70 }} onChange={this.areaSel} required>
                                                <option value="-1">地區</option>
                                            </select>
                                        </div>
                                        <input type="text" style={{ width: 300 }} required="required" placeholder="輸入要配送的地點" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>預計到達時間</td>
                                    <td><input type="datetime-local" required="required" placeholder="輸入預計到達時間" /></td>
                                </tr>
                                {/* 餐廳 / 商家 */}
                                <tr>
                                    <td>餐廳 / 商家</td>
                                    <td><input type="text" required="required" placeholder="輸入要配送的餐廳" width={"1000px"} /></td>
                                </tr>
                                {/* 餐點資訊 */}
                                <tr>
                                    <td>餐點</td>
                                    <td><input type="text" required="required" placeholder="輸入要配送的餐點" /></td>
                                </tr>
                                <tr>
                                    <td>餐點上限數量</td>
                                    <td><input type="number" min="0" required="required" placeholder="餐點上限數量" /></td>
                                </tr>
                                <tr>
                                    <td>單筆金額</td>
                                    <td><input type="number" min="0" required="required" placeholder="單筆餐點金額" /></td>
                                </tr>
                                <tr>
                                    <td>單點品項</td>
                                    <td>
                                        <select className="mx-3" style={{ width: 100 }} onChange={this.typeSel} required >
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

                                        <input type='text' id="otherType" className='d-none' style={{ width: 200 }} placeholder='輸入品項類型'></input>
                                    </td>
                                </tr>
                                {/* 提案時間 */}
                                <tr>
                                    <td>提案限制時間</td>
                                    <td>
                                        <span>
                                            <input type="number" min={0} max={24} style={{ width: 50 }}></input>
                                            <label className='mx-2'>時</label>
                                        </span>
                                        <span>
                                            {/* <input type="text" size={2}></input> */}
                                            <input type="number" min={0} max={60} style={{ width: 50 }}></input>
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
                    </form>
                </div>
                <hr />
                <div className='px-5 d-flex flex-row-reverse'>
                    <button id="submitProposal" className='mx-5' type="sumit">送出提案</button>
                </div>
            </div>

        );
    }
}

export default SunsuaProposal;