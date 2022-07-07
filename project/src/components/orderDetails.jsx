import React, { Component } from 'react';
import Navbar from './repeatability/Navbar';
import './css/orderdetails.css';
// import Footer from '../repeatability/Footer';
class orderDetails extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <br />
        <div className="mt-5 text-center">
          <br />
          <br />
          <h4>外送訂單資訊</h4>
          <br />
          <br />
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 col-sm-12 container p-1'>
                <div className='card p-1 cardshadow'>
                  <div className='row'>
                    <div className='col-12 '>
                      <h4>預計外送時間</h4>
                    </div>
                    {/* 讀取外送時間 */}
                    <div className='col-12'>
                      <p className='display-3'>12:30 - 13:00</p>
                    </div>
                    <div className='col-12'>
                      <img src="./image/fastMan.png" />
                    </div>
                    {/* <div className='col-12 row'>
                    <p className="progress-1"></p>
                    <p className="progress-2"></p>
                    <p className="progress-3"></p>
                    <p className="progress-4"></p>
                  </div> */}
                  </div>
                  <br />
                  <br />
                  {/* 再送達後更改內容 */}
                  <h4>餐點準備中</h4>
                </div>
              </div>
              <div className='col-md-6 col-sm-12 container p-1'>
                <div className='card p-1 cardshadow'>
                  <h3>訂單詳情</h3>
                  <br />
                  <h5>訂單編號: #1212141</h5>
                  <br />
                  <h5>訂單配送來自: 八方雲集(雲集店)</h5>
                  <br />
                  <h5>送餐地址: 公益路二段</h5>
                  <br />
                  <h5>總計: $500</h5>
                  {/* 撈資料庫產生 */}
                  <h5>查看細節(10個品項): <select><option>空</option></select></h5>
                  {/* 選擇器跑出來的內容 */}

                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
                <div className='container mt-2'>
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

      </React.Fragment >
    );
  }
}

export default orderDetails;