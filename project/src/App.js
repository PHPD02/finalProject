import React, { Component } from 'react';
import { HashRouter, Switch, Route} from 'react-router-dom';

import Login from './chattyComponents/login';
import FoodpandaPage from './kangComponent/foodpandapage';

class App extends Component {
  state = {  } 
  render() { 
    return (
      <HashRouter>
        <div className='container'>
          <Switch>
            {/* <Route path="/" component={Index} exact/> */}
            {/* <Route path ="/index" component={Index} /> */}
            <Route path="/login" component={Login} />
            <Route path="/foodpandapage" component={FoodpandaPage}/>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}
 
export default App;
  

