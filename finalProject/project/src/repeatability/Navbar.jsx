import React, { Component } from 'react';
import "./Navbar.css";

class Navbar extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
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
                <a href="" className="btn btn-outline-warning ml-1">順弁</a>
                <a href="" className="btn btn-outline-warning ml-1">
                  <i className="fa fa-shopping-cart text-muted p-1"></i>Cart (0)</a>
                <a href="" className="btn btn-outline-warning ml-1">
                  <i className="fa fa-sign-in text-muted p-1"></i>Login</a>
              </div>
            </div>
          </div>

        </nav>
      </React.Fragment >
    );
  }
}

export default Navbar;