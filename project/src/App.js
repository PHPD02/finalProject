import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
// import "../node_modules/font-awesome/css/font-awesome.min.css";

import Firstpage from "./component/firstPage/firstpage";
import Convenient from "./component/partpage/convenient";
import OrderDetails from "./component/partpage/orderDetails";
import ShopList from "./component/partpage/shopList";
import Login from './chattyComponents/login';
import Sunsua from './component/Sunsua/sunsua.jsx';





import PhpTest from './component/test/phptest/phptest';
class App extends Component {
  state = {}
  render() {
    return (
      <HashRouter>
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
          <Route path="/convenient" component={Convenient} />
          <Route path="/orderDetails" component={OrderDetails} />
          <Route path="/shopList" component={ShopList} />



          <Route path="/phptest" component={PhpTest} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;

