import React from "react";
import SearchBar from "./searchbar";
import Restaurants from "./restaurants";
import Caroursel from "./Caroursel";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// 分類 
import StoreSlidrBar2drinks from "./StoreSlidrBar_category/category_drinks";
import StoreSlidrBar2chinese from "./StoreSlidrBar_category/category_chinese";
import StoreSlidrBar2west from "./StoreSlidrBar_category/category_west";
import StoreSlidrBar2taichung from "./StoreSlidrBar_category/category_taichung";
import StoreSlidrBar2southeast from "./StoreSlidrBar_category/category_southeast";
import StoreSlidrBar2hito from "./StoreSlidrBar_category/category_hito";
import StoreSlideBar2 from "./StoreSlideBar2"; //全部
// 
import "../css/foodpandapage.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ChatRobot from "./ChatRobot";
// import LiveChat from "./LiveChat";
import FirebaseIndex from "./firebase/firebaseIndex";

import Section1_pic from "../img/man.png";  //送貨人
import Hands from "../img/hands.png"
import SvgLogo from "./Svg/final_project_logo.svg";
import LogoPNG from "../img/logo.png"

import Navbar from "../components/repeatability/Navbar";
import { NavLink } from "react-router-dom";

// import ChatRobot2 from "./NOT_UESD_NOW/ChatRobot2OW/ChatRobot2"
// import FindDisatnce from "./js/GetCurrentPosition"
class FoodpandaPage extends React.Component {
  state={
    location:"1",
  }
  componentDidMount() {
    // or simply just AOS.init();
    AOS.init({
      // initialise with other settings
      duration: 2000,
    });
  }
//   locating = {
//     latitude: null,
//     longitude: null,
//     addr: null,
// }


// locating = () => {
//   if (navigator.geolocation) {
//       console.clear();
//       // 使用者不提供權限，或是發生其它錯誤
//       function error() {
//           alert('無法取得你的位置');
//       }

//       // 使用者允許抓目前位置，回傳經緯度
//       var success = async (position) => {
//           console.log(position.coords.latitude, position.coords.longitude);
//           this.locating.latitude = position.coords.latitude.toFixed(7);
//           this.locating.longitude = position.coords.longitude.toFixed(7);

//           /* ===【Start】 經緯度 轉地址 === */
//           var geocoder = new google.maps.Geocoder();
//           var coord = new google.maps.LatLng(this.locating.latitude, this.locating.longitude);
//           var result
//           result = await geocoder.geocode({ 'latLng': coord }, function (results, status) {
//               if (status === google.maps.GeocoderStatus.OK) {
//                   // 如果有資料就會回傳
//                   if (results) {
//                       console.log(results[0]);
//                       // return results;
//                   }
//               }
//               // 經緯度資訊錯誤
//               else {
//                   alert("Reverse Geocoding failed because: " + status);
//               }
//           })
//               .then((res) => {
//                   // console.log(res);
//                   return res;
//               });
//           // console.log(result);
//           this.locating.addr = result.results[0].formatted_address
//           console.log(this.locating.addr);
//           /* ===End】 經緯度 轉地址 === */

//           /*  */
//           // console.log(this.locating.addr)
//           let str = this.locating.addr;
//           let l = str.length;
//           this.locating.addr = this.locating.addr.slice(5, l)
//           const searchBox = document.querySelector("#searchBox");
//           searchBox.value = this.locating.addr;
//           /* */



//       }

//       // 跟使用者拿所在位置的權限
//       navigator.geolocation.getCurrentPosition(success, error);


//   } else {
//       alert('Sorry, 你的裝置不支援地理位置功能。')
//   }

// }




  render() {
    return (
      <React.Fragment>
        <Navbar />
        <ChatRobot />

        <div className="body-wrapper">
        {/* <div className="container"> */}
            <Caroursel />
          {/* </div> */}
          <div className="container">
            
            <div className="first-section d-flex">
              <div className="dot1 dot"></div>
              <div className="dot2 dot"></div>
              <div className="dot3 dot"></div>
              <div className="section-left flex-grow-1 ">
              <br/><br/>
                <h2>
                  <span className="special-text">&nbsp;</span>團購服務上線中
                </h2>
                <h4>
                  搶先體驗 <br />
                  &emsp; 獲得100元順弁優惠券
                </h4>
                <div className="btn-collect">
                  <NavLink to='/sunsua'>
                  <button className="first-try">搶先體驗</button>
                  </NavLink>
                  <button class="play-btn"></button>
                </div>
              </div>
              <div className="section-right">
                <img src={Section1_pic} alt="" />
              </div>
            </div>
          </div>

{/* 定位功能 */}
{/* <button onClick={this.locating}>123</button>
<input type="text"  id="searchBox"/> */}


          <div className="container">
            <div className=" section1_searchsection">
              <div>


                {/* 搜尋bar部分 */}
                <div className="searchbar-wrapper">
                  <div style={{ margin: "0px 0 0px 180px" }}>
                    <h1 className="font-weight-bolder h1 section1_searchbar ">
                      即刻享用新鮮餐點
                    </h1>
                  
                    <SearchBar />
                  </div>
                  {/* <img src={Hands} alt=""/> */}
                </div>
              </div>
            </div>
          </div>
          {/* <LiveChat /> */}
          {/* <FirebaseIndex /> */}
          {/* <FindDisatnce /> */}
          <div className=" all-item">
            <div className="section2">
              <div
                className="section2_bar1 hito section2_bar"
              // data-aos="fade-right"
              // data-aos-once="true"
              >
                <h2 className=" " >
                  &ensp;優惠主打星
                  {/* <i className="fa fa-star ml-3" style={{ color: "gold" }}></i> */}
                </h2>
                <StoreSlidrBar2hito />
              </div>
              <div
                className="section2_bar2 section2_bar"
              // data-aos="fade-left"
              // data-aos-once="true"
              >
                <h2 className=" ">
                  &ensp;附近美食
                  {/* <i className="fa fa-cutlery ml-3" style={{ color: "grey" }}></i> */}
                </h2>
                <StoreSlidrBar2taichung />
              </div>
              <div className="section2_bar5 section2_bar">
                <h2 className=" ">
                  &ensp;飲料
                  {/* <i className="fa fa-coffee ml-3" style={{ color: "pink" }}></i> */}
                </h2>
                <StoreSlidrBar2drinks />
              </div>

              <div
                className="section2_bar3 section2_bar"
              // data-aos="fade-right"
              // data-aos-once="true"
              >
                <h2 className=" ">
                  &ensp;中式餐廳
                  {/* <i className="fa fa-lemon ml-3" style={{ color: "orange" }}></i> */}
                </h2>
                <StoreSlidrBar2chinese />
              </div>
              <div
                className="section2_bar4 section2_bar "
              // data-aos="fade-left"
              // data-aos-once="true"
              // data-aos-duration="700"
              >
                <h2 className="">
                  西式餐廳
                  {/* <i
                    className="fa  fa-glasses ml-3"
                    style={{ color: "yellow" }}
                  ></i> */}
                </h2>
                <StoreSlidrBar2west />
              </div>
              <div className="section2_bar6 section2_bar">
                <h2 className=" ">
                  &ensp;東南亞料理
                  {/* <i className="fa fa-coffee ml-3" style={{ color: "pink" }}></i> */}
                </h2>
                <StoreSlidrBar2southeast />
              </div>

<div style={{marginLeft:"50px",marginTop:"70px"}}>
              <h2 className=" font-weight-bolder">
                &ensp;探索更多
                {/* <i className="fa fa-star" style={{ color: "gold" }}></i> */}
              </h2>
            </div>
            <div ><Restaurants /></div>
            </div>
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
