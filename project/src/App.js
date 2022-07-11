import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Sunsua from './component/Sunsua/sunsua.jsx';

/* 測試 */
import ImgUpload from './component/test/imgUpload'
class App extends Component {
  state = {}
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* 首頁 */}
          {/* 登入頁面 */}
          {/* 順弁頁 */}
          <Route path="/sunsua" component={Sunsua} />
          {/* 外送頁 */}


          {/* ====================================== */}
          <Route path="/imgtest" component={ImgUpload} />

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

