import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Login from './chattyComponents/login';
import Sunsua from './component/Sunsua/sunsua.jsx';

class App extends Component {
  state = {}
  render() {
    return (
      <HashRouter>
        <div className='container'>
          <Switch>
            {/* <Route path="/" component={Index} exact/> */}
            {/* <Route path ="/index" component={Index} /> */}
            <Route path="/login" component={Login} />
            <Route path="/sunsua" component={Sunsua} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;


