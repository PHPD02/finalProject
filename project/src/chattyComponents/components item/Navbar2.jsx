import React, { Component } from 'react';
import "../../components/repeatability/css/navbar.css";
import CheckCart from '../components item/checkCart';
import Axios from 'axios';
import $ from 'jquery';
import { NavLink } from 'react-router-dom';

var getemail = localStorage.getItem('email');
class Navbar extends Component {
  state = {
    cartNum: 0
  }

  initCartNum = () => {
    Axios.get("http://localhost/PHP/cart/getallcart.php").then((res) => {
      // console.log(res.data);
      const carts = res.data || [];
      const cartNum = carts.map(cart => parseInt(cart.mount)).reduce((a, value) => a + value, 0);
      // console.log(cartNum);
      this.setState({ cartNum: cartNum });
      // console.log(carts[0]);
    })
  }



  async componentDidMount() {
    // var result = await Axios.get("http://localhost:8000/todo/list");
    var result = await Axios.get("http://localhost/PHP/storeCards/getStoreItems.php");
    this.setState({
      menuList: result.data,
      restaurantName: result.data[0].restaurantName
    })
    console.log(this.state.menuList)
    this.initCartNum();
  }
  render() {
    return (
      <React.Fragment>
        {/* 固定導覽列在最上方 */}
        <nav className="nav-bg navbar navbar-expand-lg fixed-top navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand">Logo</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item active">
                  <a className="nav-link"><span className="sr-only">(current)</span></a>
                </li>
              </ul>
              <div className="buttons">
                {/* <a href="" className="btn btn-outline-dark">
                  <i class="fa fa-user-circle" aria-hidden="true"></i>
                </a> */}
                {/* 購物車 */}
                <a href="" className="btn btn-outline-dark ml-1 p-1">
                  <i className="fa fa-shopping-bag text-info p-1"></i>
                  Cart<CheckCart cartNum={this.state.cartNum} /></a>
                {/* 登入 */}
                {/* <a href="" id="loginin" className="btn btn-outline-dark m-1 p-1">
                  <i className="fa fa-user-circle text-info p-1"></i>Login</a> */}
                <a href="" id="loginout" className="btn btn-outline-dark m-1 p-1">
                  <i class="fa fa-sign-out p-1"></i>Logout</a>
                {/* <NavLink to="/login">
                  <input id="loginin" onClick={this.loginClick} className="btn btn-outline-success my-2 my-sm-0" type="submit" value="login" />
                  </NavLink> */}
                <NavLink to="/"><input id="logoutout" onClick={this.logoutClick} className="btn btn-outline-primary my-2 my-sm-0" type="hidden" value="logout" /></NavLink>
              </div>
            </div>
          </div>

        </nav>
      </React.Fragment >
    );
  }
}

export default Navbar;