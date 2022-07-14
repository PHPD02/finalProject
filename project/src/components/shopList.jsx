import React, { Component } from 'react';
import Navbar from './repeatability/Navbar';
import ShopCard from './component/ShopCard';
import Footer from './repeatability/Footer';
import { NavLink } from 'react-router-dom';
import "./css/shoplist.css";
import SearchBar from './component/SearchBar';
class shopList extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <Navbar />
        {/* 查詢地址  */}
        <div className='container fixed-top ddd' style={{ display: "none" }}>
          <div className='row'>
            <div className='col-md-12 col-sm-12'>送到:
              <input type="button" className='w-25 text-left' value={'Select your address'} />
            </div>
          </div>
          <div className='col-md-12 col-sm-12'>
            <SearchBar />
          </div>
        </div>

        <br />
        <br />
        <div>
          <div className='mt-2'>
            <img src='https://images.deliveryhero.io/image/fd-tw/LH/f6xl-hero.jpg?width=1600&height=400&quality=45' className="col-12 p-0" />
          </div>
          <br />
          <div className='container'>
            <div className='row'>
              <h4 className='col-7'>餐廳名稱</h4>
              <button className='col-3 btn btn-outline-primary'><b>+</b><i className='fa fa-users pr-1'></i>開始團購訂單</button>
              <p className='col-2'>餐廳資訊</p>
            </div>
            <div>
              <span>★</span><span>5</span>/<span>4.7</span><span>(500)</span>
            </div>
            <div>
              <span>$$$</span>●<span>種類</span>●<span>西式/台式/沒事</span>
            </div>
            <div>
              <span>地址</span>●<span>公里</span>●<span>以地圖開啟</span>
            </div>
            <hr />
            <div>
              <button className='btn btn-outline-primary'>人氣精選</button>
              <button className='m-1 btn btn-outline-primary'>※注意事項※</button>
              <button className='m-1 btn btn-outline-primary'>種類</button>
              <button className='m-1 btn btn-outline-primary'>種類</button>
              <button className='m-1 btn btn-outline-primary'>種類</button>
            </div>
            <br />
            <h3 className>人氣精選✨</h3>
            <div className='container'>
              <div className='row'>
                <div className='col-md-6 col-sm-12'>
                  <ShopCard />
                </div>
                <div className='col-md-6 col-sm-12 mt-1'>
                  <ShopCard />
                </div>
              </div>
            </div>

            <hr />
            <h3>※注意事項※</h3>
            <div className='container'>
              <div className='row'>
                <div className='col-md-6 col-sm-12'>
                  <ShopCard />
                </div>
                <div className='col-md-6 col-sm-12'>
                  <ShopCard />
                </div>
              </div>
            </div>
            <hr />
            <h4>種類</h4>
            <div className='container'>
              <div className='row'>
                <div className='col-md-6 col-sm-12'>
                  <ShopCard />
                </div>
                <div className='col-md-6 col-sm-12'>
                  <ShopCard />
                </div>
              </div>
            </div>
            <hr />
            <h4>種類</h4>
            <div className='container'>
              <div className='row'>
                <div className='col-md-6 col-sm-12'>
                  <ShopCard />
                </div>
                <div className='col-md-6 col-sm-12'>
                  <ShopCard />
                </div>
              </div>
            </div>
          </div>

        </div>
        <br />
        <br />
        <br />
        <Footer />
      </React.Fragment>
    );
  }
}

export default shopList;