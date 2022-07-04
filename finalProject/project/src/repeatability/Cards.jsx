import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "./card.css";
class Cards extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <NavLink to="/shopList" target="_blank">
          <div className="card setHeight">
            {/* 需要套資料庫呈現(圖片) */}
            <svg className="bd-img bd-img-lg featurette-image img-fluid mx-auto" id="myImg" width="100%" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#F08080"></rect></svg>
            <div>
              <div className='row'>
                {/* 店家名稱 */}
                <div className='col-6'><b>店家名稱</b></div>
                {/* 店家的評價★ */}
                <div className='col-6'>
                  <i className="fa fa-star" style={{ color: "red" }}></i>
                  <span className="star-point">5</span> /
                  <span className="comment-amount">5</span>
                </div>
              </div>
              <br />
              {/* 餐廳的種類 */}
              <small className="restaurant-type">$$$,<b>種類</b></small>

            </div>
          </div>
        </NavLink>


      </React.Fragment>
    );
  }
}

export default Cards;