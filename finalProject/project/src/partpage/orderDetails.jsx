import React, { Component } from 'react';
import Navbar from '../repeatability/Navbar';
import './orderdetails.css';
// import Footer from '../repeatability/Footer';
class orderDetails extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <br />
        <div className="mt-5 ">
          <br />
          <br />
          <div className='container'>
            <div className='row'>
              <div className='col-3'></div>
              <div className='col-4'>
                <p>預計外送時間</p>
                <p>時間</p>
                <img src="./image/fastMan.png" /><br />
                {/* 讀取外送時間 */}
                <div class="progress-6"></div>
                {/* 再送達後更改內容 */}
                <p>餐點準備中</p>
              </div>
              <div className='col-4'>
                <p>訂單詳情</p>
                <p>訂單編號: #1212141</p>
                <p>訂單配送來自: 八方雲集(雲集店)</p>
                <p>送餐地址: 公益路二段</p>
                <p>總計: $500</p>
                <p>查看細節(10個品項): <select><option>空</option></select></p>
              </div>
            </div>
          </div>
          {/* 撈資料庫產生 */}
          <div className='col-1'></div>
          <div className='row'>
            <div className='col-7'></div>
            <div className='col-5 row'>
              <p><b>餐點內容</b></p>
              <p className='ml-4'><b>數量</b></p>
              <p className='ml-5'><b>金額</b></p>
            </div>
            <div className='col-7'></div>
            <div className='col-5 row'>
              <p><b>韓式臘味</b></p>
              <p className='ml-5'>2</p>
              <p className='ml-5'>$30</p>
            </div>
            <div className='col-7'></div>
            <div className='col-5 row'>
              <p><b>韓式狗味</b></p>
              <p className='ml-5'>1</p>
              <p className='ml-5'>$900</p>
            </div>
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-4 ml-5'></div>
              <div className='col-3'>
                <h4>需要幫助嗎 ?</h4>
                <p className='ml-5'>有需要的話聯絡我們</p>
              </div>
            </div>
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-6 ml-5'></div>
              <div className='col-2'>
                <button className="btn btn-outline-danger ml-1">客服中心</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment >
    );
  }
}

export default orderDetails;