import React from "react";
import SearchBar from "./searchbar";
import Restaurants from "./restaurants";
import Caroursel from "./Caroursel";
import "bootstrap/dist/css/bootstrap.min.css";

class FoodpandaPage extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="d-flex justify-content-end mt-2">
          <button
            type="button"
            className="btn btn-outline-light text-dark mr-4"
          >
            購物車
          </button>
          <button type="button" className="btn btn-outline-light text-dark">
            登入 / 註冊
          </button>
        </div>

        <Caroursel />
        <h1>Foodpanda Page</h1>

        {/* 搜尋bar部分 */}
        <div style={{ margin: "50px 0 70px 0" }}>
          <SearchBar />
        </div>
        <h2>
          優惠主打星<i className="fa fa-star" style={{ color: "gold" }}></i>
        </h2>
        <div
          style={{ margin: "20px 0 20px 0" }}
          className="category-lane"
        ></div>

        <Restaurants />
      </React.Fragment>
    );
  }
}

export default FoodpandaPage;
