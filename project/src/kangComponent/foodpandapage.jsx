import React from "react";
import SearchBar from "./searchbar";
import Restaurants from "./restaurants";
import Caroursel from "./Caroursel";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import StoreSlideBar2 from "./StoreSlideBar2";
import "../css/foodpandapage.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ChatRobot from "./ChatRobot";
// import LiveChat from "./LiveChat";
import FirebaseIndex from "./firebase/firebaseIndex";

import Section1_pic from "../img/man.png";  //送貨人
import SvgLogo from "./Svg/final_project_logo.svg";
import LogoPNG from "../img/logo.png"

// import ChatRobot2 from "./NOT_UESD_NOW/ChatRobot2OW/ChatRobot2"
// import FindDisatnce from "./js/GetCurrentPosition"
class FoodpandaPage extends React.Component {
  componentDidMount() {
    // or simply just AOS.init();
    AOS.init({
      // initialise with other settings
      duration: 2000,
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="body-wrapper">
        <div className="container">
          <div className="d-flex justify-content-end mt-2 ">
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
          <div className="first-section d-flex">
            <div className="dot1 dot"></div>
            <div className="dot2 dot"></div>
            <div className="dot3 dot"></div>
            <div className="section-left flex-grow-1 ">
              <h2>
                <span className="special-text">&nbsp;</span>新功能上線中
              </h2>
              <h4>
                搶先體驗 <br />
                &emsp; 獲得100元順弁優惠券
              </h4>
              <div className="btn-collect">
                <button className="first-try">搶先體驗</button>
                <button class="play-btn"></button>
              </div>
            </div>
            <div className="section-right">
              <img src={Section1_pic} alt="" />
            </div>
          </div>
        </div>
        <div className="container">
          <Caroursel />
        </div>
        <div className="container">
        <div className=" section1_searchsection">
          <div>
            <h1 className="font-weight-bolder h1 section1_searchbar">
              即刻享用新鮮餐點
            </h1>

            {/* 搜尋bar部分 */}
            <div style={{ margin: "30px 0 70px 0" }}>
              <SearchBar />
            </div>
          </div>
        </div>
        </div>
        {/* <LiveChat /> */}
        {/* <FirebaseIndex /> */}
        {/* <ChatRobot2/> */}
        {/* <FindDisatnce /> */}
        <div className="container mt-4 all-item">
          <div className="section2">
            <div
              className="section2_bar1 hito"
              data-aos="fade-right"
              data-aos-once="true"
            >
              <h2 className="font-weight-bolder ">
              &ensp;優惠主打星
                <i className="fa fa-star ml-3" style={{ color: "gold" }}></i>
              </h2>
              <StoreSlideBar2 />
            </div>
            <div
              className="section2_bar2"
              data-aos="fade-left"
              data-aos-once="true"
            >
              <h2 className="mt-5 font-weight-bolder">
              &ensp;附近美食
                <i className="fa fa-cutlery ml-3" style={{ color: "grey" }}></i>
              </h2>
              <StoreSlideBar2 />
            </div>
            <div
              className="section2_bar3"
              data-aos="fade-right"
              data-aos-once="true"
            >
              <h2 className="mt-5 font-weight-bolder">
              &ensp;中式餐廳
                <i className="fa fa-lemon ml-3" style={{ color: "orange" }}></i>
              </h2>
              <StoreSlideBar2 />
            </div>
            <div
              className="section2_bar4"
              data-aos="fade-left"
              data-aos-once="true"
              data-aos-duration="700"
            >
              <h2 className="mt-5 font-weight-bolder">
              &ensp;西式餐廳
                <i
                  className="fa  fa-glasses ml-3"
                  style={{ color: "yellow" }}
                ></i>
              </h2>
              <StoreSlideBar2 />
            </div>
            <div className="section2_bar5">
              <h2 className="mt-5 font-weight-bolder">
              &ensp;飲料
                <i className="fa fa-coffee ml-3" style={{ color: "pink" }}></i>
              </h2>
              <StoreSlideBar2 />
            </div>

            <h2 className="mt-5 font-weight-bolder">
            &ensp;探索更多<i className="fa fa-star" style={{ color: "gold" }}></i>
            </h2>
          </div>
          <section>{/* <Restaurants />    先關掉太多了*/}</section>
          {/* <MultipleSearch /> */}
          {/* <MultipleSearch2 /> */}
        </div>
        <ChatRobot />
        </div>
      </React.Fragment>
    );
  }
}

export default FoodpandaPage;
