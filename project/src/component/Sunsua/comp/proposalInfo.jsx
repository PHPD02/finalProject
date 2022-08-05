/**
 * 提案的詳細內容
 */

 import React, { Component } from 'react';
 import axios from 'axios';
 
 /* 引入 server host */
 import serverHost from '../js/severHost.js';
 import phpRoute from '../js/phpRoute.js';
 
 /* 引入 component */
 import TimeCountDown from './timeCountDown.jsx'
 
 /* 引入 css */
 import 'bootstrap/dist/css/bootstrap.min.css';
 import './css/proposalInfo.css';
 
 
 
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
         let url = serverHost + '/' + phpRoute + 'sunsua/chgProposalState.php';
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
     /* 測試用 */
     stateChk = () => {
         console.clear();
         console.log(this.state.proposalDetail);
     }
     render() {
         return (
             <div className='container my-2'>
                 {/* 測試用 */}
                 {/* <button onClick={this.stateChk}> stateChk</button> */}
                 <div className='row p-1'>
                     <div className='col-lg-3 d-flex align-items-center justify-content-center'>
                         {/* <img src="https://dummyimage.com/100x100/a3a3a3/fff" alt="" /> */}
                         {/* <img src="https://dummyimage.com/150x150/a3a3a3/fff" alt="" /> */}
                         {/* <img src="https://dummyimage.com/200x200/a3a3a3/fff" alt="" /> */}
                         <img src={this.state.proposalDetail.picUrl} alt="" height={150} style={{ objectFit: 'contain' }} />
                     </div>
                     <div className='col-lg-6 d-flex align-items-center'>
                         <table className='proposalDetail table table-light my-2 text-center' style={{}} >
                             <tbody>
                                 {/* 
                                 <tr>
                                     <td colSpan={2} className="font-weight-bold">提案人</td>
                                     <td colSpan={2} className="text-center">{this.state.proposalDetail.firstName}{this.state.proposalDetail.lastName}</td>
                                 </tr>
                                 */}
                                 <tr>
                                     <td className='font-weight-bold'>取餐地點</td>
                                     <td colSpan={3} className='text-center font-weight-bold'>{this.state.proposalDetail.addr}</td>
                                 </tr>
                                 <tr>
                                     <td className='font-weight-bold'>取餐時間</td>
                                     <td colSpan={3} className='text-center font-weight-bold'>{this.state.proposalDetail.arriveTime}</td>
 
                                 </tr>
                                 <tr>
                                     <td rowSpan={1} className='mealTxt font-weight-bold align-middle'>餐廳</td>
                                     <td rowSpan={1} className='text-center align-middle font-weight-bold' >{this.state.proposalDetail.shop}</td>
                                     <td className='font-weight-bold'>單份金額</td>
                                     <td className='text-center'>{this.state.proposalDetail.cost}</td>
                                 </tr>
                                 <tr>
                                     <td rowSpan={1} className='mealTxt font-weight-bold align-middle'>餐點</td>
                                     <td rowSpan={1} className='text-center align-middle font-weight-bold' >{this.state.proposalDetail.meal}</td>
                                     <td className='font-weight-bold'>運費</td>
                                     <td className='text-center'>{this.state.proposalDetail.freight}</td>
                                 </tr>
                             </tbody>
                         </table>
 
                     </div>
                     <div className='col-lg-3 d-flex flex-column justify-content-center align-items-center '>
                         <div className='m-1 text-center'>
                             <span className='h5 mr-2'>團購開放剩餘時間</span>
                             <br />
                             <TimeCountDown
                                 // limitTime={this.state.proposalDetail.limitTime}
                                 // setTime={this.state.proposalDetail.setTime}
                                 limitTime={this.props.proposalDetail.limitTime}
                                 setTime={this.props.proposalDetail.setTime}
                                 parentFunc={this.timeoutChageState}
                                 style={{width:"100%"}}
                             >
                             </TimeCountDown>
                         </div>
                         <br />
                         <div>
                             <span className='h3'>剩餘數量 : </span>
                             &nbsp;
                             <span className='h4'>{this.state.proposalDetail.amount}</span>
                             <br />
                             <span className='mr-2'>請選擇數量</span>
                             <select id='totalMeal' className='my-2' defaultValue={1} onChange={this.selNum}>
                                 {this.state.optionNum.map((item, index) => {
                                     return (
                                         <option key={index}>{item}</option>
                                     )
                                 })}
                             </select>
                         </div>
                         <button className='btn btn-danger my-2' onClick={this.addProposal}>加入訂單</button>
                     </div>
                 </div>
             </div>
         );
     }
 }
 
 export default ProposalInfo;
