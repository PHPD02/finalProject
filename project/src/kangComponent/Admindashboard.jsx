import React, { Component } from "react";
import D3 from "./chart/D3chart.jsx";
import { Piechart } from "./chart/Pie_chartjs.jsx";
import { Barchart } from "./chart/Barchart.jsx";
import { Linechart } from "./chart/Linechart.jsx";

// import Piechartjs from "./chart/Pie_chartjs.jsx";

import "https://cdn.jsdelivr.net/npm/chart.js";

// import $ from "jquery";

// $(document).onload(function () {

//     var cho = [2000, 2500, 2400, 0600, 5900, 1400, 1200, 1100, 1500, 1600, 3200, 1200];
//     var ori = [5900, 1400, 1200, 1001, 1005, 1006, 3200, 1002, 2000, 2500, 2400, 0600];

//     var month = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];

//     var ctx = document.getElementById("chartCanvas");
//     var flavorChart = new Chart(ctx, {
//         type: "bar",
//         data: {
//             labels: month,
//             datasets: [
//                 {
//                     label: "2022營業額",
//                     data: cho,
//                     backgroundColor: "rgba(255,99,132,0.2)",
//                     borderColor: "rgba(255,99,132,1.0)",
//                     borderWidth: 1,
//                     fontSize: 20,

//                 },

//             ]
//         }
//     })
// })

// $(document).onload(function () {

//     var 品項銷售額 = [3800, 2570, 2374, 2106];
//     var 品項名稱 = ["原味", "巧克力", "檸檬", "焦糖"];

//     var month = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];

//     var ctx = document.getElementById("chartCanvasCircle");
//     var pieChart = new Chart(ctx, {
//         type: "pie",
//         data: {
//             labels: 品項名稱,
//             datasets: [
//                 {
//                     data: 品項銷售額,
//                     backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9"]
//                 }
//             ]
//         },
//         options: {
//             title: {
//                 display: true,
//                 text: 'Population'
//             }
//         }
//     })

// })

class Admindashboard extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="sidebar sidebar-hide-to-small sidebar-shrink sidebar-gestures">
          <div className="nano">
            <div className="nano-content">
              <ul>
                <li>
                  <a
                    href="/admin/dashboard"
                    className="sidebar-sub-toggle"
                    style={{ color: "#03A9F5 " }}
                  >
                    <i className="ti-bar-chart-alt"></i> 儀錶板
                    <span className="sidebar-collapse-icon ti-angle-down"></span>
                  </a>
                </li>

                <li>
                  <a href="/todoIndex">
                    <i className="ti-email"></i> 菜單管理
                  </a>
                </li>
                <li>
                  <a href="/ordermanage">
                    <i className="ti-user"></i> 訂單紀錄
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="header ">
          <div className="pull-left">
            <div className="logo">
              <a href="index.html">
                <span>店家後臺管理</span>
              </a>
            </div>
          </div>
          <div className="pull-right p-r-15">
            <ul>
              <li className="header-icon dib">
                <a href="#">
                  <i className="ti-search"></i>
                </a>
              </li>
              <li className="header-icon dib">
                <i className="ti-bell"></i>
                <div className="drop-down">
                  <div className="dropdown-content-heading">
                    <span className="text-left">通知</span>
                  </div>
                </div>
              </li>
              <li className="header-icon dib">
                <i className="ti-email"></i>
              </li>
              <li className="header-icon dib">
                <img
                  className="avatar-img"
                  src="assets/images/avatar/1.jpg"
                  alt=""
                />
                <span className="user-avatar">
                  康大哥 <i className="ti-angle-down f-s-10"></i>
                </span>
                <div className="drop-down dropdown-profile">
                  <div className="dropdown-content-heading">
                    <span className="text-left"> 簽約成特約店家</span>
                    <p className="trial-day">抽成數可減至0</p>
                  </div>
                  <div className="dropdown-content-body">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="ti-user"></i> <span>店家資訊</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-wallet"></i> <span>店家收益</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-write"></i> <span>重要通知</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-settings"></i> <span>設定</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-help-alt"></i> <span>聯絡官方</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-power-off"></i> <span>登出</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="content-wrap mt-5 pt-3">
          <div className="main">
            <div className="container-fluid">
              <div class="row mb-4 mt-4">
                <div class="col-lg-3 col-6 mb-2">
                  <div class="card h-100 shadow">
                    <div class="card-body d-flex align-items-center">
                      <div class="fa fa-money fa-4x text-secondary  d-none d-md-block"></div>
                      <div class="text-center w-100">
                        <div class="h4 text-nowrap"><span className="font-weight-bold">今日</span>營業額</div>
                        <div class="h2 font-weight-bold">26,582</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-6 mb-2">
                  <div class="card h-100 shadow">
                    <div class="card-body d-flex align-items-center">
                      <div class="fa fa-shopping-cart fa-4x text-secondary  d-none d-md-block"></div>
                      <div class="text-center w-100">
                        <div class="h4 text-nowrap"><span className="font-weight-bold">昨日</span>營業額</div>
                        <div class="h2 ">19,216</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-6 mb-2">
                  <div class="card h-100 shadow">
                    <div class="card-body d-flex align-items-center">
                      <div class="fa fa-user fa-4x text-secondary  d-none d-md-block"></div>
                      <div class="text-center w-100">
                        <div class="h4 text-nowrap">今日下單數</div>
                        <div class="h2 ">153</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-6 mb-2">
                  <div class="card h-100 shadow">
                    <div class="card-body d-flex align-items-center">
                      <div class="fa fa-dollar fa-4x text-secondary  d-none d-md-block"></div>
                      <div class="text-center w-100">
                        <div class="h4 text-nowrap"><span className="font-weight-bold">8月</span>營收</div>
                        <div class="h2 ">167,826</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* chart */}
              <div class="container-fluid ">
                <div class="row ">
                  <div class="col-lg-12 mb-4">
                    <div class="card h-100 shadow">
                      <div class="card-header  p-2 h4"><span className="font-weight-bold">八月 </span>日營收 </div>
                      <div class="card-body d-flex align-items-center">
                        <div class="row">
                          <div class="col-8 ">
                            <div>
                              <Barchart />
                            </div>
                          </div>
                          <div class="col-4">
                            <h3>八月營收小計(08/01-08/09)</h3>
                             <h2 className="text-center font-weight-bold">$167,826元</h2><br></br><br></br>
                            <p>
                              小規模營業人平均月營業額達8萬元以上未超過20萬元者，依規定免用統一發票，所謂「營業額20萬元」，係以六個月平均來計算，若僅有少數單月營業額超過20萬元水準，仍無須使用統一發票。
                            </p><br></br><br></br>
                            <b>可到訂單紀錄下載月度營銷報表</b>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-8 mb-5">
                    <div class="card h-100 shadow">
                      <div class="card-header  p-2 h4">近12個月營業額 </div>
                      <div class="card-body d-flex align-items-center">
                        <div class="row">
                          <div class="col-12 mb-4">
                            <div>
                              <Linechart />
                            </div>
                          </div>
                          <div class="col-12">
                            <h3>說明</h3>
                            <p>
                              <b>最高營收紀錄：</b> <b>2022/07</b>金額為<i> $672,105元</i><br/>
                              <b>最低營收紀錄：</b> <b>2022/01</b>金額為<i> $480,140元</i>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 mb-5">
                    <div class="card h-100 shadow">
                      <div class="card-header  p-2 h4">品項月銷量 </div>
                      <div class="card-body d-flex align-items-center">
                        
                        <div>
                          <Piechart />
                        </div>
                      </div>
                      <h3 className="text-center">店家TOP5品項</h3>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Admindashboard;
