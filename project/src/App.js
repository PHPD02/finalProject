import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
// import "../node_modules/font-awesome/css/font-awesome.min.css";

import Firstpage from "./component/firstPage/firstpage";
import OrderDetails from "./component/partpage/orderDetails";
import ShopList from "./component/partpage/shopList";
import Login from './chattyComponents/login';
import Sunsua from './component/Sunsua/sunsua.jsx';


/* 測試元件專區 */
import PhpTest from './component/test/phptest/phptest';
import TimeCountDown from './component/Sunsua/comp/TimeCountDown';
import Test from './component/test/test_npmComp/npmComp';

class App extends Component {
  state = {}
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* 首頁 */}
          <Route path="/" component={Firstpage} exact />
          {/* 登入頁面 */}
          <Route path="/login" component={Login} />
          {/* 順弁頁 */}
          <Route path="/sunsua" component={Sunsua} />
          {/* 外送頁 */}


          {/* ====================================== */}

          <Route path="/firstpage" component={Firstpage} />
          <Route path="/orderDetails" component={OrderDetails} />
          <Route path="/shopList" component={ShopList} />


          {/* ---------- 測試元件專區 ---------- */}
          <Route path="/phptest" component={PhpTest} />
          <Route path="/test/tcd" component={TimeCountDown} />
          <Route path="/test/npmComp" component={Test} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

