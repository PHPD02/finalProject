import React, { Component } from 'react';
import "./css/card.css";
import axios from 'axios';
class Cards extends Component {
  state = {}
  rest = this.props.catchData;    //把父階的資料傳送到子階來
  componentDidMount = async () => {
    let url = "http://localhost:80/ourPHPFinalproject/RjieProject/firstsql2.php"
    await axios.get(url)
    // console.log(this.rest.name);
    // console.log(this.rest.region);

  }
  render() {
    return (
      <React.Fragment>
        <div style={{ width: '200px', height: '250px' }}>
          <div className="setHeight cardshadow">
            {/* 需要套資料庫呈現(圖片) */}
            <div className='zImg'>
              <img src={this.rest.picture} className="bd-img bd-img-lg featurette-image img-fluid mx-auto" id="myImg" width="100%" height="" />
            </div>
            {/* <svg className="bd-img bd-img-lg featurette-image img-fluid mx-auto" id="myImg" width="100%" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#F08080"></rect></svg> */}
            <div className="zText">
              {/* 店家名稱 */}
              <div className='row'><b className="col-7 text-nowrap text-truncate">{this.rest.name}</b>
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

export default Cards;