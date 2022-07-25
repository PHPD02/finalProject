import React, { Component } from 'react';
import Navbar from './repeatability/Navbar';
import './css/orderdetails.css';
import axios from 'axios';
// import Footer from '../repeatability/Footer';
class OrderDetails extends Component {
  state = {
    details: []
  }


  componentDidMount = async () => {
    let url = "http://localhost/ourPHPFinalproject/RjieProject/details.php"
    await axios.get(url)
      .then((res) => {
        this.state.details = res.data;
        // this.state.details.forEach((value, index) => {
        //   console.log(value)
        // })

        this.setState({});
      })
    // console.log(this.state.details);
    // console.log(this.state.orderId);
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
                    <div className='col-12 '>
                      <h4>預計外送時間</h4>
                    </div>
                    {/* 讀取外送時間 */}
                    <div className='col-12'>
                      <p className='display-3'>{ }</p>
                    </div>
                    <div className='col-12'>
                      <img src="./image/deliveryman.png" />
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

              {this.state.details.map((value, index) => {
                return (
                  <>
                    <div className='col-md-6 col-sm-12 container' key={index}>
                      <div className='card'>
                        {/* {this.state.details.map(
                    (detail, index) => {
                      return (
                        <> */}
                        <h3>訂單詳情</h3>
                        <br />
                        <h5>訂單編號:{value.orderId}</h5>
                        <br />
                        <h5>訂單配送來自:{ }</h5>
                        <br />
                        <h5>送餐地址:{ }</h5>
                        <br />
                        <h5>總計: ${ }</h5>
                        {/* 撈資料庫產生 */}
                        <h5>查看細節({ }個品項):
                          <span className="dropdown">
                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <i className="dropdown-item">{ }</i>
                              <i className="dropdown-item"></i>
                            </div>
                          </span></h5>
                        {/* </>);
                    })} */}
                        {/* 選擇器跑出來的內容 */}
                      </div>
                      <div className='card'>
                        <div className='col-12'>
                          <h4>需要幫助嗎 ?</h4>
                          <h6>有需要的話聯絡我們</h6>
                          <button className="btn btn-outline-danger">客服中心</button>
                        </div>
                      </div>
                    </div>

                  </>
                )
              })}




            </div>
          </div>
        </div>




      </React.Fragment>
    );
  }
}

export default OrderDetails;