import Axios from "axios";
import React from "react";
import { toast } from "react-toastify";
// import ImgurToPhp from "./Imgurtophp";

class ToDoCreate extends React.Component {
  state = {
    todoItem: {
      dish: "",
      introduce: "",
      picture: "",
      cost: "",
      restaurantName:"水巷茶弄(台中朝富店)",
    },
  };
  // async componentDidMount(){
  //     var url = `http://localhost:8000/todo/item/`;
  //     var result = await Axios.get(url);
  //     // console.log(result);
  // }

  yesBtn = async () => {
    await Axios.post(`http://localhost:8050/todo/create/`, this.state.todoItem);
    window.location = "/TodoIndex";
    toast.success("建立品項成功");
  };
  todoItemTitleChange = async (e) => {
    var newState = { ...this.state };
    newState.todoItem.dish = e.target.value;
    this.setState(newState);
  };
  todoItemDescriptionChange = async (e) => {
    var newState = { ...this.state };
    newState.todoItem.introduce = e.target.value;
    this.setState(newState);
  };
  todoItemCostChange = async (e) => {
    var newState = { ...this.state };
    newState.todoItem.cost = e.target.value;
    this.setState(newState);
  };
  todoItemPicture1Change = async (e) => {
    var newState = { ...this.state };
    newState.todoItem.picture = e.target.value;
    this.setState(newState);
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
            <h1 className="h1 my-4">新增品項</h1>
            <div className="p-5" style={{ backgroundColor: "white" }}>
              <div className="form-group">
                <label htmlFor="itemName" className="h4">
                  品項名稱
                </label>
                <textarea
                  className="form-control mb-4"
                  id="itemName"
                  style={{ backgroundColor: "whitesmoke" }}
                  rows="2"
                  value={this.state.todoItem.dish}
                  onChange={this.todoItemTitleChange}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="itemDescribe" className="h4 ">
                  品項敘述
                </label>
                <textarea
                  className="form-control mb-4"
                  id="itemDescribe"
                  style={{ backgroundColor: "whitesmoke" }}
                  rows="5"
                  value={this.state.todoItem.introduce}
                  onChange={this.todoItemDescriptionChange}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="itemPrice" className="h4">
                  售價
                </label>
                <input
                  type="text"
                  className="form-control mb-4"
                  id="itemPrice"
                  style={{ backgroundColor: "whitesmoke" }}
                  value={this.state.todoItem.cost}
                  onChange={this.todoItemCostChange}
                ></input>
              </div>
              <div className="form-group">
            <label htmlFor="itemPicture" className="h4">
              重新上傳圖片(請輸入網址)
            </label><br />
            <img
              style={{width:"850px"}}
              src={this.state.todoItem.picture}
              alt={this.state.todoItem.Name}
            ></img>
            <br /><br />
            <input
              type="text"
              className="form-control mb-4"
              id="itemPrice"
              style={{width:"850px",backgroundColor: "whitesmoke"}}
              placeholder="重新上傳請輸入網址"
              onChange={this.todoItemPicture1Change}
            ></input>
<br /><br /><br /><br /><h3>這邊是之後看看能不能直接上傳圖片而非網址進資料庫方式</h3> 

{/* <ImgurToPhp/> */}
            <input
              type="file"
              className="form-control-file mb-4 justify-content-end"
              id="itemPicture"
              placeholder="重新選擇圖片"
              // value={this.state.todoItem.Picture1}這句會壞
              // onChange={this.todoItemTitleChange}
            ></input>






            <input
              type="text"
              className="form-control mb-4"
              style={{display:"none"}}
              id="restaurantName"
              value={this.state.todoItem.restaurantName}

            ></input>
          </div>

              <div className="form-group float-right ">
                <input
                  type="submit"
                  value="確定"
                  className="btn btn-outline-primary btn-lg mr-3"
                  onClick={this.yesBtn}
                />

                <a
                  href="/TodoIndex"
                  className="btn btn-outline-info mr-5 btn-lg ml-1"
                >
                  取消
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ToDoCreate;
