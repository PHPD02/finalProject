import React from "react";
import { Rating } from "@mui/material";
import axios from "axios";
import "../css/commentpage.css"

var value = Math.floor(Math.random() * 6);
var value2 = Math.floor(Math.random() * 6);

class CommentPage extends React.Component {
  state = {
    restaurantcomment: [],
    // 下面這是給建立評論的
    CreateRestaurantcomment: {
      commentId: "",
      restaurant: "",
      costomerName: "",
      date: "",
      comment: "",
      rating: "",
    },
  };

  async componentDidMount() {
    var url = `http://localhost:8000/restaurantcomment/list/小草食堂平價日式小吃`;
    // var url = `http://localhost:8000/restaurantcomment/list/${this.props.match.params.restaurant}`;
    // 假定跳轉到這家店，網址中的restaurant會再被上面這個props利用
    var result = await axios.get(url);
    this.setState({ restaurantcomment: result.data });
    // this.state.restaurantcomment = result.data;
    // this.setState({});
  }

  // 添加評論
  yesBtn = async () => {
    await axios.post(
      `http://localhost:8000/restaurantcomment/create`,
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
    newState.CreateRestaurantcomment.restaurant = e.target.value;
    this.setState(newState);
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
      <div>
        <div className="container d-flex justify-content-center mt-5 ">
          <div className="card text-center w-75  ">
            <div className="card-body">
              <h5 className="card-title h4">小草食堂平價日式小吃</h5>
              <p className="card-text">
                這是一段description這是一段description這是一段description這是一段description這是一段description
              </p>
            </div>
            <div
              className="text-center border-top py-3"
              style={{ background: "whitesmoke" }}
            >
              <Rating name="read-only" value={value} readOnly size="large" />
              <div>
                {value}
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
              <div className="col-4 d-flex align-items-center justify-content-center">
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
                  type="text"
                  className="form-control mb-4"
                  id="restaurant"
                  // value={this.state.CreateRestaurantcomment.小草食堂平價日式小吃}
                  value={this.state.CreateRestaurantcomment.restaurant}
                  //假定自動帶入的是這間店(依照點擊進入的餐廳)
                  onChange={this.todoItemRestaurantChange}
                  // style={{ display: "none" }}
                ></input>
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
                      <div className="container">
                        <div className="row">
                          <div className="col-10">
                            {item.costomerName} <br />
                            {item.date}
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
                      </div>
                    </li>
                  );
                })}
            </ul>

        </div>
      </div>
    );
  }
}

export default CommentPage;
