import React from "react";
import "../css/MemberPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import axios from "axios";

import Navbar from "../components/repeatability/Navbar";

class MemberPage extends React.Component {

  state = {
    usersContact: {},
  };


  async componentDidMount() {
    var url = `http://localhost:8050/users/list/kongkong@gmail.com`;
    var result = await axios.get(url);
    // console.log(result);
    // console.log(url);
    this.state.usersContact = result.data;
    this.setState({});
  }
  okButtonClick = async () => {
    var result = await axios.put(
      `http://localhost:8050/users/list`,
      this.state.usersContact
    );
    console.log(result);

    window.location = "/memberpage/kongkong@gmail.com"
  };
  usersTelChange = async (e) => {
    this.state.usersContact.tel = e.target.value;
    this.setState({});
  };







  render() {
    return (
      <React.Fragment>
        <Navbar />
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav> */}
        <div className="container d-flex justify-content-around mt-3">
          <div className="card" style={{ width: "30rem" }}>
            <div className="card-body">
              <h2 className="card-title text-center font-weight-bold h2">
                訂單紀錄
              </h2>
              <h6 className="card-subtitle mb-2 text-muted my-4 text-center">
                {/* 您可以隨時提取押金，但記得使用順弁服務需要您提供一定金額的押金 */}
                <br></br><br/>
              </h6>
              <div className="row my-2 text-center d-flex align-items-center">
                  {/* <div className="col-5">
                    <i
                      class="fa fa-gift"
                      aria-hidden="true"
                      style={{ fontSize: "80px" }}
                    ></i>
                  </div>
                  <div className="col-7">
                    <p className="card-text" style={{ fontSize: "50px" }}>
                      $500元
                    </p>
                  </div> */}
                  <br /><br /><br/>

                </div>
                <div className="row  text-center mt-4 font-weight-bold h4">
                  <div className="col ">
                    <button className="card_button_effect Vbtn">
                      <svg>
                        <rect
                          x="0"
                          y="0"
                          fill="none"
                          width="100%"
                          height="100%"
                        ></rect>
                      </svg>
                      紀錄查詢
                    </button>
                  </div>
                  <div className="col">
                    <button className="card_button_effect Vbtn">
                      <svg>
                        <rect
                          x="0"
                          y="0"
                          fill="none"
                          width="100%"
                          height="100%"
                        ></rect>
                      </svg>
                      成為外送員
                    </button>
                  </div>
                </div>
            </div>
          </div>
          <div className="card" style={{ width: "30rem" }}>
            <div className="card-body">
              <h2 className="card-title text-center font-weight-bold h2">
                順弁收益/紀錄
              </h2>
              <h6 className="card-subtitle mb-2 text-muted my-4 text-center">
                我們將於每月15日將上月收益匯至您的帳戶，當然，您也可以隨時提領，但您需要額外支付手續費。
              </h6>
                <div className="row my-2 text-center d-flex align-items-center">
                  <div className="col-5">
                    <i
                      class="fa fa-gift"
                      aria-hidden="true"
                      style={{ fontSize: "80px" }}
                    ></i>
                  </div>
                  <div className="col-7">
                    <p className="card-text" style={{ fontSize: "50px" }}>
                      $500元
                    </p>
                  </div>
                </div>
                <div className="row  text-center mt-4 font-weight-bold h4">
                  <div className="col ">
                    <button className="card_button_effect Vbtn">
                      <svg>
                        <rect
                          x="0"
                          y="0"
                          fill="none"
                          width="100%"
                          height="100%"
                        ></rect>
                      </svg>
                      提領錢包
                    </button>
                  </div>
                  <div className="col">
                    <button className="card_button_effect Vbtn">
                      <svg>
                        <rect
                          x="0"
                          y="0"
                          fill="none"
                          width="100%"
                          height="100%"
                        ></rect>
                      </svg>
                      查詢紀錄
                    </button>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-center mt-5">
          <div className="card" style={{ width: "60rem" }}>
            <div className="text-left h1 my-4">
              <p>
                <i className="fa fa-credit-card mr-4"></i>已儲存的付款方式
              </p>
            </div>
            <ul class="list-group">
              <li class="list-group-item">
                  <div
                    className="row text-left h3 d-flex align-items-center button_effect "
                    style={{ height: "150px" }}
                  >
                    <div className="col-2">
                      {" "}
                      <i class="fa-brands fa-cc-visa"></i>
                    </div>
                    <div className="col-6">******999322</div>
                    <div className="col-2">
                      <button>
                        <span class="badge badge-light">預設</span>
                      </button>
                    </div>
                    <div className="col-1">
                      <i class="fa-solid fa-trash-can"></i>
                    </div>
                    <div className="col-1">
                      <i class="fa-solid fa-pen-to-square"></i>
                    </div>
                  </div>
              </li>
              <li class="list-group-item">
                  <div
                    className="row text-left h3 d-flex align-items-center button_effect"
                    style={{ height: "150px" }}
                  >
                    <div className="col-2">
                      {" "}
                      <i class="fa-brands fa-cc-visa"></i>
                    </div>
                    <div className="col-6">******945642</div>
                    <div className="col-2"></div>
                    <div className="col-1">
                      <i class="fa-solid fa-trash-can"></i>
                    </div>
                    <div className="col-1">
                      <i class="fa-solid fa-pen-to-square"></i>
                    </div>
                  </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="container d-flex justify-content-center mt-5">
          <div className="card" style={{ width: "60rem" }}>
            <div className="text-left h1 my-5">
              <p>
                <i className="fa fa-credit-card mr-4"></i>我的帳戶
              </p>
            </div>
            <form>
              <fieldset className="mb-5">
                <div className="h4">
                  <p>電子郵件</p>
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    value="bgkong1205@gmail.com"
                    readOnly
                  />
                </div>
              </fieldset>
              <fieldset className="mb-5">
                <div className="h4">
                  <p>姓</p>
                </div>
                <div class="input-group">
                  <input type="text" class="form-control" 
                  value="康" 
                  readOnly
                  />
                </div>
              </fieldset>
              <fieldset className="mb-5">
                <div className="h4">
                  <p>名</p>
                </div>
                <div class="input-group">
                  <input type="text" class="form-control" value="俊軒" 
                  readOnly
                  />
                </div>
              </fieldset>
              <fieldset className="mb-5">
                <div className="h4">
                  <p>手機號碼</p>
                </div>
                <div class="input-group">
                  <input type="text" class="form-control" 
                  value={this.state.usersContact.tel}
                  onChange={this.usersTelChange}                  
              />
                </div>
              </fieldset>

            </form>
            <button type="submit" className="btn btn-info"
             onClick={this.okButtonClick}>
              儲存修改</button>
          </div>
        </div>
        <div className="my-5"> </div>
      </React.Fragment>
    );
  }
}

export default MemberPage;
