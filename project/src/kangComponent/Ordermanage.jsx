import React from "react";
import "../css/DashboardProduct.css";
import axios from "./axios";
import "./assets/css/lib/font-awesome.min.css";
import "./assets/css/lib/themify-icons.css";
import "./assets/css/lib/menubar/sidebar.css";
import "./assets/css/style.css";
import $ from "jquery";


import ExportExcelButton from "./ExportExcel_component"  //失敗
import ExcelJs from "exceljs";


class Ordermanage extends React.Component {
  state = {
    dashboardorder: [],
    monthrevenue: "",

    downloadData: [{
      sheetName: '',
      thead: ['訂單編號', '訂單日期', '品項名稱', '數量', '消費金額', '訂單利潤'],
      tbody: [],
      columnWidths: []
    }],

    data: {

    },
    downloadData_thead: {
      id: "訂單編號",
      date: "訂單日期",
      dish: "品項名稱",
      amount: "數量",
      cost: "消費金額",
      profit: "訂單利潤"
    },
    downloadData_tbody: {
      id: [],
      date: [],
      dish: [],
      amount: [],
      cost: [],
      profit: []
    }
  };


  async componentDidMount() {
    // console.clear();
    var result = await axios.get("http://localhost:8050/dashboardorder");
    this.setState({ dashboardorder: result.data });
    const resultdata = result.data
    // console.log(resultdata);
    const monthrevenue = resultdata.map(dashboardorder => dashboardorder.cost * dashboardorder.amount).reduce((a, value) => a + value, 0)
    //       累加器   當前值            初始值
    this.setState({ monthrevenue: monthrevenue })


    /*  */
    this.state.downloadData_tbody.id = resultdata.map((item) => item.orderId.toString());
    this.state.downloadData_tbody.ymd = resultdata.map((item) => new Date(item.orderId * 1000).toLocaleDateString());
    this.state.downloadData_tbody.dish = resultdata.map((item) => item.dish);
    this.state.downloadData_tbody.amount = resultdata.map((item) => item.amount.toString());
    this.state.downloadData_tbody.cost = resultdata.map((item) => (item.amount * item.cost).toString());
    this.state.downloadData_tbody.profit = resultdata.map((item) => (Math.round(item.amount * item.cost * 0.75)).toString());


    /* excel */
    const gg = resultdata.map((item, index) => {
      let date = new Date(item.orderId * 1000);
      //   console.log()
      let ymd = date.toLocaleDateString();

      return (
        [item.orderId.toString(), ymd, item.dish, item.amount.toString(), item.cost.toString(), (item.amount * item.cost).toString()]
        // console.log([ymd,item.dish]),
        // this.setState({ tbody:this.gg})
        // console.log(this.setstate.tbody)
      )
    })
    console.log(gg)

    const downloadData = [{

      sheetName: `水巷茶弄月收支報表`,
      thead: ['訂單編號', '訂單日期', '品項名稱', '數量', '消費金額', '訂單利潤'],
      tbody: gg,
      columnWidths: [{ number: 1, width: 20 }, { number: 2, width: 20 }, { number: 3, width: 30 }, { number: 4, width: 20 }, { number: 5, width: 20 }, { number: 6, width: 30 }]
    }];

    // console.log(this.state)
    console.log(downloadData);
    await this.setState({ downloadData: downloadData })


  }

  toCurrency(num) {
    var parts = num.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }


  excelChkboxSel = (e) => {
    console.clear();

    // if (e.target.checked) {
    //   switch (e.target.value) {
    //     case 'date':
    //       console.log("date V");
    //       this.state.downloadData_thead.date = "訂單日期";


    //       break;
    //     case 'dish':
    //       console.log("dish V");
    //       this.state.downloadData_thead.dish = "品項名稱";
    //       break;
    //     case 'amount':
    //       this.state.downloadData_thead.amount = "數量";
    //       break;
    //     case 'cost':
    //       this.state.downloadData_thead.cost = "單筆金額";
    //       break;
    //   }
    // } else {
    //   switch (e.target.value) {
    //     case 'date':
    //       console.log("date X");
    //       this.state.downloadData_thead.date = "";
    //       // thead 刪掉訂單日期
    //       this.state.downloadData[0].thead = "訂單日期";
    //       break;
    //     case 'dish':
    //       console.log("disg X");
    //       this.state.downloadData_thead.dish = "";
    //       break;
    //     case 'amount':
    //       this.state.downloadData_thead.amount = "";
    //       break;
    //     case 'cost':
    //       this.state.downloadData_thead.cost = "";
    //       break;
    //   }
    // }

    // console.log(this.state.downloadData)
    // // console.log(this.state.downloadData_thead)
    // console.log(this.state.downloadData[0].thead)
    this.state.downloadData[0].thead = ['訂單編號'];
    // for()
    // console.log(this.state.downloadData[0]);
    for (let i = 0; i < this.state.downloadData[0].tbody.length; i++) {
      this.state.downloadData[0].tbody[i] = [this.state.downloadData_tbody.id[i]];
    }
    // console.log(this.state.downloadData[0]);
    console.log(this.state.downloadData[0].tbody);

    $("input[name='excelPost[]']").map((index, item) => {
      if (item.checked) {
        // console.log(item.value)
        switch (item.value) {
          case 'date':
            this.state.downloadData[0].thead.push('訂單日期')
            for (let i = 0; i < this.state.downloadData[0].tbody.length; i++) {
              this.state.downloadData[0].tbody[i].push(this.state.downloadData_tbody.ymd[i]);
            }
            break;
          case 'dish':
            this.state.downloadData[0].thead.push('品項名稱')
            for (let i = 0; i < this.state.downloadData[0].tbody.length; i++) {
              this.state.downloadData[0].tbody[i].push(this.state.downloadData_tbody.dish[i]);
            }
            break;
          case 'amount':
            this.state.downloadData[0].thead.push('數量')
            for (let i = 0; i < this.state.downloadData[0].tbody.length; i++) {
              this.state.downloadData[0].tbody[i].push(this.state.downloadData_tbody.amount[i]);
            }
            break;
          case 'cost':
            for (let i = 0; i < this.state.downloadData[0].tbody.length; i++) {
              this.state.downloadData[0].tbody[i].push(this.state.downloadData_tbody.cost[i]);
            }
            this.state.downloadData[0].thead.push('消費金額')

            break;
          case 'profit':
            this.state.downloadData[0].thead.push('訂單利潤')
            for (let i = 0; i < this.state.downloadData[0].tbody.length; i++) {
              this.state.downloadData[0].tbody[i].push(this.state.downloadData_tbody.profit[i]);
            }
            break;
        }
      }
    });
    console.log(this.state.downloadData[0].thead);
    this.setState({});
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
                          <input type="checkbox" id="excelPost1" name="excelPost[]" value="date" onChange={this.excelChkboxSel} defaultChecked /> <label htmlFor="excelPost1">日期</label> <br />
                          <input type="checkbox" id="excelPost2" name="excelPost[]" value="dish" onChange={this.excelChkboxSel} defaultChecked /> <label htmlFor="excelPost2">品項名稱</label> <br />
                          <input type="checkbox" id="excelPost3" name="excelPost[]" value="amount" onChange={this.excelChkboxSel} defaultChecked /> <label htmlFor="excelPost3">數量</label> <br />
                          <input type="checkbox" id="excelPost4" name="excelPost[]" value="cost" onChange={this.excelChkboxSel} defaultChecked /> <label htmlFor="excelPost4">消費金額</label> <br />
                          <input type="checkbox" id="excelPost5" name="excelPost[]" value="profit" onChange={this.excelChkboxSel} defaultChecked /> <label htmlFor="excelPost5">訂單利潤</label> <br />
                          <hr />
                          <ExportExcelButton
                            fileName={'月訂單報表'}
                            sheetDatas={this.state.downloadData}
                          />
                        </div>
                      </span>

                      {/* <span><a href="#" className="btn btn-outline-secondary btn-lg ml-2"> 管理訂單 </a></span> */}
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
                          <td className="text-right">{Math.round(item.amount * item.cost * 0.75)}</td>
                        </tr>

                      )
                    })}

                  </tbody>
                  <tfoot>
                    <tr>
                      <th colSpan="5" className="text-right">
                        月總營收
                      </th>
                      <td className="text-right">{this.toCurrency(this.state.monthrevenue)}</td>
                    </tr>
                    <tr>
                      <th colSpan="5" className="text-right">
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