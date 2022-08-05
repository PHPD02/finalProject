import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './repeatability/Navbar';
import './css/orderdetails.css';
import axios from 'axios';
import Footer from './repeatability/Footer';
import FirebaseIndex from '../kangComponent/firebase/firebaseIndex';
import Accordion from "react-bootstrap/Accordion";
import $ from 'jquery';
// import { NavLink } from 'react-router-dom';
// import { useEffect, useState } from "react";

class OrderDetails extends Component {
  state = {
    details: {
      water: '',
      menu: [
        { amount: "", cost: "", dish: "", sum: "" }
      ],
      sums: '',
    },
    time: [],               //給於一個空的時間值
    countDownTime: {
      startTime: '',        //初始的時間
      endTime: '',          //最後的時間
      subtractionTime: '',  //相減的時間
    },
    dayWork: {
      hours: '00',            //時
      minutes: '00',          //分
      seconds: '00',          //秒
    },
    subtractionTime1: '',
  }

  


  componentDidMount = async () => {
    // alert("付款成功!您的訂單正在路上");
    // let url = "http://localhost/ourPHPFinalproject/RjieProject/details.php"
    // await axios.get(url)
    //   .then(res => {
    //     this.state.details = res.data;
    //     this.state.length = this.state.details.menu.length; //長度等於菜單清單的筆數
    //     this.setState({});
    //   });
    this.state.time[0] = new Date(this.state.details.water * 1000).toLocaleTimeString();
    // this.state.time[0] = new Date("August 5, 2022 11:28:00").getMinutes;
    //toLocaleTimeString 字串轉回時間 
    this.state.time[1] = new Date(this.state.details.water * 1000 + 20 * 60 * 1000).toLocaleTimeString(); // 訂單時間 + 20 分鐘 等於送餐的時間
    // getTime 把時間轉換成字串
    // this.state.countDownTime.endTime = new Date(this.state.details.water * 1000 + 29 * 60 * 1000).getTime();
    this.state.countDownTime.endTime = new Date("August 5, 2022 11:35:00").getTime();
    // console.log(this.state.countDownTime.startTime, this.state.countDownTime.endTime)



    setInterval(() => {


      this.state.countDownTime.startTime = new Date().getTime();

      // console.log(this.state.countDownTime.endTime)
      // console.log(this.state.countDownTime.startTime)
      this.state.countDownTime.subtractionTime = this.state.countDownTime.endTime - this.state.countDownTime.startTime;
      // console.log(Math.abs(this.state.countDownTime.subtractionTime));

      // 負轉正數
      // this.state.subtractionTime1 = Math.abs(this.state.countDownTime.subtractionTime)
      // console.log(this.state.subtractionTime1);


      this.state.dayWork.hours = Math.floor((this.state.countDownTime.subtractionTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      // console.log(this.state.dayWork.hours);
      this.state.dayWork.minutes = Math.floor((this.state.countDownTime.subtractionTime % (1000 * 60 * 60)) / (1000 * 60));
      // this.state.dayWork.minutes
      // console.log(this.state.dayWork.minutes);
      this.state.dayWork.seconds = Math.floor((this.state.countDownTime.subtractionTime % (1000 * 60)) / 1000);
      // console.log(this.state.dayWork.seconds);
      document.getElementById("allTimer").innerHTML = this.state.dayWork.hours + "時" + this.state.dayWork.minutes + "分" + this.state.dayWork.seconds + "秒";
      // document.getElementById("allTimer").innerHTML = Math.abs(this.state.dayWork.minutes) + "分" + Math.abs(this.state.dayWork.seconds) + "秒";


      if (this.state.countDownTime.subtractionTime > 0) {
        document.getElementById("allTimer").innerHTML = this.state.dayWork.hours + "時" + this.state.dayWork.minutes + "分" + this.state.dayWork.seconds + "秒";
        document.getElementById('text1').innerHTML = "餐點準備中";
        // document.getElementById('text2').innerHTML = "點我進入店家，以進行評論!";
        // clearInterval();
        // this.setState({})
      } else if (this.state.countDownTime.subtractionTime < 0) {
        document.getElementById('allTimer').innerHTML = "餐點已送達!";
        document.getElementById('text1').innerHTML = "此次餐點還滿意嗎 ?";
        //出現text2
        $('#text2').attr('style', 'display:visible');
        // document.getElementById('text2').innerHTML = "點我進入店家，以進行評論!";
        // document.getElementById('button1').innerHTML = "點我進入店家，以進行評論!";
      }




      // if (this.state.countDownTime.subtractionTime < 0) {
      //   clearInterval();
      //   // this.setState({})
      //   document.getElementById('allTimer').innerHTML = "餐點已送達!";
      // };

    }, 1000)



    // console.log(this.state.countDownTime.subtractionTime);

    // if (this.state.countDownTime.subtractionTime == 0) {
    //   clearInterval();
    //   // this.setState({})
    //   document.getElementById('allTimer').innerHTML = "餐點已送達!";
    // };
  }




  render() {

    return (
      <React.Fragment>
        <Navbar />
        <div className="mt-5 text-center">
          <h4>外送訂單資訊</h4>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 col-sm-12 container'>
                <div className='card'>
                  <div className='row'>
                    <div className='col-11 text-center'>
                      {/* <h4>預計外送時間:20分00秒</h4>
                      <br /> */}
                      {/* ({this.state.time[0]})-({this.state.time[1]}) */}
                      <h4>預計外送時間
                        <p id='allTimer'></p>
                        </h4>
                      {/* <h4><p>00時20分00秒</p></h4> */}
                      <p>(下午12:30:34) - (下午12:50:34)</p>
                      {/* {this.state.time[0]}{this.state.time[1]} */}
                    </div>
                    {/* 讀取外送時間 */}
                    <div className='col-12'>
                      <p className='display-3'></p>
                    </div>
                    <div className='col-12'>
                      <div className='thispic'></div>
                    </div>
                  </div>
                  {/* 再送達後更改內容 */}
                  {/* <div className='col-11 text-center'> */}
                    {/* <h4>{0 == 0 ? "餐點已送達!謝謝光臨" : "餐點準備中"}</h4> */}
                  <div className='col-11 text-center ' >
                    {/* {this.state.countDownTime.subtractionTime == 0 ? ("此次餐點還滿意嗎 ?") : ("餐點準備中 ! ")} */}
                    <br />
                    <h5 id="text1">餐點準備中</h5>
                    <NavLink to="/CommentPage"><p id="text2" style={{display:'none'}} className='btn btn-outline-success'>點我進入店家，以進行評論! </p></NavLink>


                  </div>
                </div>
              </div>
              <div className='col-md-6 col-sm-12 container' >
                <div className='card'>
                  <h3>訂單詳情</h3>
                  <br />
                  {/* <h5>訂單編號：{this.state.details.water}</h5> */}
                  <h5>訂單編號：165962688012</h5>
                  <br />
                  <h5>訂單配送來自：台中市西屯區朝富路134號</h5>
                  {/* <h5>訂單配送來自：水巷茶弄(台中朝富店)</h5> */}
                  <br />
                  <h5>送餐地址：51號 21 公益路二段 Taichung City 408</h5>
                  <br />
                  {/* <h5>總計：$ {this.state.details.sums}</h5> */}
                  <h5>總計：$ 253</h5>
                  {/* 撈資料庫產生 */}
                  <Accordion style={{ borderTop: "1px solid black", marginTop: "20px", fontSize: "15px", }}>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header className="mt-3 font-weight-bold " style={{ fontSize: "22px" }}>
                        {/* <span>查看品項細節({this.state.length}個品項)</span> */}
                        <span>查看品項細節(4個品項)</span>
                        <span className="ml-2">
                          <i class="fa-solid fa-angles-down"></i>
                        </span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <ul className="list-group mt-4 ">
                            <div className="container-fluid">
                              <div className="row d-flex ">
                                <div className="col-3 ">品項</div>
                                <div className='col-2'></div>
                                <div className="col-1 text-nowrap">數量</div>
                                <div className="col-4 text-nowrap">單價</div>
                                <div className="col-2 text-nowrap">總額</div>
                              </div>
                            </div>
                            {this.state.details.menu.map((menui, index) => {
                              return (
                                <li key={index} className="list-group-item d-flex  ">
                                  <div className="container-fluid">
                                    <div className="row d-flex text-left border-bottom">
                                      <div className="col-5 ">{menui.dish}</div>
                                      <div className="col-1 text-nowrap ">{menui.amount}份</div>
                                      <div className="col-2 ml-5 text-nowrap">${menui.cost}元</div>
                                      <div className="col-1 ml-5 text-nowrap font-weight-bolder">${menui.sum}元</div>
                                    </div>
                                  </div>
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  {/* 選擇器跑出來的內容 */}
                  <br />
                  <FirebaseIndex />
                  <br />
                  {/* C:\Users\bgkon\Desktop\康峻軒final_project(0628)\project\src\kangComponent\firebase\firebaseIndex.jsx */}
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment >
    );
  }
}

export default OrderDetails;