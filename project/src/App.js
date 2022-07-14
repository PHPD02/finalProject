import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./chattyComponents/login";
import FoodpandaPage from "./kangComponent/foodpandapage";
import TodoIndex from "./kangComponent/TodoIndex";
import TodoEdit from "./kangComponent/TodoEdit";
import TodoCreate from "./kangComponent/TodoCreate";
import TodoDelete from "./kangComponent/TodoDelete";
import Dashboardorder from "./kangComponent/Dashboard_order";
// 0713新增  記得加入

import MemberPage from "./kangComponent/MemberPage";
import Order_record from "./kangComponent/Order_record";
import CommentPage from "./kangComponent/CommentPage";
import Dashboard from "./kangComponent/Dashboard";



class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/foodpandapage" component={FoodpandaPage} />
          <Route path="/TodoIndex" component={TodoIndex} />
          <Route path="/Todo/Edit/:id" component={TodoEdit} />
          <Route path="/Todo/Delete/:id" component={TodoDelete} />
          <Route path="/Todo/Create" component={TodoCreate} />
          <Route path="/CommentPage" component={CommentPage} />
          <Route path="/admin/dashboard/Dashboardorder" component={Dashboardorder} />
          


          <Route path="/memberpage" component={MemberPage} />
          <Route path="/orderrecord" component={Order_record} />

          <Route path="/admin/dashboard" component={Dashboard} />
          {/* 這還是空的  應該不會用到了 */}

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
