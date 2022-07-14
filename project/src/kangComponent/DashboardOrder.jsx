import React from "react";
import "../css/DashboardProduct.css";
import axios from "./axios";
import "./assets/css/lib/font-awesome.min.css";
import "./assets/css/lib/themify-icons.css";
import "./assets/css/lib/menubar/sidebar.css";
import "./assets/css/style.css";

class Dashboardorder extends React.Component {
  state = {
    dashboardorder: [],
  };

  async componentDidMount() {
    var result = await axios.get("http://localhost:8000/dashboardorder");
    this.setState({ dashboardorder: result.data });
  }

  render() {
    return (
      <div>
        <div className="sidebar sidebar-hide-to-small sidebar-shrink sidebar-gestures">
          <div className="nano">
            <div className="nano-content">
              <ul>
                <li>
                  <a className="sidebar-sub-toggle">
                    <i className="ti-bar-chart-alt"></i> 儀錶板
                    <span className="sidebar-collapse-icon ti-angle-down"></span>
                  </a>
                  {/* <ul>
                    <li>
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">4</a>
                    </li>
                    <li>
                      <a href="#">5</a>
                    </li>
                    <li>
                      <a href="#">6</a>
                    </li>
                    <li>
                      <a href="#">7</a>
                    </li>
                  </ul> */}
                </li>
                <li>
                  <a href="/admin/dashboard">
                    <i className="ti-calendar"></i> 主頁
                  </a>
                </li>
                <li>
                  <a href="/TodoIndex">
                    <i className="ti-email"></i> 菜單管理
                  </a>
                </li>
                <li>
                  <a
                    href="/admin/dashboard/Dashboardorder"
                    style={{ color: "#03A9F5 " }}
                  >
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
              <div className="card my-4 ">
                <div className="card-header h4">月營收狀態</div>
                <div className="card-body">
                  <div className="d-flex">
                    <div className="form-group">
                      <label for="year" className="mx-2">
                        年份
                      </label>
                      <select name="" id="year" className="form-control">
                        <option value="">2021</option>
                        <option value="">2022</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label for="month" className="mx-2">
                        月份
                      </label>
                      <select name="" id="month" className="form-control ml-2">
                        <option value="">一月</option>
                        <option value="">二月</option>
                        <option value="">三月</option>
                        <option value="">四月</option>
                        <option value="">五月</option>
                        <option value="">六月</option>
                        <option value="">七月</option>
                        <option value="">八月</option>
                        <option value="">九月</option>
                        <option value="">十月</option>
                        <option value="">十一月</option>
                        <option value="">十二月</option>
                      </select>
                    </div>
                    <div className="ml-auto mt-2 p-2">
                      <a href="#" className="btn btn-outline-secondary btn-lg">
                        下載報表
                      </a>
                      <a
                        href="#"
                        className="btn btn-outline-secondary btn-lg ml-2"
                      >
                        管理訂單
                      </a>
                    </div>
                  </div>
                </div>
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>日期</th>
                      <th>下單數</th>
                      <th>運費</th>
                      <th>出貨日期</th>
                      <th>訂單金額</th>
                      <th>訂單利潤</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.dashboardorder.map((item, index)=>{
                      return (
                        <tr key={index}>
                        <th>{item.id}</th>
                        <td>{item.setDate}</td>
                        <td>{item.count}|{item.proposalId}</td>
                        <td>{item.count*item.freight}</td>
                        <td>2022/05/26</td>
                        <td className="text-right">200</td>
                        <td className="text-right">100</td>
                      </tr>
  
                      )
                    })}

                    <tr>
                      <th>1</th>
                      <td>2022/05/17</td>
                      <td>1(原味1，巧克力0)</td>
                      <td>150</td>
                      <td>2022/05/26</td>
                      <td className="text-right">200</td>
                      <td className="text-right">100</td>
                    </tr>
                    <tr>
                      <th>2</th>
                      <td>2022/05/18</td>
                      <td>9(原味1，巧克力8)</td>
                      <td>自取</td>
                      <td>2022/05/26</td>
                      <td className="text-right">300</td>
                      <td className="text-right">200</td>
                    </tr>
                    <tr>
                      <th>3</th>
                      <td>2022/05/20</td>
                      <td>33(原味30，巧克力3)</td>
                      <td>自取</td>
                      <td>2022/05/26</td>
                      <td className="text-right">400</td>
                      <td className="text-right">300</td>
                    </tr>
                    <tr>
                      <th>4</th>
                      <td>2022/05/22</td>
                      <td>10(原味8，巧克力2)</td>
                      <td>150</td>
                      <td>2022/05/26</td>
                      <td className="text-right">500</td>
                      <td className="text-right">400</td>
                    </tr>
                    <tr>
                      <th>5</th>
                      <td>2022/05/23</td>
                      <td>3(原味1，巧克力2)</td>
                      <td>自取</td>
                      <td>2022/05/26</td>
                      <td className="text-right">600</td>
                      <td className="text-right">500</td>
                    </tr>
                    <tr>
                      <th>6</th>
                      <td>2022/05/24</td>
                      <td>16(原味8，巧克力8)</td>
                      <td>150</td>
                      <td>2022/05/26</td>
                      <td className="text-right">600</td>
                      <td className="text-right">500</td>
                    </tr>
                    <tr>
                      <th>7</th>
                      <td>2022/05/26</td>
                      <td>6(原味1，巧克力5)</td>
                      <td>150</td>
                      <td>2022/05/26</td>
                      <td className="text-right">700</td>
                      <td className="text-right">600</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th colspan="6" className="text-right">
                        月總營收
                      </th>
                      <td className="text-right">20,000</td>
                    </tr>
                    <tr>
                      <th colspan="6" className="text-right">
                        月淨利潤
                      </th>
                      <td className="text-right">15,00</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      // ------------------------
    );
  }
}

export default Dashboardorder;
