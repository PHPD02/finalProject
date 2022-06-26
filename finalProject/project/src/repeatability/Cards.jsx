import React, { Component } from 'react';
class Cards extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <div>
          <div className="card" style={{ maxHeight: "200px" }}>
            {/* 需要套資料庫呈現(圖片) */}
            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="100%" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect></svg>
            <div className="container">
              <span style={{ height: "40px" }}>
                <div className='row'>
                  {/* 店家名稱 */}
                  <b>店家名稱</b>
                  <div className='col-6'></div>
                  {/* 店家的評價★ */}
                  <div className='ml-6'>
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
        </div>
      </React.Fragment>
    );
  }
}

export default Cards;