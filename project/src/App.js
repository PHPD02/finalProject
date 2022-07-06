import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './js/tesst.js';

import Index from './components/byIndex';

import Login1 from './chattyComponents/login1';
// import Login2 from './chattyComponents/zzloginCompany';
// import Login3 from './chattyComponents/zzloginComsumer';
import Register from './chattyComponents/register';
import Register2 from './chattyComponents/register2';
import Forgotpwd from './chattyComponents/forgotpwd';
import Cart from './chattyComponents/cart';
import Card from './chattyComponents/cartcard';
import Payment from './chattyComponents/payment';

import Test from './chattyComponents/zztestsql';
import Test1 from './chattyComponents/zzteststate';

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

            <Route path="/test" component={Test} />
            <Route path="/test1" component={Test1} />

          </Switch>
      </BrowserRouter>
    );
  }
}
 
export default App;
  

