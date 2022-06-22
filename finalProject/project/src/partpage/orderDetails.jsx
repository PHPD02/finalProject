import React, { Component } from 'react';
import Navbar from '../repeatability/Navbar';
class orderDetails extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <br />
        <div className="container mt-5 ">
          <div className="text-center">
            {/* 小標題 */}
            <div>
              <h1>訂單詳情</h1>
            </div>
            {/* 預約送達時間 */}
            <div>
              <p>預計送達時間</p>
              <p>time</p>
              <img src="#" />
            </div>
            {/* 清單 */}

            <ul>
              <li>訂單編號</li>
              <li>外送餐廳</li>
              <li>送餐目的地</li>
              <li>總計</li>
            </ul>
            <p></p>
            <p>12345678</p>
            <p></p>
            <p>八方雲集(雲集店)</p>
            <p></p>
            <p>公益路二段</p>
            <p></p>
            <p>$800</p>


            <hr />

            <p>訂餐</p><p>12345678</p>
            <p>訂餐</p><p>12345678</p>
            <p>訂餐</p><p>12345678</p>
            <button>12134</button>
            <button>12134</button>
            <button>12134</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default orderDetails;