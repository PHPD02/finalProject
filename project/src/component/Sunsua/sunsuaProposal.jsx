/**
 * 發起提案
 * 讓使用者填入 方案的資料後
 * 確認提案後 成立方案
 * ==================================
 * TODO: 
 *  1. 將表單填寫設為必填
 *   
*/
import React, { Component } from 'react';
import axios from 'axios'
import $ from 'jquery';

/* 引入 server host url */
import serverHost from './js/severHost.js';
import phpRoute from './js/phpRoute.js';

/* 引入 component */

/* 引入 css */
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/sunsuaProposal.css';

/* 引入 其他資料 */
import cityAreaData from '../../data/taiwan city country/CityCountyData.json'

class SunsuaProposal extends Component {
    state = {
        name: "",
        proposalDetail: {
            emailPartyA: "吳承翰",
            addr: null,
            city: null,
            area: null,
            arriveTime: null,
            shop: null,
            meal: null,
            cost: null,
            amount: null,
            mealType: null,
            freight: null,
            limitTime: null,
            limitTimeHr: null,
            limitTimeMin: null,
            picUrl: null,
        },
        file: {}
    }
    dataToServer = {}
    constructor(props) {
        super(props);
    }
    componentDidMount = () => {
        this.state.proposalDetail.emailPartyA = localStorage.getItem('email');
        this.state.name = localStorage.getItem('firstname') + localStorage.getItem('lastname');
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
            this.state.proposalDetail.limitTimeHr = e.target.value;
        }
    }
    minInput = (e) => {
        if (e.target.value) {
            this.state.proposalDetail.limitTimeMin = e.target.value;
        }
    }
    /* 運費輸入 */
    freightInput = (e) => {
        if (e.target.value) {
            this.state.proposalDetail.freight = e.target.value;
        }
    }
    /*  */
    picSel = (e) => {
        this.state.file = e.target.files[0];
    }
    /* 確認提案 */
    setProposal = async (e) => {
        console.clear();
        e.preventDefault();
        let res_chkForm = this.chkForm();
        if (res_chkForm == 1) {

            console.log("1." + this.state)
            /* === 【Start】上傳到 imgur API 得到網址 (不支援localhost) === */
            // let imgUrl = "";
            // const formData = new FormData();
            // formData.append(
            //     "image",
            //     this.state.file,
            // );

            // // let url = "https://api.imgur.com/3/image";
            // let res = await $.post({
            //     url: "https://api.imgur.com/3/image",
            //     async: true,
            //     crossDomain: true,
            //     method: 'POST',
            //     headers: {
            //         'Authorization': 'Client-ID 7b9a0d0b0e036c5',
            //     },
            //     processData: false,
            //     contentType: false,
            //     mimeType: 'multipart/form-data',
            //     data: formData,
            // })
            //     .then(res => {
            //         console.log("success");
            //         let temp = JSON.parse(res);
            //         this.state.proposalDetail.picUrl = temp.data.link;
            //     })
            //     .catch(err => {
            //         console.log("failed");
            //         console.log(err);
            //         return;
            //     })
            /* === 【End】上傳到 imgur API 得到網址 (不支援localhost) === */


            /* === 【Start】丟給php 後 在上傳到imgur api 得到url === */
            console.clear();
            // let url = "http://localhost/finalProject_php/imgur/picToUrl.php";
            let url = serverHost + '/' + phpRoute + "imgur/picToUrl.php";
            var formData = new FormData();
            formData.append("image", this.state.file);
            let result = await axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(res => {
                    this.state.proposalDetail.picUrl = res.data;
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err);
                })
            /* === 【End】丟給php 後 在上傳到imgur api 得到url  === */

            this.setState({})

            let proposalSet = document.querySelector("#proposalSet");
            proposalSet.classList.add("d-none");
            let proposalConfirm = document.querySelector("#proposalConfirm");
            proposalConfirm.classList.remove("d-none");
        }
        else alert(res_chkForm);
    }

    submitProposal = async (e) => {
        console.clear();
        e.preventDefault();
        let url = serverHost + '/' + phpRoute + 'sunsua/setProposal.php';
        console.log("submit:");
        console.log(this.state.proposalDetail);
        await axios.post(url, this.state.proposalDetail)
            .then(res => {
                // console.log("success");
                if (res.status == 200) {
                    document.location.href = "/sunsua"
                    console.log(res);
                }
            })
            .catch(error => {
                console.log("error:" + error.message);
            });
    }
    cancel = (e) => {
        e.preventDefault();
        this.setState({});
        let proposalSet = document.querySelector("#proposalSet");
        proposalSet.classList.remove("d-none");
        let proposalConfirm = document.querySelector("#proposalConfirm");
        proposalConfirm.classList.add("d-none");
    }
    /* 確認表單都填寫 */
    chkForm = () => {
        if (this.state.proposalDetail.city == null || this.state.proposalDetail.city == "") return "請輸入縣市"
        if (this.state.proposalDetail.area == null || this.state.proposalDetail.area == "") return "請輸入地區"
        if (this.state.proposalDetail.addr == null || this.state.proposalDetail.addr == "") return "請輸入地址"
        if (this.state.proposalDetail.arriveTime == null || this.state.proposalDetail.arriveTime == "") return "請輸入預計到達時間"
        if (this.state.proposalDetail.shop == null || this.state.proposalDetail.shop == "") return "請輸入餐廳"
        if (this.state.proposalDetail.meal == null || this.state.proposalDetail.meal == "") return "請輸入餐點"
        if (this.state.proposalDetail.cost == null || this.state.proposalDetail.cost == "") return "請輸入餐點價格"
        if (this.state.proposalDetail.freight == null || this.state.proposalDetail.freight == "") return "請輸入運費價格"
        if (this.state.proposalDetail.amount == null || this.state.proposalDetail.amount == "") return "請輸入餐點上限數量"
        if (this.state.proposalDetail.mealType == null || this.state.proposalDetail.mealType == "") return "請選擇餐點類型"
        if (this.state.proposalDetail.limitTimeHr == null || this.state.proposalDetail.limitTimeHr == "") return "請輸入開放時間"
        if (this.state.proposalDetail.limitTimeMin == null || this.state.proposalDetail.limitTimeMin == "") return "請輸入開放時間"
        // if (this.state.proposalDetail.picUrl == null || this.state.proposalDetail.picUrl == "") return "請選擇餐點照片"
        return 1;
    }
    /* 測試用 */
    dataShow = () => {
        console.clear();
        console.log(this.state);
    }

        

    render() {
        return (
            <div id='sunsuaProposal'>
                <div className='container'>
                    <div id="proposalSet">
                        <h1 className='h1 font-weight-bolder text-center'>發起團購提案頁面</h1>
                        {/* 測試用 */}
                        {/* <button onClick={this.dataShow}>Data Show</button> */}
                        <br />
                        <div className='text-center'>
                            <form action='#' className=''>
                                <table className='rwd-table'>
                                    <tbody >
                                        {/* 到達地址 */}
                                        <tr>
                                            <td><div className='h3 font-weight-bold mt-4'>要送到的地址</div></td>
                                            <td className='d-flex flex-column align-content-center justify-content-center'>
                                                <div className='m-3 d-flex align-content-center justify-content-center'>
                                                    <select id="city" className="sunsuaInput mx-3 form-control " style={{ width: 100, display: 'inline' }} onChange={this.citySel} required="required">
                                                        <option value="-1">縣市</option>
                                                        {cityAreaData.map((val, idx) =>
                                                            <option key={idx} value={idx}>{val.CityName}</option>
                                                        )}
                                                    </select>
                                                    <select id="area" className="sunsuaInput mx-3 form-control" style={{ width: 100, display: 'inline' }} onChange={this.areaSel} required="required">
                                                        <option value="-1">地區</option>
                                                    </select>
                                                </div>
                                                <div className='d-flex justify-content-center'>
                                                    <input type="text" className='sunsuaInput text-center form-control' style={{ width: 300 }} placeholder="輸入要配送的地點" onChange={this.addrInput} required="required" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='h3 font-weight-bold'>預計到達時間</td>
                                            <td className='d-flex justify-content-center'>
                                                <input type="datetime-local" className='sunsuaInput text-center form-control' style={{ width: '300px' }} placeholder="輸入預計到達時間" onChange={this.arriveTimeInput} required="required" />
                                            </td>
                                        </tr>
                                        {/* 餐廳 / 商家 */}
                                        <tr>
                                            <td className='h3 font-weight-bold'>餐廳 / 商家</td>
                                            <td className=' d-flex justify-content-center'>
                                                <input type="text" className='sunsuaInput text-center form-control' width={"1000px"} placeholder="輸入要配送的餐廳" onChange={this.shopInput} required="required" />
                                            </td>
                                        </tr>
                                        {/* 餐點資訊 */}
                                        <tr>
                                            <td className='h3 font-weight-bold'>餐點</td>
                                            <td className='d-flex justify-content-center'>
                                                <input type="text" className='sunsuaInput text-center form-control' placeholder="輸入要配送的餐點" onChange={this.mealInput} required="required" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='h3 font-weight-bold'>餐點上限數量</td>
                                            <td className='d-flex justify-content-center'>
                                                <input type="number" className='sunsuaInput text-center form-control' style={{ width: 150 }} min="0" placeholder="餐點上限數量" onChange={this.amountInput} required="required" />
                                            </td>
                                        </tr>
                                        <tr >
                                            <td className='h3 font-weight-bold'>單筆金額</td>
                                            <td className='d-flex justify-content-center'>
                                                <input type="number" className='sunsuaInput text-center form-control' style={{ width: 150 }} min="0" placeholder="單筆餐點金額" onChange={this.costInput} required="required" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='h3 font-weight-bold'>單點品項</td>
                                            <td className='d-flex justify-content-center'>

                                                <select className="sunsuaInput mx-3 form-control" style={{ width: "150px" }} onChange={this.typeSel} defaultValue={-1} required="required">
                                                    <option value="-1">餐點類型</option>
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
                                                <input type='text' id="otherType" className='d-none' style={{ width: 200 }} placeholder='輸入品項類型' onChange={this.typeInput} required="required"></input>
                                            </td>
                                        </tr>
                                        {/* 團購開放時間 */}
                                        <tr>
                                            <td className='h3 font-weight-bold'>團購開放時間</td>
                                            <td className='d-flex align-content-center  justify-content-center'>
                                                <span>
                                                    <input type="number" className='sunsuaInput form-control' style={{ width: 80 }} min={0} max={24} defaultValue={0} onChange={this.hrInput} required="required"></input>
                                                </span>
                                                <span className='p mx-2'>時</span>
                                                <span>
                                                    <input type="number" className='sunsuaInput form-control' style={{ width: 80 }} min={0} max={60} defaultValue={0} onChange={this.minInput} required="required"></input>
                                                </span>
                                                <span className='p mx-2'>分</span>
                                            </td>
                                        </tr>
                                        {/* 運費 */}
                                        <tr>
                                            <td className='h3 font-weight-bold'>運費</td>
                                            <td className='d-flex justify-content-center' >
                                                <input type="text" className='sunsuaInput text-center form-control' style={{ width: 150 }} placeholder="輸入運費金額" onChange={this.freightInput} required="required" />
                                            </td>
                                        </tr>
                                        {/* 提供餐單或照片 */}
                                        <tr>
                                            <td className='h4 font-weight-bold'>
                                                資訊提供 <br />
                                                菜單照片&nbsp;或&nbsp;餐點照片
                                            </td>
                                            <td><input type="file" onChange={this.picSel} /></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className='px-5 d-flex flex-row-reverse'>
                                    <button id="setProposal" className='mx-5' type="submit" onClick={this.setProposal}>建立提案</button>
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
                                        <td>{this.state.name}</td>
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
                                    <tr>
                                        <th>運費</th>
                                        <td>{this.state.proposalDetail.freight}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='px-5 d-flex flex-row-reverse'>
                                <button className='mx-5 btn btn-success ' type="" onClick={this.submitProposal}>送出提案</button>
                                <button className='mx-5 btn btn-danger ' type="" onClick={this.cancel}>取消</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default SunsuaProposal;