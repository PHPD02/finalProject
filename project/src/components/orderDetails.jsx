import React, { Component } from 'react';
import Navbar from './repeatability/Navbar';
import './css/orderdetails.css';
// import axios from 'axios';
import DetailsCards from './component/DetailsCards';
import Footer from './repeatability/Footer';
import FirebaseIndex from '../kangComponent/firebase/firebaseIndex';
class OrderDetails extends Component {
  state = {
    date: new Date(),
    date1: new Date(),
    data2: '',
  }

  componentDidMount = () => {
    this.timerId = setInterval(() => {
      this.setState({ date: new Date() })
    }, 1000)

    // console.log(this.state.date);
    // console.log(this.state.date1);
    this.state.data2 = this.state.date - this.state.date1 + 1;
    console.log(this.state.data2)
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
                      <h4>預計外送時間:{this.state.data2}分鐘</h4>
                      {this.state.date.getHours()}時
                      {this.state.date.getMinutes()}分
                      {this.state.date.getSeconds()}秒-
                      {this.state.date1.getHours()}:時
                      {this.state.date1.getMinutes() + 20}分
                    </div>
                    {/* 讀取外送時間 */}
                    <div className='col-12'>
                      <p className='display-3'></p>
                    </div>
                    <div className='col-12'>
                      <div className='thispic'></div>
                    </div>
                    {/* <div className='col-12 row'>
                      <p className="progress-1"></p>
                      <p className="progress-2"></p>
                      <p className="progress-3"></p>
                      <p className="progress-4"></p>
                    </div> */}
                  </div>
                  {/* 再送達後更改內容 */}
                  <div className='col-11 text-center'>
                    <h4>{this.state.data2 == 0 ? "餐點已送達!謝謝光臨" : "餐點準備中"}</h4>

                  </div>
                </div>
              </div>
              <div className='col-md-6 col-sm-12 container' >
                <div className='card'>
                  <h3>訂單詳情</h3>
                  <DetailsCards />
                  {/* 選擇器跑出來的內容 */}
                  <br />
                  <FirebaseIndex />
                  <br />
                  {/* C:\Users\bgkon\Desktop\康峻軒final_project(0628)\project\src\kangComponent\firebase\firebaseIndex.jsx */}

                </div>
                <div className='col-md-12 container mt-2'>
                  <div className='row card cardshadow'>
                    <div className='col-12'>
                      <h4>需要幫助嗎 ?</h4>
                      <h6>有需要的話聯絡我們</h6>
                      <button className="btn btn-outline-danger">客服中心</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default OrderDetails;