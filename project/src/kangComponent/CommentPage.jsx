import React from "react";
import { Rating } from "@mui/material";
import axios from "axios";
import Navbar from "../components/repeatability/Navbar";
import "../css/commentpage.css"
import $ from "jquery"

var value = Math.floor(Math.random() * 5 + 1);
var value2 = Math.floor(Math.random() * 6);

class CommentPage extends React.Component {
  state = {
    restaurantcomment: [],
    // 下面這是給建立評論的
    restaurantInfo: [],
    CreateRestaurantcomment: {
      commentId: "",
      name: "水巷茶弄",
      costomerName: "",
      date: `${new Date().getFullYear()}/${new Date().getMonth() + 1 < 10 ? `0${new Date().getMonth() + 1}` : new Date().getMonth() + 1}/${new Date().getDate() < 10 ? `0${new Date().getDate()}` : new Date().getDate()}`,
      comment: "",
      rating: "",
      picture: "https://images.deliveryhero.io/image/fd-tw/LH/i4hy-hero.jpg?width=1600&height=400&quality=45",
    },
  };

  async componentDidMount() {
    var url = `http://localhost:8050/restaurantcomment/list/水巷茶弄`;
    // var url = `http://localhost:8000/restaurantcomment/list/${this.props.match.params.restaurant}`;
    // 假定跳轉到這家店，網址中的restaurant會再被上面這個props利用
    var result = await axios.get(url);
    this.setState({ restaurantcomment: result.data });
    // this.state.restaurantcomment = result.data;
    // this.setState({});

<<<<<<< HEAD
    // 拿水巷茶弄的資料  先放著 沒用到
    try {
      await axios.get("http://localhost:8000/todo/list");
      this.setState({ restaurantInfo: result.data });
    }
    catch (error) {
      alert("GET Error!!");
    }
=======
// 拿水巷茶弄的資料  先放著 沒用到
    try {await axios.get("http://localhost:8050/todo/list");
    this.setState({ restaurantInfo: result.data });}
    catch (error) 
    {
        alert("GET Error!!");    
    } 
    
>>>>>>> origin/resetMerge_kang0720




    // 如果要綁定群籍資料愈這個方式，沒意外的話這樣透過前一頁的東西才有辦法建立
    // var url = `http://localhost:8000/restaurantcomment/list/${this.props.match.params.id}`;
    // // 我明明就沒設這個id，但用我資料庫定的menuItemId反而抓不到
    // var result = await axios.get(url);
    // // console.log(result);
    // // console.log(url);
    // this.state.todoItem = result.data;
    // this.setState({});
  }

  // 添加評論
  yesBtn = async () => {
    await axios.post(
      `http://localhost:8050/restaurantcomment/create`,
      this.state.CreateRestaurantcomment
    );
    window.location.reload();
  };
  todoItemCommentChange = async (e) => {
    var newState = { ...this.state };
    newState.CreateRestaurantcomment.comment = e.target.value;
    this.setState(newState);
  };
  todoItemRestaurantChange = async (e) => {
    var newState = { ...this.state };
    newState.CreateRestaurantcomment.name = e.target.value;
    // newState.CreateRestaurantcomment.name = $("#restaurant").text();

    this.setState(newState);
    console.log(e.target.value)
  };
  todoItemCostomerNameChange = async (e) => {
    var newState = { ...this.state };
    newState.CreateRestaurantcomment.costomerName = e.target.value;
    this.setState(newState);
  };
  todoItemRatingChange = async (e) => {
    var newState = { ...this.state };
    newState.CreateRestaurantcomment.rating = e.target.value;
    this.setState(newState);
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div>
          <div
            style={{
              // height: "400px",
              height: '55vh',
              backgroundImage: "url('https://images.deliveryhero.io/image/fd-tw/LH/i4hy-hero.jpg')",
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat, repeat',
              backgroundSize: '100%'
            }}></div>
          <div className="container d-flex justify-content-center ">

            <div className="card text-center w-75  "
              style={{ marginTop: "200px", height: "250px" }}>
              <div className="card-body">
                <h5 className="card-title h4" id="restName">水巷茶弄</h5>
                <p className="card-text">
                  本店位於台中市區，專賣新鮮水果茶飲，及手做珍珠奶茶。不添加人工香料及香精。
                </p>
              </div>
              <div
                className="text-center border-top py-3"
                style={{ background: "whitesmoke" }}
              >
                <Rating name="read-only" value={value} readOnly size="large" />
                <div>
                  {value}
                  {/* {this.state.restaurantcomment.map(rating =>rating.num).reduce((a , value) => a +value ,0)} */}
                  <i className="fa fa-star" style={{ color: "gold" }}></i>&nbsp;/
                  &nbsp;5
                </div>
              </div>
            </div>
          </div>

          <div className="container  sendcomment-section" >
            <br />
            <div>
              <div className="row">
                {/* name */}

                <div className="col-8">
                  <label htmlFor="exampleFormControlTextarea1">暱稱</label>

                  <input
                    type="text"
                    className="form-control mb-4"
                    id="costomerName	"
                    value={this.state.CreateRestaurantcomment.costomerName}
                    onChange={this.todoItemCostomerNameChange}
                  ></input>
                </div>
                <div
                // className="col-4 d-flex align-items-center justify-content-center"
                >
                  <Rating
                    name="simple-controlled"
                    size="large"
                    value={this.state.CreateRestaurantcomment.rating}
                    onChange={this.todoItemRatingChange}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="exampleFormControlTextarea1">
                    請輸入您的評論
                  </label>
                  <textarea
                    type="textArea"
                    className="form-control mb-4"
                    id="comment"
                    value={this.state.CreateRestaurantcomment.comment}
                    onChange={this.todoItemCommentChange}
                  ></textarea>

                  <input
                    type="hidden"
                    className="form-control mb-4"
                    id="restaurant"
                    // value={this.state.CreateRestaurantcomment.小草食堂平價日式小吃}
                    // defaultValue="小草食堂平價日式小吃"
                    defaultValue={this.state.CreateRestaurantcomment.name}
                  // defaultValue={$("#restName").text()}

                  //假定自動帶入的是這間店(依照點擊進入的餐廳)
                  // onChange={this.todoItemRestaurantChange}
                  // style={{ display: "none" }}

                  ></input>
                  {/* 自動帶入時間 */}
                  <input
                    type="hidden"
                    className="form-control mb-4"
                    id="date"
                    // defaultValue={`${new Date().getFullYear()}/${new Date().getMonth()+1 <10 ? `0${new Date().getMonth()+1}` : new Date().getMonth()+1}/${new Date().getDate() <10 ? `0${new Date().getDate()}` : new Date().getDate()}`}

                    defaultValue={this.state.CreateRestaurantcomment.date}
                  // onChange={this.todoItemRestaurantChange}
                  ></input>
                  {/*  */}
                </div>
                <div className="form-group mx-auto ">
                  <input
                    type="submit"
                    value="提交評論"
                    className="btn btn-outline-primary btn-lg mr-3 btn-block "
                    onClick={this.yesBtn}
                  />
                </div>
              </div>
              <div className="form-group"></div>
            </div>
          </div>
          {/* 是否要做成活的 **條評論 */}
          <div className="h2 text-center mt-4">評論</div>

          <div className="d-flex justify-content-center">
            <ul className="list-group list-group-flush w-50">
              {this.state.restaurantcomment
                .slice(0)
                .reverse()
                .map((item, index) => {
                  // 實現倒序
                  return (
                    <li className="list-group-item" key={index}>
                      {/* <div className="container"> */}
                      <div className="row">
                        <div className="col-10" style={{ fontWeight: "600" }}>
                          {item.costomerName}
                          <div>  {item.date}  </div>
                        </div>


                        <div className="col-2 text-nowrap">
                          <Rating
                            name="read-only"
                            value={item.rating}
                            readOnly
                            size="small"
                          />
                        </div>
                      </div>

                      <div className="row mt-4 mb-3">
                        <div className="col-11">{item.comment}</div>
                      </div>
                      {/* </div> */}
                    </li>
                  );
                })}
            </ul>

          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CommentPage;
