import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Firstpage from "./components/firstpage";
import Convenient from "./partpage/convenient";
import OrderDetails from "./partpage/orderDetails";
import ShopList from "./partpage/shopList";
import TaiwanMap from "./repeatability/TaiwanMap";
class App extends Component {
  state = {};
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" component={Firstpage} exact />
          <Route path="/firstpage" component={Firstpage} />
          <Route path="/convenient" component={Convenient} />
          <Route path="/orderDetails" component={OrderDetails} />
          <Route path="/shopList" component={ShopList} />
          <Route path="/taiwanMap" component={TaiwanMap} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
