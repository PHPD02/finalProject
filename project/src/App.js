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
// 首頁 
import Firstpage from "./components/firstpage";
// 訂單詳情 
import OrderDetails from "./components/orderDetails";
// 店家資訊 
import ShopList from "./components/shopList";

/* == 承翰 == */
// 順弁 
import Sunsua from "./component/Sunsua/sunsua.jsx";

/* == 純芷 == */
// 登入
import Login from './chattyComponents/components page/login';
import LoginCompany from "./chattyComponents/components page/loginCompany";
import LoginComsumer from "./chattyComponents/components page/loginComsumer";
// 註冊
import RegisterCompany from './chattyComponents/components page/registerCompany';
import RegisterComsumer from './chattyComponents/components page/registerComsumer';
// 購物車
import Cart from './chattyComponents/components page/cart';
// 結帳頁面
import Payment from './chattyComponents/components page/payment';
// 店家資訊
import ShopList2 from "./chattyComponents/components page/shopList";

/* == 峻軒 == */
// 忘記密碼
import Forgotpwd from "./chattyComponents/components page/zzforgotpwd";
import Resetpassword from "./chattyComponents/components page/resetpassword";
import CompleteResetPwd from "./chattyComponents/components page/CompleteResetPwd";
import sendresetemail from "./chattyComponents/components page/sendresetemail";
// 按鈕或more
import FoodpandaPage from "./kangComponent/foodpandapage";
// 廠商登入後台
import ordermanage from "./kangComponent/Ordermanage";
import TodoIndex from "./kangComponent/TodoIndex";
import TodoEdit from "./kangComponent/TodoEdit";
import TodoCreate from "./kangComponent/TodoCreate";
import TodoDelete from "./kangComponent/TodoDelete";
import Admindashboard from "./kangComponent/Admindashboard";
// 會員中心
import MemberPage from "./kangComponent/MemberPage";
import Order_record from "./kangComponent/Order_record";
// 餐廳評論頁
import CommentPage from "./kangComponent/CommentPage";
// 聯絡客服
import CustomerMail from "./kangComponent/customerMail";
import CustomerMailSuccess from "./kangComponent/customerMail_Success.jsx";
// import Dashboard from "./kangComponent/NOT_UESD_NOW/Dashboard"
import FirebaseIndex from "./kangComponent/firebase/firebaseIndex";

/* 其他 */
import Tst from "./component/test/tst";
import Try from "./kangComponent/test";

// /orderdetails 這頁加入連繫外送員按鈕

/* =============================================================================================== */
/* == 承翰 == */
/* 測試用 */
import Gmtest03 from "./component/Maxtest/gmtest03";
import Gmtest04 from "./component/Maxtest/gmtest04";
import Gmtest12 from "./component/Maxtest/gmtest12";
import ImgurToPhp from "./component/Maxtest/imgurToPhp";

// import Gmtest03Copy from "./component/Maxtest/gmtest03 copy";
// import Tessst from "./component/Maxtest/test";


class App extends React.Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* 群傑 */}
          {/* 首頁 */}
          <Route path="/" component={Firstpage} exact />
          <Route path="/firstpage" component={Firstpage} />
          {/* 外送訂單詳情頁 */}
          <Route path="/orderDetails" component={OrderDetails} />
          
          {/* 承翰 */}
          {/* 順弁頁 */}
          <Route path="/sunsua" component={Sunsua} />

          {/* 純芷 */}
          <Route path="/login" component={Login} />
          <Route path="/loginCompany" component={LoginCompany} />
          <Route path="/loginComsumer" component={LoginComsumer} />
          <Route path="/registerComsumer" component={RegisterComsumer} />
          <Route path="/registerCompany" component={RegisterCompany} />
          <Route path="/cart" component={Cart} />
          <Route path="/payment/:orderId" component={Payment} />
          <Route path="/shopList2/:id" component={ShopList2} />

          {/* 峻軒 */}
          <Route path="/sunsuafooddelivery" component={FoodpandaPage} />
          <Route path="/CommentPage" component={CommentPage} />
          <Route path="/memberpage" component={MemberPage} />
          <Route path="/orderrecord" component={Order_record} />
          <Route path="/customerMail" component={CustomerMail} />
          <Route path="/customerMailSuccess" component={CustomerMailSuccess} />
          {/* 後台 */}
          <Route path="/ordermanage" component={ordermanage} />
          <Route path="/TodoIndex" component={TodoIndex} />
          <Route path="/Todo/Edit/:id" component={TodoEdit} />
          <Route path="/Todo/Delete/:id" component={TodoDelete} />
          <Route path="/Todo/Create" component={TodoCreate} />
          <Route path="/admin/dashboard" component={Admindashboard} />
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
          <Route path="/imgPhp" component={ImgurToPhp} />


          <Route path="/FirebaseIndex" component={FirebaseIndex} />
          <Route path="/tst" component={Tst} />  
          <Route path="/try" component={Try} />
          {/* 這兩個try忘記還用不用的到  先不要刪 */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
