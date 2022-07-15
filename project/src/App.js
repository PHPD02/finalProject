import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './chattyComponents/js/tesst.js';

import Login from './chattyComponents/components page/login';
import RegisterCompany from './chattyComponents/components page/registerCompany';
import RegisterComsumer from './chattyComponents/components page/registerComsumer';
import Forgotpwd from './chattyComponents/components page/zzforgotpwd';
import Cart from './chattyComponents/components page/cart';
import Payment from './chattyComponents/components page/payment';


// 
import Resetpassword from './chattyComponents/components page/resetpassword';
import CompleteResetPwd from './chattyComponents/components page/CompleteResetPwd';
import sendresetemail from './chattyComponents/components page/sendresetemail';


// import Card from './chattyComponents/components item/cartcard';
import Index from './chattyComponents/components try/byIndex';
import StoreCard from './chattyComponents/components item/storeCards';
import Test from './chattyComponents/components try/zztestsql';
// import Test1 from './chattyComponents/zzteststate';
// import Login2 from './chattyComponents/zzloginCompany';
// import Login3 from './chattyComponents/zzloginComsumer';
// import Glogin from './chattyComponents/components try/googlelogin';
import UseGoogleLogin from './chattyComponents/components try/useGoogleLogin';
import facebooklogin from './chattyComponents/components try/facebooklogin';
// import './index';
import TestScreen from './chattyComponents/components try/testscreen.jsx';
import StorePage from './chattyComponents/components page/storePage.jsx';
import TestPayment from './chattyComponents/components try/testpayment.jsx';

class App extends Component {
  state = {  } 
  render() { 
    return (
      <BrowserRouter>
          <Switch>
            <Route path="/" component={Index} exact/>
            <Route path ="/index" component={Index} />
            <Route path="/login" component={Login} />
            <Route path="/registerComsumer" component={RegisterComsumer} />
            <Route path="/registerCompany" component={RegisterCompany} />
            <Route path="/cart" component={Cart} />
            <Route path="/payment" component={Payment} />




            {/* <Route path="/googlelogin" component={Glogin} /> */}
            <Route path="/usegooglelogin" component={UseGoogleLogin} />
            <Route path="/usefacebooklogin" component={facebooklogin} />
            <Route path="/testScreen" component={TestScreen} />
            <Route path="/storeCards" component={StoreCard} />
            <Route path="/storePage" component={StorePage} />
            <Route path="/test" component={Test} />
            <Route path="/testPayment" component={TestPayment} />
            {/* <Route path="/login2" component={Login2} />
            <Route path="/login3" component={Login3} /> */}
            {/* <Route path="/test1" component={Test1} /> */}
            {/* <Route path="/cartcard" component={Card} /> */}
            <Route path="/forgotpwd" component={Forgotpwd} />
            <Route path="/resetpassword" component={Resetpassword} />
            <Route path="/CompleteResetPwd" component={CompleteResetPwd} />
            <Route path="/sendresetemail" component={sendresetemail} />
            
          </Switch>
      </BrowserRouter>
    );
  }
}

 
export default App;
  

