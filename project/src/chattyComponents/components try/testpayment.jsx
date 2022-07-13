import React, { Component } from 'react';
import $ from 'jquery';

class TestPayment extends Component {
    constructor() {
        super();
        var today = new Date(),
            num = today.getTime(),
            y = today.getFullYear(),
            m = (today.getMonth()+1) <10? `0${(today.getMonth()+1)}`: `${(today.getMonth()+1)}` ,
            d = (today.getDate()) <10? `0${today.getDate()}`: `${today.getDate()}` ,
            hh = (today.getHours()) <10? `0${today.getHours()}`: `${today.getHours()}` ,
            mm = (today.getMinutes()) <10? `0${today.getMinutes()}`: `${today.getMinutes()}` ,
            ss = (today.getSeconds()) <10? `0${today.getSeconds()}`: `${today.getSeconds()}` ,

            gotDate = `${y}/${m}/${d} ${hh}:${mm}:${ss}` ;
        // date = today.getFullYear

        this.state = {
            num: num,
            gotDate: gotDate,
        };
    }

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     // console.log(e);
    //     const form = $(e.target);
    //     // console.log($('form').serialize());
    //     $.ajax({
    //         type: "POST",
    //         url: form.attr("action"),
    //         data: form.serialize(),
    //         success(data){
    //             console.log(data);
    //         }
    //     })
    // }


    render() {

        return (
            <React.Fragment>
                <br /><br /><br />
                <div className='text-center'>
                    <form id="idFormAioCheckOut" 
                        method="POST" action="http://localhost:80/PHP/phpEcpay/ECPay_CreateOrder.php"
                        onSubmit={(event) => this.handleSubmit(event)}>
                        <label>編號 (MerchantTradeNo):
                            <input type="text" name="MerchantTradeNo"  defaultValue={this.state.num} className="form-control"  />
                            {/* <!-- 不可重複使用。英數字大小寫混合 --> */}
                        </label><br />
                        <label className="col-xs-12">時間 (MerchantTradeDate):
                            <input type="text" name="MerchantTradeDate" defaultValue={this.state.gotDate} className="form-control"  />
                            {/* <!-- yyyy/MM/dd HH:mm:ss --> */}
                        </label><br />
                        <label className="col-xs-12">類型 (PaymentType):
                            <input type="text" name="PaymentType" defaultValue="aio" className="form-control"  />
                            {/* <!-- aio --> */}
                        </label><br />
                        <label className="col-xs-12">金額 (TotalAmount):
                            <input type="text" name="TotalAmount" defaultValue="321" className="form-control"  />
                            {/* <!-- 請帶整數，不可有小數點 僅限新台幣 金額不可為 0 元 CVS&BARCODE 最低限制為 30 元，最高限制為 30,000 元 --> */}
                        </label><br />
                        <label className="col-xs-12">描述 (TradeDesc):
                            <input type="text" name="TradeDesc" defaultValue="餐飲費用" className="form-control"  />
                        </label><br />
                        <label className="col-xs-12">名稱 (ItemName):
                            <input type="text" name="ItemName" defaultValue="餐飲費用" className="form-control"  />
                            {/* <!-- 商品名稱以符號 # 分 --> */}
                        </label><br />
                        <label className="col-xs-12">付款方式 (ChoosePayment):
                            <input type="text" name="ChoosePayment" defaultValue="Credit" className="form-control"  />
                            {/* <!-- Credit:信用卡及 AndroidPay AndroidPay: AndroidPay  WebATM:網路 ATM ATM:自動櫃員機 CVS:超商代碼 BARCODE:超商條碼 ALL:不指定 --> */}
                        </label><br /><br />

                        <button type="submit" className="btn btn-dark">綠界線上支付</button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default TestPayment;