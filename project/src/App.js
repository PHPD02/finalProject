import React, { Component } from "react";
import { BrowserRouter, HashRouter, Switch, Route } from "react-router-dom";

// 引入模板
// import "./assets/css/lib/font-awesome.min.css"
import '../../project/src/kangComponent/assets/css/lib/font-awesome.min.css'
import "../../project/src/kangComponent/assets/css/lib/themify-icons.css"
import "../../project/src/kangComponent/assets/css/lib/menubar/sidebar.css"
import "../../project/src/kangComponent/assets/css/style.css"

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* == 群傑 == */
/* 首頁 */
import Firstpage from "./components/firstpage";
/* 訂單詳情 */
import OrderDetails from "./components/orderDetails";
/* 店家資訊 */
import ShopList from "./components/shopList";





/* 承翰 */
/* 順弁 */
import Sunsua from "./component/Sunsua/sunsua.jsx";


/* == 純芷 == */
import Login from './chattyComponents/components page/login';
import LoginCompany from "./chattyComponents/components page/loginCompany";
import LoginComsumer from "./chattyComponents/components page/loginComsumer";
import RegisterCompany from './chattyComponents/components page/registerCompany';
import RegisterComsumer from './chattyComponents/components page/registerComsumer';
import Cart from './chattyComponents/components page/cart';
import Payment from './chattyComponents/components page/payment';
import ShopList2 from "./chattyComponents/components page/shopList";


// 
import Forgotpwd from './chattyComponents/components page/zzforgotpwd';
import Resetpassword from './chattyComponents/components page/resetpassword';
import CompleteResetPwd from './chattyComponents/components page/CompleteResetPwd';
import sendresetemail from './chattyComponents/components page/sendresetemail';



/* == 峻軒 == */
// 按鈕或more
import FoodpandaPage from "./kangComponent/foodpandapage";
// 廠商登入後連結
import TodoIndex from "./kangComponent/TodoIndex";
import TodoEdit from "./kangComponent/TodoEdit";
import TodoCreate from "./kangComponent/TodoCreate";
import TodoDelete from "./kangComponent/TodoDelete";

// 會員拉霸-會員中心、訂單紀錄、登出
import MemberPage from "./kangComponent/MemberPage";
import Order_record from "./kangComponent/Order_record";
// 餐廳資訊
import CommentPage from "./kangComponent/CommentPage";
// import Dashboard from "./kangComponent/NOT_UESD_NOW/Dashboard";
// 聯絡客服
import CustomerMail from "./kangComponent/customerMail"
import CustomerMailSuccess from "./kangComponent/customerMail_Success.jsx";
// import Dashboard from "./kangComponent/NOT_UESD_NOW/Dashboard"

// /orderdetails 這頁加入連繫外送員按鈕

/* =============================================================================================== */
/* == 承翰 == */
/* 測試用 */
import Gmtest03 from "./component/Maxtest/gmtest03";
import Gmtest04 from "./component/Maxtest/gmtest04";
import Gmtest12 from "./component/Maxtest/gmtest12";

// import Gmtest03Copy from "./component/Maxtest/gmtest03 copy";
// import Tessst from "./component/Maxtest/test";


class App extends React.Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* 首頁 */}
          <Route path="/" component={Firstpage} exact />
          <Route path="/firstpage" component={Firstpage} />
          {/* 登入頁面 */}
          {/* 順弁頁 */}
          <Route path="/sunsua" component={Sunsua} />
          {/* 外送頁 */}
          {/* 外送店家頁面 */}
          {/* <Route path="/shopList" component={ShopList} /> */}
          {/* 外送訂單詳情頁 */}
          <Route path="/orderDetails" component={OrderDetails} />
          <Route path="/shopList" component={ShopList} />
          

          {/* ================================================================================================================== */}
          {/* 純芷 */}
          {/* <Route path="/cht4" component={Index} exact /> */}
          {/* <Route path="/index" component={Index} /> */}
          <Route path="/login" component={Login} />
          <Route path="/loginCompany" component={LoginCompany} />
          <Route path="/loginComsumer" component={LoginComsumer} />
          <Route path="/registerComsumer" component={RegisterComsumer} />
          <Route path="/registerCompany" component={RegisterCompany} />
          <Route path="/cart" component={Cart} />
          <Route path="/payment" component={Payment} />
          <Route path="/shopList2" component={ShopList2} />

          {/* <Route path="/googlelogin" component={Glogin} /> */}
          {/* <Route path="/usegooglelogin" component={UseGoogleLogin} /> */}
          {/* <Route path="/usefacebooklogin" component={facebooklogin} /> */}
          {/* <Route path="/testScreen" component={TestScreen} /> */}
          {/* <Route path="/storeCards" component={StoreCard} /> */}
          {/* <Route path="/storePage" component={StorePage} /> */}
          {/* <Route path="/test" component={Test} /> */}
          {/* <Route path="/testPayment" component={TestPayment} /> */}
          {/* <Route path="/login2" component={Login2} />
            <Route path="/login3" component={Login3} /> */}
          {/* <Route path="/test1" component={Test1} /> */}
          {/* <Route path="/cartcard" component={Card} /> */}
          {/* <Route path="/forgotpwd" component={Forgotpwd} /> */}

          {/* ================================================================================================================== */}
          {/* 峻軒 */}
          {/* <Route path="/login" component={Login} /> */}
          <Route path="/sunsuafooddelivery" component={FoodpandaPage} />
          <Route path="/CommentPage" component={CommentPage} />
          <Route path="/memberpage" component={MemberPage} />
          <Route path="/orderrecord" component={Order_record} />
          <Route path="/customerMail" component={CustomerMail} />
          <Route path="/customerMailSuccess" component={CustomerMailSuccess} />

          {/* 後台 */}
          <Route path="/TodoIndex" component={TodoIndex} />
          <Route path="/Todo/Edit/:id" component={TodoEdit} />
          <Route path="/Todo/Delete/:id" component={TodoDelete} />
          <Route path="/Todo/Create" component={TodoCreate} />

          {/* <Route path="/admin/dashboard" component={Dashboard} /> */}

          {/* <Route path="/orderDetails" component={OrderDetails} /> */}


          <Route path="/forgotpwd" component={Forgotpwd} />
          <Route path="/resetpassword" component={Resetpassword} />
          <Route path="/CompleteResetPwd" component={CompleteResetPwd} />
          <Route path="/sendresetemail" component={sendresetemail} />


          {/* ================================================================================================================== */}
          {/* 承翰 */}
          {/* 測試用 */}
          <Route path="/gmtest03" component={Gmtest03} />
          <Route path="/gmtest04" component={Gmtest04} />
          <Route path="/gmtest12" component={Gmtest12} />


        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
