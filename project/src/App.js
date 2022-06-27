import React, { Component } from 'react';
import { HashRouter, Switch, Route} from 'react-router-dom';


import Login from './chattyComponents/login';
import FoodpandaPage from './kangComponent/foodpandapage';
import Restaurants from './kangComponent/restaurants';
import DashboardProducts from './kangComponent/DashboardProducts';
import DashboardProducts_tryifunctioncomponent from './kangComponent/DashboardProducts_tryifunctioncomponent';
import MemberPage from './kangComponent/MemberPage'
import Order_record from './kangComponent/Order_record';

class App extends Component {
  state = {  } 
  render() { 
    return (
      <HashRouter>
        {/* <div className='container'> */}
          <Switch>
            {/* <Route path="/" component={Index} exact/> */}
            {/* <Route path ="/index" component={Index} /> */}
            <Route path="/login" component={Login} />
            <Route path="/foodpandapage" component={FoodpandaPage}/>
            <Route path="/restaurants" component={Restaurants} />
            <Route path="/dashboardproducts" component={DashboardProducts} />
            <Route path="/DashboardProducts_tryifunctioncomponent" component={DashboardProducts_tryifunctioncomponent} />
            <Route path="/memberpage" component={MemberPage} />
            <Route path="/orderrecord" component={Order_record} />
          </Switch>
        {/* </div> */}
      </HashRouter>
    );
  }
}
 
export default App;
