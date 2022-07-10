import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './chattyComponents/js/tesst.js';

import Login1 from './chattyComponents/components page/login1';
import Register from './chattyComponents/components page/register';
import Register2 from './chattyComponents/components page/register2';
import Forgotpwd from './chattyComponents/components page/forgotpwd';
import Cart from './chattyComponents/components page/cart';
import Payment from './chattyComponents/components page/payment';

import Card from './chattyComponents/components item/cartcard';
import Index from './chattyComponents/components try/byIndex';
// import Test from './chattyComponents/zztestsql';
// import Test1 from './chattyComponents/zzteststate';
// import Login2 from './chattyComponents/zzloginCompany';
// import Login3 from './chattyComponents/zzloginComsumer';
// import Glogin from './chattyComponents/components try/googlelogin';
import UseGoogleLogin from './chattyComponents/components try/useGoogleLogin';
import facebooklogin from './chattyComponents/components try/facebooklogin';
// import './index';
import TestScreen from './chattyComponents/components try/testscreen.jsx';

class App extends Component {
  state = {  } 
  render() { 
    return (
      <BrowserRouter>
          <Switch>
            <Route path="/" component={Index} exact/>
            <Route path ="/index" component={Index} />

            <Route path="/login1" component={Login1} />
            {/* <Route path="/login2" component={Login2} />
            <Route path="/login3" component={Login3} /> */}
            <Route path="/register" component={Register} />
            <Route path="/register2" component={Register2} />
            <Route path="/forgotpwd" component={Forgotpwd} />
            <Route path="/cart" component={Cart} />
            <Route path="/cartcard" component={Card} />
            <Route path="/payment" component={Payment} />
            {/* <Route path="/googlelogin" component={Glogin} /> */}
            <Route path="/usegooglelogin" component={UseGoogleLogin} />
            <Route path="/usefacebooklogin" component={facebooklogin} />
            <Route path="/testScreen" component={TestScreen} />


            {/* <Route path="/test" component={Test} />
            <Route path="/test1" component={Test1} /> */}

          </Switch>
      </BrowserRouter>
    );
  }
}
 
export default App;
  

