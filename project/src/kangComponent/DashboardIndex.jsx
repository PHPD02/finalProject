import React from "react";
import "../css/DashboardProduct.css";
import axios from "./axios";
import "./assets/css/lib/font-awesome.min.css";
import "./assets/css/lib/themify-icons.css";
import "./assets/css/lib/menubar/sidebar.css";
import "./assets/css/style.css";


class DashboardIndex extends React.Component {
    state = {
        dashboardorder: [],
        // dd:[],
        // dd:(new Date(result.data[0].orderId*1000)).toLocaleDateString()}
        monthrevenue:"",
      };
      async componentDidMount() {
        var result = await axios.get("http://localhost:8000/dashboardorder");
        this.setState({ dashboardorder: result.data} );
        const resultdata = result.data 
        const monthrevenue = resultdata.map(dashboardorder =>dashboardorder.cost*dashboardorder.amount).reduce((a , value) => a +value ,0)
        //       累加器   當前值            初始值
        this.setState({ monthrevenue:monthrevenue})

          } 
        //    orderId =this.state.dashboardorder[0].orderId;
        //    ymd = new Date(this.orderId*1000);
        //    dd = this.ymd.toLocaleDateString();
        toCurrency(num){
            var parts = num.toString().split('.');
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            return parts.join('.');
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
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-calendar"></i> 主頁
                      </a>
                    </li>
                    <li>
                      <a href="/TodoIndex" >
                        <i className="ti-email"></i> 菜單管理
                      </a>
                    </li>
                    <li>
                      <a href="/DashboardIndex" style={{ color: "#03A9F5 " }}>
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
                      <th>品名</th>
                      <th>下單數</th>
                      <th>訂單金額</th>
                      <th>訂單利潤</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.dashboardorder.map((item, index)=>{
                      let date = new Date(item.orderId*1000);
                    //   console.log()
                      let ymd = date.toLocaleDateString();
                      return (
                        <tr key={index}>
                        <th>{item.orderId}</th>
                        <td>{ymd}</td>
                        <td>{item.dish}</td>
                        <td>{item.amount}</td>
                        <td className="text-right">{item.amount*item.cost}</td>
                        <td className="text-right">{item.amount*item.cost*0.75}</td>
                      </tr>
  
                      )
                    })}

                  </tbody>
                  <tfoot>
                    <tr>
                      <th colspan="5" className="text-right">
                        月總營收
                      </th>
                      <td className="text-right">{this.toCurrency(this.state.monthrevenue)}</td>
                    </tr>
                    <tr>
                      <th colspan="5" className="text-right">
                        月淨利潤
                      </th>
                      <td className="text-right">{this.toCurrency(Math.round(this.state.monthrevenue*0.75))}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>          
          </div>
          </div>
    
        );
    }
}
 
export default DashboardIndex;