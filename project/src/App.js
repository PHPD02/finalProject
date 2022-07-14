
import React, { Component } from "react";
import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom';

// 引入模板
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/* 承翰 */
/* 順弁 */
import Sunsua from './component/Sunsua/sunsua.jsx';


/* == 群傑 == */
/* 首頁 */
import Firstpage from "./components/firstpage";
/* 訂單詳情 */
import OrderDetails from "./components/orderDetails";
/* 店家資訊 */
import ShopList from "./components/shopList";

/* 純芷 */
import './chattyComponents/js/tesst.js';
import Index from './chattyComponents/components/byIndex';
import Login1 from './chattyComponents/login1';
// import Login2 from './chattyComponents/zzloginCompany';
// import Login3 from './chattyComponents/zzloginComsumer';
import Register from './chattyComponents/register';
import Register2 from './chattyComponents/register2';
import Forgotpwd from './chattyComponents/forgotpwd';
import Cart from './chattyComponents/cart';
import Card from './chattyComponents/cartcard';
import Payment from './chattyComponents/payment';


/* == 峻軒 == */
import FoodpandaPage from "./kangComponent/foodpandapage";
import TodoIndex from "./kangComponent/TodoIndex";
import TodoEdit from "./kangComponent/TodoEdit";
import TodoCreate from "./kangComponent/TodoCreate";
import TodoDelete from "./kangComponent/TodoDelete";

import MemberPage from "./kangComponent/MemberPage";
import Order_record from "./kangComponent/Order_record";
import CommentPage from "./kangComponent/CommentPage";
import Dashboard from "./kangComponent/NOT_UESD_NOW/Dashboard"



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
          <Route path="/shopList" component={ShopList} />
          {/* 外送訂單詳情頁 */}
          <Route path="/orderDetails" component={OrderDetails} />


          {/* ====================================== */}
          {/* 純芷 */}
          <Route path="/cht4" component={Index} exact />
          <Route path="/index" component={Index} />

          <Route path="/login1" component={Login1} />
          {/* <Route path="/login2" component={Login2} /> */}
          {/* <Route path="/login3" component={Login3} /> */}
          <Route path="/register" component={Register} />
          <Route path="/register2" component={Register2} />
          <Route path="/forgotpwd" component={Forgotpwd} />
          <Route path="/cart" component={Cart} />
          <Route path="/cartcard" component={Card} />
          <Route path="/payment" component={Payment} />

          {/* <Route path="/test" component={Test} /> */}
          {/* <Route path="/test1" component={Test1} /> */}

          {/* ====================================== */}
          {/* 峻軒 */}
          {/* <Route path="/login" component={Login} /> */}
          <Route path="/foodpandapage" component={FoodpandaPage} />
          <Route path="/TodoIndex" component={TodoIndex} />
          <Route path="/Todo/Edit/:id" component={TodoEdit} />
          <Route path="/Todo/Delete/:id" component={TodoDelete} />
          <Route path="/Todo/Create" component={TodoCreate} />
          <Route path="/CommentPage" component={CommentPage} />

          <Route path="/memberpage" component={MemberPage} />
          <Route path="/orderrecord" component={Order_record} />

          <Route path="/admin/dashboard" component={Dashboard} />


          <Route path="/orderDetails" component={OrderDetails} />
          <Route path="/shopList" component={ShopList} />

          
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
