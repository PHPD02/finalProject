import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "./css/card.css";
import axios from 'axios';
class diecard extends Component {
  state = {
  }
  render() {
    return (
      <React.Fragment>
        <div style={{ width: '200px', height: '250px' }}>
          <div className="setHeight cardshadow">
            {/* 需要套資料庫呈現(圖片) */}
            <div className='zImg'>
              <img src='https://tb-static.uber.com/prod/image-proc/processed_images/b2ff9a31c30982d14947aeed21a0584c/289197f4b252306213575a01442f7b66.jpeg' className="bd-img bd-img-lg featurette-image img-fluid mx-auto" id="myImg" width="100%" />
            </div>
            {/* <svg className="bd-img bd-img-lg featurette-image img-fluid mx-auto" id="myImg" width="100%" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#F08080"></rect></svg> */}
            <div className="zText">
              {/* 店家名稱 */}
              <div className='row'><b className="col-7 text-nowrap text-truncate">水巷茶弄</b>
                <div className='eva col-5'>
                  {/* 店家的評價★ */}
                  <i className="fa fa-star" style={{ color: "red" }}></i>
                  <span className="star-point">5</span> /
                  <span className="comment-amount">5</span>
                </div>
              </div>
              {/* 餐廳的種類restaurant.region */}
              <br />
              <small className="restaurant-type">$$$,<b></b></small>
            </div>
          </div>
        </div>



      </React.Fragment>
    );
  }

}

export default diecard;