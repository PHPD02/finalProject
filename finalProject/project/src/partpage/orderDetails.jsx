import React, { Component } from 'react';
import Navbar from '../repeatability/Navbar';
import Footer from '../repeatability/Footer';
class orderDetails extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <br />
        <div className="container mt-5 ">
          <div>
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
            <table>
              <tr>
                <td>訂單編號</td>
                <td>12345678</td>
              </tr>
              <tr>
                <td>外送餐廳</td>
                <td>八方雲集(雲集店)</td>
              </tr>
              <tr>
                <td>送餐目的地</td>
                <td>公益路二段</td>
              </tr>
              <tr>
                <td>總計</td>
                <td>$800</td>
              </tr>
            </table>
            <hr />
            <table>
              <th>
                <td>訂單內容</td>
                <td>訂單數量</td>
              </th>
              <tr>
                <td>韓式臘味</td>
                <td>$50</td>
              </tr>
              <tr>
                <td>韓式狗味</td>
                <td>$8000</td>
              </tr>
            </table>
            <div className='row'>
              <div>
                <button>有需要幫助的嗎 ?</button>
              </div>
              <div>
                <button>客服中心</button>
                <button>外送人員</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment >
    );
  }
}

export default orderDetails;