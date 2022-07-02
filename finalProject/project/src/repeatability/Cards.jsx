import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "./card.css";
class Cards extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <div className='conainter'>
          <NavLink to="/shopList">
            <div className="card setHeight" style={{ maxheight: "200px" }}>
              {/* 需要套資料庫呈現(圖片) */}
              <svg className="bd-img bd-img-lg featurette-image img-fluid mx-auto" width="100%" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eee"></rect></svg>
              <div className="container">
                <span className="textHeight" style={{ height: "40px" }}>
                  <div className='row'>
                    {/* 店家名稱 */}
                    <div className='col-sm-6'><b>店家名稱</b></div>
                    {/* 店家的評價★ */}
                    <div className='col-sm-6'>
                      <i className="fa fa-star" style={{ color: "red" }}></i>
                      <span className="star-point">5</span> /
                      <span className="comment-amount">5</span>
                    </div>
                  </div>
                  {/* 餐廳的種類 */}
                  <small className="restaurant-type">$$$,<b>種類</b></small>
                </span>
              </div>
            </div>
          </NavLink>

        </div>
      </React.Fragment>
    );
  }
}

export default Cards;