import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcApplePay } from '@fortawesome/free-brands-svg-icons';
import { faCreditCard, faDollarSign } from '@fortawesome/free-solid-svg-icons';

import Navbar from '../components item/navbar';
import Footer from '../components item/footer';

import '../css/payment.css';



class Payment extends Component {
    state = {}

    componentDidMount() {
        var upwhere = window.location.href;
        localStorage.setItem('upwhere', upwhere);
        var url = "http://localhost:3000/login";
        var getemail = localStorage.getItem('email');
        // console.log(uId);
        if (!getemail) {
            //登入狀態，不能連去登入頁
            window.location = url;
            // window.history.back()
            // $('#loginin').hide();
        }
    }
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <br /><br /><br /><br />
                <div className='container'>
                    <div className="row" >
                        <div className="col" >
                            <section id='section1' className='shadow'>
                                <h1>1.送餐詳情</h1>
                                <button>「無接觸送餐」服務－將餐點放置於顧客要求的指定位置。
                                    你的健康安全是我們首要的考量，我們的外送夥伴會將你的訂單放置於指定位置。
                                </button>
                                <p>送達時間：</p>
                                <div className='row'>
                                    <div className="col">
                                        <select name="" id="" className='timesel'>
                                            <option value="today" >今天</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <select name="" id="" className='timesel'>
                                            <option value="now" >現在</option>
                                        </select>
                                    </div>
                                </div>
                                <p>送餐地址</p>
                                <div>
                                    <input type="radio" name="address" id="add1" value="add1" />
                                    <label htmlFor="add1">地址1</label><br />
                                    <input type="radio" name="address" id="add2" value="add2" />
                                    <label htmlFor="add2">地址2</label><br />
                                    <button className='btn- btn-dark'>查看儲存地址</button>
                                </div>
                            </section>
                            <section id='section2' className='shadow'>
                                <h1>2.個人資料</h1>
                                <input type="email" placeholder='電子郵件' className='btn-block' /><br />
                                <input type="text" placeholder='名' className='btn-block' /><br />
                                <input type="text" placeholder='姓' className='btn-block' /><br />
                                <input type="email" placeholder='手機號碼' className='btn-block' /><br />
                                <button className='btn btn-danger btn-block'>儲存</button>
                            </section>
                            <section id='section3' className='shadow'>
                                <h1>3.付款方式</h1>
                                <label htmlFor='pycard' className='btn btn-dark btn-block'><FontAwesomeIcon icon={faCreditCard} className="fa-xl float-left" />&nbsp;&nbsp;信用卡<input type="radio" name="pycheck" id="pycard" className='float-right' /></label>
                                <label htmlFor='pycash' className='btn btn-dark btn-block'><FontAwesomeIcon icon={faDollarSign} className="fa-xl float-left" />&nbsp;&nbsp;現金付款<input type="radio" name="pycheck" id="pycash" className='float-right' /></label>
                                <label htmlFor='pyapple' className='btn btn-dark btn-block'><FontAwesomeIcon icon={faCcApplePay} className="fa-xl float-left" />&nbsp;&nbsp;Apple pay<input type="radio" name="pycheck" id="pyapple" className='float-right' /></label>
                            </section>
                        </div>
                        <div className="col-lg-5 shadow" id='col2color'>
                            <br /><br />
                            <h3>你的訂單</h3>
                            <h4>店名</h4><br />
                            <p className='h3'>上頁購物車default content</p>
                            <div className='menutail row'>
                                {/* 點餐內容 */}
                                {/* <div className='col-6 cart-food-sp sp1'>food1pic</div> */}
                                <div className='col cart-food-sp sp2'>黃金里肌厚切豬排咖哩飯</div>
                                <div className='col-3 cart-food-sp'>1</div>
                                <div className='col-3 cart-food-sp sp3'>$100</div>
                            </div>
                            <div className='menutail row'>
                                {/* 點餐內容 */}
                                {/* <div className='col-6 cart-food-sp sp1'>food1pic</div> */}
                                <div className='col cart-food-sp sp2'>爆漿起司豚肉咖哩飯</div>
                                <div className='col-3 cart-food-sp'>1</div>
                                <div className='col-3 cart-food-sp sp3'>$150</div>
                            </div>
                            <hr />
                            <div className='container'>
                                <div className="row">
                                    <div className="col-10 text-right">
                                        <p><span>小計：</span></p>
                                        <p><span>外送服務費：</span></p>
                                        <p><span>總計：</span></p>
                                    </div>
                                    <div className="col text-right">
                                        <p><span >$250</span></p>
                                        <p><span>$19</span></p>
                                        <p><span>$269</span></p>
                                    </div>
                                </div>
                                {/* <div className='row'>
                                    <div className='col'></div>
                                    <div className="col-3"><NavLink to="/payment"><button className='btn btn-danger btn-block'>點我結帳</button></NavLink></div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>

        );
    }
}

export default Payment;