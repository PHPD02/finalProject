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
          <div className="mx-auto">
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
            <div>
              <ul>
                <li></li>
              </ul> 
              <p>訂單編號</p>
              <p>12345678</p>
              <p>外送餐廳</p>
              <p>八方雲集(雲集店)</p>
              <p>送餐目的地</p>
              <p>公益路二段</p>
              <p>總計</p>
              <p>$800</p>
            </div>

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