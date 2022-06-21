import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Firstpage from "./components/firstpage";
import Convenient from "./partpage/convenient";
class App extends Component {
  state = {};
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" component={Firstpage} exact />
          <Route path="/firstpage" component={Firstpage} />
          <Route path="/convenient" component={Convenient} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
