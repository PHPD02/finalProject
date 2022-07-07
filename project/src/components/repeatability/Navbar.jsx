import React, { Component } from 'react';
import "./css/navbar.css";

class Navbar extends Component {
  state = {}
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
                  <i className="fa fa-shopping-bag text-info p-1"></i>Cart (0)</a>
                {/* 登入 */}
                <a href="" className="btn btn-outline-dark m-1 p-1">
                  <i className="fa fa-user-circle text-info p-1"></i>Login</a>
              </div>
            </div>
          </div>

        </nav>
      </React.Fragment >
    );
  }
}

export default Navbar;