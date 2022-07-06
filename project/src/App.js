import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Sunsua from './component/Sunsua/sunsua.jsx';

import "../node_modules/font-awesome/css/font-awesome.min.css";
import Firstpage from "./components/firstpage";
import OrderDetails from "./partpage/orderDetails";
import ShopList from "./partpage/shopList";
class App extends Component {
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


        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
