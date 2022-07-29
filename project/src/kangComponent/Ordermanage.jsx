import React from "react";
import "../css/DashboardProduct.css";
import axios from "./axios";
import "./assets/css/lib/font-awesome.min.css";
import "./assets/css/lib/themify-icons.css";
import "./assets/css/lib/menubar/sidebar.css";
import "./assets/css/style.css";

import ExportExcelButton from "./ExportExcel_component"  //失敗
import ExcelJs from "exceljs";


class Ordermanage extends React.Component {
  state = {
    dashboardorder: [],
    monthrevenue: "",

    downloadData: [{
      sheetName: '',
      thead: [],
      tbody: [],
      columnWidths: []
    }],
    data: {

    },
    downloadData_thead: {
      id: "訂單編號",
      date: "訂單日期",
      dish: "品項名稱",
      amount: "下單數目",
      cost: "消費金額",
      totalCost: "",
    },
    downloadData_tbody: {
      id: [],
      date: [],
      dish: [],
      amount: [],
      cost: [],
    }
    // data: [],
  };
  data = {
    id: [],
    date: [],
    dish: [],
    amount: [],
    cost: [],
  }

  async componentDidMount() {
    console.clear();
    var result = await axios.get("http://localhost:8050/dashboardorder");
    this.setState({ dashboardorder: result.data });
    const resultdata = result.data
    const monthrevenue = resultdata.map(dashboardorder => dashboardorder.cost * dashboardorder.amount).reduce((a, value) => a + value, 0)
    //       累加器   當前值            初始值
    this.setState({ monthrevenue: monthrevenue })


    // excel部分 試試
    console.log(resultdata);
    const gg = resultdata.map((item, index) => {
      let date = new Date(item.orderId * 1000);
      //   console.log()
      let ymd = date.toLocaleDateString();
      return (
        [
          item.orderId.toString(),
          ymd,
          item.dish,
          item.amount.toString(),
          item.cost.toString(),
          // (item.amount * item.cost).toString()
        ]
      )
    })
    console.log(gg)


    // this.data = {
    //   id: [],
    //   date: [],
    //   dish: [],
    //   amount: [],
    //   cost: [],
    // }
    // resultdata.map((item, index) => {
    //   this.data.id.push(item.orderId.toString());
    //   this.data.date.push(new Date(item.orderId * 1000).toLocaleDateString())
    //   this.data.dish.push(item.dish)
    //   this.data.amount.push(item.amount.toString())
    //   this.data.cost.push(item.cost.toString())
    // })
    // console.log(this.data);

    // for (i = 0; i < this.data.id.length; i++) {
    //   this.state.tbody[i].push(this.data.id[i]);
    //   this.state.tbody[i].push(this.data.date[i]);
    //   this.state.tbody[i].push(this.data.dish[i]);
    //   this.state.tbody[i].push(this.data.id[i]);
    //   this.state.tbody[i].push(this.data.id[i]);
    // }
    // var obj = Object.keys(resultdata).map(function (_) { return jsonObj[_]; });
    const downloadData = [{
      sheetName: `水巷茶弄月收支報表`,
      // thead: ['訂單編號', '訂單日期', '品項名稱', '下單數目', '消費金額', '訂單利潤'],
      thead: ['訂單編號', '訂單日期', '品項名稱', '下單數目', '消費金額'],
      tbody: resultdata,
      // columnWidths: [{ number: 1, width: 20 }, { number: 2, width: 20 }, { number: 3, width: 30 }, { number: 4, width: 20 }, { number: 5, width: 20 }, { number: 6, width: 30 }]
      columnWidths: [{ number: 1, width: 20 }, { number: 2, width: 20 }, { number: 3, width: 30 }, { number: 4, width: 20 }, { number: 5, width: 20 }]
    }];
    await this.setState({ downloadData: downloadData })
  }

  toCurrency(num) {
    var parts = num.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }


  excelChkboxSel = (e) => {
    console.clear();

    if (e.target.checked) {
      switch (e.target.value) {
        case 'date':
          this.state.downloadData_thead.date = "訂單日期";
          break;
        case 'dish':
          this.state.downloadData_thead.dish = "品項名稱";
          break;
        case 'amount':
          this.state.downloadData_thead.amount = "下單數目";
          break;
        case 'cost':
          this.state.downloadData_thead.cost = "單筆金額";
          break;
      }
    } else {
      switch (e.target.value) {
        case 'date':
          this.state.downloadData_thead.date = "";
          break;
        case 'dish':
          this.state.downloadData_thead.dish = "";
          break;
        case 'amount':
          this.state.downloadData_thead.amount = "";
          break;
        case 'cost':
          this.state.downloadData_thead.cost = "";
          break;
      }
    }
    console.log(this.state.downloadData_thead)
  }








  render() {
    return (
      <div>
        <div className="sidebar sidebar-hide-to-small sidebar-shrink sidebar-gestures">
          <div className="nano">
            <div className="nano-content">
              <ul>
                <li>
                  <a href="/admin/dashboard" className="sidebar-sub-toggle">
                    <i className="ti-bar-chart-alt"></i> 儀錶板
                    <span className="sidebar-collapse-icon ti-angle-down"></span>
                  </a>
                </li>
                <li>
                  <a href="/TodoIndex" >
                    <i className="ti-email"></i> 菜單管理
                  </a>
                </li>
                <li>
                  <a href="/ordermanage" style={{ color: "#03A9F5 " }}>
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
                      <select name="" id="year" className="form-control" style={{ backgroundColor: "whitesmoke" }}>
                        <option value="2021">2021</option>
                        <option value="2022" selected>2022</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label for="month" className="mx-2">
                        月份
                      </label>
                      <select name="" id="month" className="form-control ml-2" style={{ backgroundColor: "whitesmoke" }} >
                        <option value="一月">一月</option>
                        <option value="二月">二月</option>
                        <option value="三月">三月</option>
                        <option value="四月">四月</option>
                        <option value="五月">五月</option>
                        <option value="六月">六月</option>
                        <option value="七月" selected>七月</option>
                        <option value="八月">八月</option>
                        <option value="九月">九月</option>
                        <option value="十月">十月</option>
                        <option value="十一月">十一月</option>
                        <option value="十二月">十二月</option>
                      </select>
                    </div>
                    <div className="ml-auto mt-2 p-2">

                    </div>
                    <div className="ml-auto mt-2 p-2 d-flex">
                      <span className="dropdown show">
                        <button class="btn btn-outline-secondary btn-lg ml-2 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" > <b>下載報表</b></button>
                        <div className="dropdown-menu p-2">

                          <input type="checkbox" id="excelPost1" value="date" onChange={this.excelChkboxSel} defaultChecked /> <label htmlFor="excelPost1">日期</label> <br />
                          <input type="checkbox" id="excelPost2" value="dish" onChange={this.excelChkboxSel} defaultChecked /> <label htmlFor="excelPost2">品項名稱</label> <br />
                          <input type="checkbox" id="excelPost3" value="amount" onChange={this.excelChkboxSel} defaultChecked /> <label htmlFor="excelPost3">下單數</label> <br />
                          <input type="checkbox" id="excelPost4" value="cost" onChange={this.excelChkboxSel} defaultChecked /> <label htmlFor="excelPost4">消費金額</label> <br />
                          <input type="checkbox" id="excelPost5" value="eee" onChange={this.excelChkboxSel} defaultChecked /> <label htmlFor="excelPost5">訂單利潤</label> <br />
                          <hr />
                          <ExportExcelButton
                            fileName={'月訂單報表'}
                            sheetDatas={this.state.downloadData}
                          />
                        </div>
                      </span>

                      <span><a href="#" className="btn btn-outline-secondary btn-lg ml-2"> 管理訂單 </a></span>
                    </div>
                  </div>
                </div>
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>日期</th>
                      <th>品項名稱</th>
                      <th>數量</th>
                      <th>消費金額</th>
                      <th>訂單利潤</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.dashboardorder.map((item, index) => {
                      let date = new Date(item.orderId * 1000);
                      //   console.log()
                      let ymd = date.toLocaleDateString();
                      return (
                        <tr key={index}>
                          <th>{item.orderId}</th>
                          <td>{ymd}</td>
                          <td>{item.dish}</td>
                          <td>{item.amount}</td>
                          <td className="text-right">{item.amount * item.cost}</td>
                          <td className="text-right">{item.amount * item.cost * 0.75}</td>
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
                      <td className="text-right">{this.toCurrency(Math.round(this.state.monthrevenue * 0.75))}</td>
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

export default Ordermanage;