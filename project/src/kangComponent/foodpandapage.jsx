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
import "../css/foodpandapage.css";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

class FoodpandaPage extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="d-flex justify-content-end mt-2 " >
            <button
              type="button"
              className="btn btn-outline-light text-dark mr-4 btn-lg"
            >
              購物車
            </button>
            <button
              type="button"
              className="btn btn-outline-light text-dark btn-lg"
            >
              登入 / 註冊
            </button>
          </div>
        </div>
        <Caroursel />
        <div className=" section1_searchsection" data-aos="fade-in">
          <div>
            <h1 className="font-weight-bolder h1 section1_searchbar">
              即刻享用新鮮餐點
            </h1>

            {/* 搜尋bar部分 */}
            <div style={{ margin: "30px 0 70px 0" }} >
              <SearchBar />
            </div>
          </div>
        </div>
        <div className="container mt-4">
          <div className="section2">
          <div className="section2_bar1 wow bounceInUp">
          <h2 className="font-weight-bolder">
            優惠主打星
            <i className="fa fa-star ml-3" style={{ color: "gold" }}></i>
          </h2>
          <StoreSlideBar2 />
          </div>
          <div className="section2_bar2">

          <h2 className="mt-5 font-weight-bolder">
            附近美食
            <i className="fa fa-cutlery ml-3" style={{ color: "grey" }}></i>
          </h2>
          <StoreSlideBar2 />
          </div>
          <div className="section2_bar3">

          <h2 className="mt-5 font-weight-bolder">
            中式餐廳
            <i className="fa fa-lemon ml-3" style={{ color: "orange" }}></i>
          </h2>
          <StoreSlideBar2 />
          </div>
          <div className="section2_bar4">

          <h2 className="mt-5 font-weight-bolder">
            西式餐廳
            <i className="fa  fa-glasses ml-3" style={{ color: "yellow" }}></i>
          </h2>
          <StoreSlideBar2 />
          </div>
          <div className="section2_bar5">

          <h2 className="mt-5 font-weight-bolder">
            飲料<i className="fa fa-coffee ml-3" style={{ color: "pink" }}></i>
          </h2>
          <StoreSlideBar2 />
          </div>


          <h2 className="mt-5 font-weight-bolder">
            探索更多<i className="fa fa-star" style={{ color: "gold" }}></i>
          </h2>
          </div>
          <section3>
          <Restaurants />
          </section3>
          {/* <MultipleSearch /> */}
          {/* <MultipleSearch2 /> */}
        </div>
      </React.Fragment>
    );
  }
}

export default FoodpandaPage;
