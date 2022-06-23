import React from "react";
import SearchBar from "./searchbar";
import Restaurants from "./restaurants";
import Caroursel from "./Caroursel";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Container } from "react-bootstrap";
// import StoreSlideBar from "./StoreSlideBar";
import StoreSlideBar2 from "./StoreSlideBar2";
// import MultipleSearch from "./MultipleSearch";
// import MultipleSearch2 from "./MultipleSearch2";


class FoodpandaPage extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="d-flex justify-content-end mt-2 ">
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

        <h1>即刻享用新鮮餐點</h1>

        {/* 搜尋bar部分 */}
        <div style={{ margin: "30px 0 70px 0" }}>
          <SearchBar />
        </div>

        <h2 >
          優惠主打星<i className="fa fa-star ml-3" style={{ color: "gold" }}></i>
        </h2>
        <StoreSlideBar2 />
        <h2 className="mt-5">
          附近美食<i className="fa fa-cutlery ml-3" style={{ color: "grey" }}></i>
        </h2>
        <StoreSlideBar2 />
        <h2 className="mt-5">
          中式餐廳<i className="fa fa-lemon ml-3" style={{ color: "orange" }}></i>
        </h2>
        <StoreSlideBar2 />
        <h2 className="mt-5">
          西式餐廳<i className="fa  fa-glasses ml-3" style={{ color: "yellow" }}></i>
        </h2>
        <StoreSlideBar2 />
        <h2 className="mt-5">
          飲料<i className="fa fa-coffee ml-3" style={{ color: "pink" }}></i>
        </h2>
        <StoreSlideBar2 />
        <div
          style={{ margin: "20px 0 20px 0" }}
          className="category-lane"
        ></div>
        <h2 className="mt-5">
          探索一堆<i className="fa fa-star" style={{ color: "gold" }}></i>
        </h2>

        <Restaurants />

        {/* <MultipleSearch /> */}
        {/* <MultipleSearch2 /> */}

      </React.Fragment>
    );
  }
}

export default FoodpandaPage;
