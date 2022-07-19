import React, { Component } from 'react';
import "./css/navbar.css";


class Navbar extends Component {
  state = {}
  topmous
  render() {
    return (
      <React.Fragment>
        {/* 固定導覽列在最上方 */}
        {/* expand 節點 */}
        <nav className="nav-bg navbar navbar-expand-lg flex-top navbar-light">
          <div className="container-fluid">
            <a><img className="navbar-brand logoImg" src='../image/logo.png' /></a>
            {/* menu */}
            <button className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span> menu
            </button>
            {/* 內容 */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className='container-fluid'>

                <ul className="navbar-nav ">
                  <li className="nav-item active pl-5">
                    <a className="nav-link settext" href='./'><span className="sr-only "></span><i></i>順弁</a>
                  </li>
                  <li className="nav-item active pl-5">
                    <a className="nav-link settext" href=''><span className="sr-only"></span>配合合作店家</a>
                  </li>
                  <li className="nav-item active pl-5">
                    <a className="nav-link settext" href=''><span className="sr-only"></span>最新消息</a>
                  </li>
                  <li className="nav-item active pl-5">
                    <a className="nav-link settext" href=''><span className="sr-only"></span>聯絡我們</a>
                  </li>
                </ul>
                <div className="buttons">
                  {/* 購物車 */}
                  <button type="button" className='btn btn-outline-dark ml-1 rounded-pill btnsm'>
                    <i className="fa fa-shopping-cart text-info p-1"></i><span>Cart (0)</span>
                  </button>
                  <button type="button" className='btn btn-outline-dark ml-1 rounded-pill btnsm'>
                    <i className="fa fa-sign-in text-info p-1 "></i><span>Login</span>
                  </button>
                </div>


              </div>

            </div>
          </div>

        </nav>
      </React.Fragment >
    );
  }
}

export default Navbar;