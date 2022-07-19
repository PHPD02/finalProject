import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "./css/card.css";
import axios from 'axios';
class Cards extends Component {
  state = {
    restaurant: [

    ]
  }
  componentDidMount = async () => {
    let url = "http://localhost/ourPHPFinalproject/RjieProject/firstsql2.php"
    await axios.get(url)

      .then(res => {
        console.log("success");
        this.state.restaurant = res.data;
        this.setState({})
      })

      .catch(err => {
        console.log("failed")
      })
  }
  getClickTwCity = (event) => {
    let e = event;
    console.log(e);
  }
  render() {
    return (
      <React.Fragment>
        {/* <NavLink to="/shopList"> */}
        {this.state.restaurant.map((restaurant, index) => {
          // console.log(restaurant.name);
          // console.log(restaurant.region);
          // console.log(restaurant.picture);
          return (
            <div style={{
              width:'200px',height:'250px'
            }}>
              <div className="setHeight cardshadow">
                {/* 需要套資料庫呈現(圖片) */}
                <div className='zImg'>
                  <img src={restaurant.picture} key={index} className="bd-img bd-img-lg featurette-image img-fluid mx-auto" id="myImg" width="100%" height=""/>
                </div>
                {/* <svg className="bd-img bd-img-lg featurette-image img-fluid mx-auto" id="myImg" width="100%" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#F08080"></rect></svg> */}
                <div className="zText">
                  {/* 店家名稱 */}
                  <div className='row'><b className="col-7 text-nowrap text-truncate"key={index}>{restaurant.name}</b>
                    <div className='eva col-5'>
                      {/* 店家的評價★ */}
                      <i className="fa fa-star" style={{ color: "red" }}></i>
                      <span className="star-point">5</span> /
                      <span className="comment-amount">5</span>
                    </div>
                  </div>
                  {/* 餐廳的種類restaurant.region */}
                  <br />
                  <small className="restaurant-type">$$$,<b key={index}>{ }</b></small>
                </div>
              </div>
            </div>

          )
        })}

        {/* </NavLink> */}


      </React.Fragment>
    );
  }
}

export default Cards;