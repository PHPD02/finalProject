import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
class ToDoDelete extends React.Component {
  state = {
    todoItem: {},
  };
  async componentDidMount() {
    var url = `http://localhost:8050/todo/item/${this.props.match.params.id}`;
    var result = await axios.get(url);
    this.state.todoItem = result.data;
    this.setState({});
  }
  okDelete = async () => {
    await axios.delete(
      `http://localhost:8050/todo/delete/${this.state.todoItem.menuItemId}`
    );
    toast.success('刪除成功');
    window.location = "/TodoIndex";
  };

  render() {
    return (
<>
<div className="sidebar sidebar-hide-to-small sidebar-shrink sidebar-gestures">
          <div className="nano">
            <div className="nano-content">
              <ul>
                <li>
                  <a href="/admin/dashboard" className="sidebar-sub-toggle">
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
                  <a href="/todoIndex" style={{ color: "#03A9F5 " }}>
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
        <div className="container" style={{ width: "70rem" }}>
        <h1 className="h1 my-4">確認刪除</h1>
        <div className="p-5" style={{ backgroundColor: "white" }}>
          <div className="form-group">
            <label  className="h4">
              品項名稱
            </label>
            <div
              className="form-control mb-4"
            >{this.state.todoItem.dish}</div>
          </div>
          <div className="form-group">
            <label  className="h4 ">
              品項敘述
            </label>
            <div
              className="form-control mb-4"
            >{this.state.todoItem.introduce}</div>
          </div>
          <div className="form-group">
            <label  className="h4">
              售價
            </label>
            <idiv
              type="text"
              className="form-control mb-4"
            >{this.state.todoItem.cost}</idiv>
          </div>
          <div className="form-group">
          <label htmlFor="itemPicture" className="h4">
              架上圖片
            </label><br />
            <img
              style={{width:"850px"}}
              src={this.state.todoItem.picture}
              alt={this.state.todoItem.Name}
            ></img>
          </div>
          <hr style={{marginTop:'60px'}}/>
          <h3 className="text-center h4 my-4">確定要刪除這筆資料嗎?</h3>
          <div className="form-group text-center">

          <input type="hidden" id="TodoItemId" name="TodoItemId" value="1" />
          <input
            type="submit"
            onClick={this.okDelete}
            value="確定"
            className="btn btn-outline-danger btn-lg mr-3"
          />
        
          <a href="/TodoIndex" className="btn btn-outline-info btn-lg ml-1">
            取消
          </a>
          </div>
        </div>
      </div>
      </div>



      </>








      //   <div className="container">
      //     <h1>待辦事項清單 - 刪除</h1>

      //     <hr />
      //     <div>
      //       <dl className="row">
      //         <dt className="col-sm-2">項目名稱</dt>
      //         <dd className="col-sm-10">{this.state.todoItem.title}</dd>
      //         <dt className="col-sm-2">是否已完工</dt>
      //         <dd className="col-sm-10">
      //           <input
      //             className="check-box"
      //             disabled="disabled"
      //             type="checkbox"
      //             checked={this.state.todoItem.isComplete}
      //           />
      //         </dd>
      //       </dl>
      //       <hr />
      //       <h3>確定要刪除這筆資料嗎?</h3>
      //       <input type="hidden" id="TodoItemId" name="TodoItemId" value="1" />
      //       <input
      //         type="submit"
      //         onClick={this.okDelete}
      //         value="確定"
      //         className="btn btn-outline-danger"
      //       />
      //       |
      //       <a href="/TodoIndex" className="btn btn-outline-info">
      //         取消
      //       </a>
      //     </div>
      //   </div>11111
    );
  }
}
export default ToDoDelete;
