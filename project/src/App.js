import React, { Component } from 'react';
import { HashRouter, Switch, Route} from 'react-router-dom';

import Login from './chattyComponents/login';

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
          </Switch>
        </div>
      </HashRouter>
    );
  }
}
 
export default App;
  

