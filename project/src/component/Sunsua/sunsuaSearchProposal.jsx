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
import phpRoute from './js/phpRoute.js';

/* 引入 component */
import ProposalInfo from './comp/proposalInfo'

/* 引入 css */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './css/sunsuaSearchProposal.css';

/* 引入其他檔案 */
import iconLocate from './pic/locate.png'

import AutoCompleteLocation from "../../kangComponent/js/AutoCompleteLocation.jsx"

const google = window.google;
class SunsuaSearchProposal extends Component {
    state = {
        name: null,
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
    locating = {
        latitude: null,
        longitude: null,
        addr: null,
    }

    componentDidMount = async () => {
        this.state.name = localStorage.getItem('firstname') + localStorage.getItem('lastname');
        let url = serverHost + '/' + phpRoute + 'sunsua/selProposal.php';
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
        if (localStorage.getItem('email')) {
            // console.log(orderDetail);
            this.state.orderDetail = orderDetail;
            this.state.orderDetail.namePartyB = name;
            this.state.orderDetail.number = num;


            this.setState({});
            let proposalSearch = document.querySelector("#proposalSearch");
            proposalSearch.classList.add("d-none");
            let orderConfirm = document.querySelector("#orderConfirm");
            orderConfirm.classList.remove("d-none");
        } else {
            // 沒登入 返回登入頁
            console.log("沒有登入");
            window.location = "http://localhost:3000/login";
            return;
        }

    }

    /* 送出訂單 */
    orderSubmit = async () => {
        alert("送出訂單");

        /* 建立 順弁訂單 */
        let dataToServer = {
            proposalId: this.state.orderDetail.id,
            emailPartyB: localStorage.getItem('email'),
            count: this.state.orderDetail.number,
            freight: this.state.orderDetail.freight
        };
        console.log(dataToServer);
        let url = serverHost + '/' + phpRoute + 'sunsua/setSunsuaOrder.php';
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



        /* 改變 方案 上限數量 */
        dataToServer = {
            id: this.state.orderDetail.id,
            amount: this.state.orderDetail.amount - this.state.orderDetail.number
        };
        console.log(dataToServer);
        url = serverHost + '/' + phpRoute + 'sunsua/chgProposalAmount.php';
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
            url = serverHost + '/' + phpRoute + 'sunsua/chgProposalState.php';
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
    /*  */
    addrInput = async (e) => {
        console.clear();
        console.log("addr Input");
        this.state.proposalDetail = [];
        this.setState({});
        let keyword;
        if (e) {
            keyword = e.target.value;
        } else {
            const searchBox = document.querySelector("#searchBox");
            keyword = searchBox.value;
        }
        let url = serverHost + '/' + phpRoute + 'sunsua/selProposalSp.php';
        await axios.get(url, { params: { keyword: keyword } })
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
    haha = () => {
        console.log("haha");
    }
    /* 取消 */
    cancel = () => {
        let proposalSearch = document.querySelector("#proposalSearch");
        proposalSearch.classList.remove("d-none");
        let orderConfirm = document.querySelector("#orderConfirm");
        orderConfirm.classList.add("d-none");
    }
    locating = () => {
        if (navigator.geolocation) {
            console.clear();
            // 使用者不提供權限，或是發生其它錯誤
            function error() {
                alert('無法取得你的位置');
            }

            // 使用者允許抓目前位置，回傳經緯度
            var success = async (position) => {
                console.log(position.coords.latitude, position.coords.longitude);
                this.locating.latitude = position.coords.latitude.toFixed(7);
                this.locating.longitude = position.coords.longitude.toFixed(7);

                /* ===【Start】 經緯度 轉地址 === */
                var geocoder = new google.maps.Geocoder();
                var coord = new google.maps.LatLng(this.locating.latitude, this.locating.longitude);
                var result
                result = await geocoder.geocode({ 'latLng': coord }, function (results, status) {
                    if (status === google.maps.GeocoderStatus.OK) {
                        // 如果有資料就會回傳
                        if (results) {
                            console.log(results[0]);
                            // return results;
                        }
                    }
                    // 經緯度資訊錯誤
                    else {
                        alert("Reverse Geocoding failed because: " + status);
                    }
                })
                    .then((res) => {
                        // console.log(res);
                        return res;
                    });
                // console.log(result);
                this.locating.addr = result.results[0].formatted_address
                console.log(this.locating.addr);
                /* ===End】 經緯度 轉地址 === */

                /*  */
                // console.log(this.locating.addr)
                let str = this.locating.addr;
                let l = str.lengt;
                this.locating.addr = this.locating.addr.slice(5, l)
                const searchBox = document.querySelector("#searchBox");
                searchBox.value = this.locating.addr;
                /* */
                this.addrInput();
                this.setState({});

            }

            // 跟使用者拿所在位置的權限
            navigator.geolocation.getCurrentPosition(success, error);

        } else {
            alert('Sorry, 你的裝置不支援地理位置功能。')
        }
    }

    /* 測試用 */
    stateChk = () => {
        console.log(this.state);
    }

    render() {
        return (
            <>
                <div id="sunsuaSearchProposal">

                    {/* 測試用 */}
                    {/* <button onClick={this.stateChk}>state show </button> */}
                    <div id="proposalSearch" className='container py-3'>
                        <h1 className='h1 font-weight-bolder text-center'>搜尋團購提案頁面</h1>
                        {/* ===== 篩選區塊 ===== */}
                        <div>
                            <div>
                                <span className='d-flex align-content-center'>
                                    {/* <AutoCompleteLocation onChange={this.haha} /> */}
                                    <input id="searchBox" placeholder='請輸入您的地址' onChange={this.addrInput} style={{ 'width': '80%' }} />
                                    <img src={iconLocate} className="mx-1" alt="" style={{ "width": "25px", "height": "25px" }} onClick={this.locating} />
                                    {/* <i className="bi bi-search ml-1"></i> */}
                                </span>
                                {/* <input id="" placeholder='時間' /><i className="bi bi-search ml-1"></i> */}

                            </div>
                        </div>
                        <hr />
                        {/* ===== 搜尋方案 主要區塊 ===== */}
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
                                    <td>{this.state.name}</td>
                                </tr>
                                <tr>
                                    <th>送單人姓名</th>
                                    <td>{this.state.orderDetail.firstName}{this.state.orderDetail.lastName}</td>
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
                                    <th>餐點單筆金額</th>
                                    <td>{this.state.orderDetail.cost}</td>
                                </tr>
                                <tr>
                                    <th>數量</th>
                                    <td>{this.state.orderDetail.number}</td>
                                </tr>
                                <tr>
                                    <th>運費</th>
                                    <td>{this.state.orderDetail.freight}</td>
                                </tr>

                                <tr>
                                    <th>總金額(含運費)</th>
                                    <td>{(this.state.orderDetail.cost * this.state.orderDetail.number + this.state.orderDetail.freight).toLocaleString()}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='px-5 d-flex flex-row-reverse'>
                            <button className='mx-5 btn btn-success' type="" onClick={this.orderSubmit}>送出訂單,結帳去</button>
                            <button className='mx-5 btn btn-danger' type="" onClick={this.cancel}>取消</button>
                        </div>
                    </div>
                </div>
            </>


        );
    }
}

export default SunsuaSearchProposal;

