import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Sunsua from './component/Sunsua/sunsua.jsx';

/* 測試 */
import ImgUpload from './component/Maxtest/imgUpload'
import SimpleMap from './component/Maxtest/googleMap'
import Gmtest from './component/Maxtest/gmtest'
import MyComponent from './component/Maxtest/gmtest02'
import Gmtest03 from './component/Maxtest/gmtest03'
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
          <Route path="/gm" component={SimpleMap} />
          <Route path="/gmtest" component={Gmtest} />
          <Route path="/gmtest02" component={MyComponent} />
          <Route path="/gmtest03" component={Gmtest03} />

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

