import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcApplePay } from '@fortawesome/free-brands-svg-icons';
import { faCreditCard, faDollarSign } from '@fortawesome/free-solid-svg-icons';

import Navbar from '../components item/navbar';
import Footer from '../components item/footer';

import '../css/payment.css';



class Payment extends Component {
    constructor() {
        super();
        // 以時間代替訂單編號(從資料庫撈)到時刪掉
        var today = new Date(),
            num = today.getTime(),
            y = today.getFullYear(),
            m = (today.getMonth()+1) <10? `0${(today.getMonth()+1)}`: `${(today.getMonth()+1)}` ,
            d = (today.getDate()) <10? `0${today.getDate()}`: `${today.getDate()}` ,
            hh = (today.getHours()) <10? `0${today.getHours()}`: `${today.getHours()}` ,
            mm = (today.getMinutes()) <10? `0${today.getMinutes()}`: `${today.getMinutes()}` ,
            ss = (today.getSeconds()) <10? `0${today.getSeconds()}`: `${today.getSeconds()}` ,

            gotDate = `${y}/${m}/${d} ${hh}:${mm}:${ss}` ;

        this.state = {
            num: num,
            gotDate: gotDate,
        };
    }

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
                        {/* 左邊 */}
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
                        {/* 右邊 */}
                        <div className="col-lg-5 shadow" id='col2color'>

                            <div id='outorder'>
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


                                {/* 傳送到後台處理資料 */}
                                <form id="idFormAioCheckOut" 
                                    method="POST" action=
                                    // "http://localhost/PHP/phpEcpay/test.php"
                                    "http://localhost:80/PHP/phpEcpay/ECPay_CreateOrder.php"
                                    onSubmit={(event) => this.handleSubmit(event)}>
                                    <label visiable>編號 (MerchantTradeNo):
                                        <input type="text" name="MerchantTradeNo" defaultValue={this.state.num} className="form-control" />
                                        {/* <!-- 不可重複使用。英數字大小寫混合 --> */}
                                    </label>
                                    <label visiable className="col-xs-12">時間 (MerchantTradeDate):
                                        <input type="text" name="MerchantTradeDate" defaultValue={this.state.gotDate} className="form-control" />
                                        {/* <!-- yyyy/MM/dd HH:mm:ss --> */}
                                    </label>
                                    <label visiable className="col-xs-12">類型 (PaymentType):
                                        <input type="text" name="PaymentType" defaultValue="aio" className="form-control" />
                                        {/* <!-- aio --> */}
                                    </label>
                                    <label visiable className="col-xs-12">金額 (TotalAmount):
                                        <input type="text" name="TotalAmount" defaultValue="321" className="form-control" />
                                        {/* <!-- 請帶整數，不可有小數點 僅限新台幣 金額不可為 0 元 CVS&BARCODE 最低限制為 30 元，最高限制為 30,000 元 --> */}
                                    </label>
                                    <label visiable className="col-xs-12">描述 (TradeDesc):
                                        <input type="text" name="TradeDesc" defaultValue="餐飲費用" className="form-control" />
                                    </label>
                                    <label visiable className="col-xs-12">名稱 (ItemName):
                                        <input type="text" name="ItemName" defaultValue="餐飲費用" className="form-control" />
                                        {/* <!-- 商品名稱以符號 # 分 --> */}
                                    </label>
                                    <label visiable className="col-xs-12">付款方式 (ChoosePayment):
                                        <input type="text" name="ChoosePayment" defaultValue="Credit" className="form-control" />
                                        {/* <!-- Credit:信用卡及 AndroidPay AndroidPay: AndroidPay  WebATM:網路 ATM ATM:自動櫃員機 CVS:超商代碼 BARCODE:超商條碼 ALL:不指定 --> */}
                                    </label>

                                    <button type="submit" className="btn btn-dark btn-block">送出</button>
                                </form>


                                {/* <button className='btn btn-block btn-outline-danger' type="submit">送  出</button> */}
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