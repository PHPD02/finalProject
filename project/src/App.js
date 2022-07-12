import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// 引入模板
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

// 引入首頁
import Firstpage from "./components/firstpage";
// 引入訂單詳情
import OrderDetails from "./components/orderDetails";
// 引入店家頁面
import ShopList from "./components/shopList";
// 測試
import test from "./components/test";

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Firstpage} exact />
          <Route path="/firstpage" component={Firstpage} />

          <Route path="/orderDetails" component={OrderDetails} />
          <Route path="/shopList" component={ShopList} />

          <Route path="/test" component={test} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
