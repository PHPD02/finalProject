import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "./css/card.css";
import axios from 'axios';
class diecard extends Component {
  state = {
    restaurant: [

    ]
  }
  // componentDidMount = async () => {
  //   let url = "http://localhost/finalProject/firstsql2.php"
  //   await axios.get(url)

  //     .then(res => {
  //       console.log("success");
  //       this.state.restaurant = res.data;
  //       this.setState({})
  //     })

  //     .catch(err => {
  //       console.log("failed")
  //     })
  // }

  render() {
    return (
      <React.Fragment>
        {/* <NavLink to="/storePage"> */}

        {/* // console.log(restaurant.name); */}
        {/* // console.log(restaurant.region); */}
        {/* // console.log(restaurant.picture); */}

        <div style={{
          width: '200px', height: '300px'
        }}>
          <div className="setHeight cardshadow">
            {/* 需要套資料庫呈現(圖片) */}
            <div className='zImg'>
              <img src="https://images.deliveryhero.io/image/fd-tw/LH/m9vv-hero.jpg" className="bd-img bd-img-lg featurette-image img-fluid mx-auto" id="myImg" width="100%" />
            </div>
            {/* <svg className="bd-img bd-img-lg featurette-image img-fluid mx-auto" id="myImg" width="100%" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#F08080"></rect></svg> */}
            <div className="zText">
              {/* 店家名稱 */}
              <div><b >功夫茶</b>
                <div className='eva'>
                  {/* 店家的評價★ */}
                  <i className="fa fa-star" style={{ color: "red" }}></i>
                  <span className="star-point">5</span> /
                  <span className="comment-amount">5</span>
                </div>
              </div>
              {/* 餐廳的種類 */}
              <br />
              <small className="restaurant-type">$$$,<b></b></small>
            </div>
          </div>
          {/* </NavLink> */}
          <div className="setHeight cardshadow">
            {/* 需要套資料庫呈現(圖片) */}
            <div className='zImg'>
              <img src="https://images.deliveryhero.io/image/fd-tw/LH/qsf8-listing.jpg?width=400&height=292|https://images.deliveryhero.io/image/fd-tw/LH/qsf8-listing.jpg?width=800&height=584" className="bd-img bd-img-lg featurette-image img-fluid mx-auto" id="myImg" width="100%" />
            </div>
            {/* <svg className="bd-img bd-img-lg featurette-image img-fluid mx-auto" id="myImg" width="100%" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#F08080"></rect></svg> */}
            <div className="zText">
              {/* 店家名稱 */}
              <div><b >KUN 崐·特製韓醬炸雞</b>
                <div className='eva'>
                  {/* 店家的評價★ */}
                  <i className="fa fa-star" style={{ color: "red" }}></i>
                  <span className="star-point">5</span> /
                  <span className="comment-amount">5</span>
                </div>
              </div>
              {/* 餐廳的種類 */}
              <br />
              <small className="restaurant-type">$$$,<b></b></small>
            </div>
          </div>
          <div className="setHeight cardshadow">
            {/* 需要套資料庫呈現(圖片) */}
            <div className='zImg'>
              <img src="https://images.deliveryhero.io/image/fd-tw/LH/tyge-listing.jpg?width=400&height=292|https://images.deliveryhero.io/image/fd-tw/LH/tyge-listing.jpg?width=800&height=584" className="bd-img bd-img-lg featurette-image img-fluid mx-auto" id="myImg" width="100%" />
            </div>
            {/* <svg className="bd-img bd-img-lg featurette-image img-fluid mx-auto" id="myImg" width="100%" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#F08080"></rect></svg> */}
            <div className="zText">
              {/* 店家名稱 */}
              <div><b >珍煮丹</b>
                <div className='eva'>
                  {/* 店家的評價★ */}
                  <i className="fa fa-star" style={{ color: "red" }}></i>
                  <span className="star-point">5</span> /
                  <span className="comment-amount">5</span>
                </div>
              </div>
              {/* 餐廳的種類 */}
              <br />
              <small className="restaurant-type">$$$,<b></b></small>
            </div>
          </div>
        </div>


        {/* </NavLink> */}


      </React.Fragment>
    );
  }
}

export default diecard;