import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './chattyComponents/login';
import Sunsua from './component/Sunsua/sunsua.jsx';

import PhpTest from './component/test/phptest/phptest';
class App extends Component {
  state = {}
  render() {
    return (
      <HashRouter>
        <Switch>
          {/* <Route path="/" component={Index} exact/> */}
          {/* <Route path ="/index" component={Index} /> */}
          <Route path="/login" component={Login} />
          <Route path="/sunsua" component={Sunsua} />


          
          <Route path="/phptest" component={PhpTest} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;

