import React, { Component } from 'react';
import Navbar from '../repeatability/Navbar';
import ShopCard from '../repeatability/ShopCard';
import Footer from '../repeatability/Footer';
import { NavLink } from 'react-router-dom';
class shopList extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <Navbar />
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
              <button className='col-3 btn btn-outline-primary'>開始團購訂單</button>
              <p className='col-2'>餐廳資訊</p>
            </div>
            <div>
              <span>★</span><span>5</span>/<span>4.7</span><span>(500)</span>
            </div>
            <div>
              <span>$$$</span>●<span>種類</span>●<span>西式/台式/沒事</span>
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
            <h2 className>人氣精選✨</h2>
            <div className='container'>
              <div className='row'>
                <div className='col-6'>
                  <ShopCard />
                </div>
                <div className='col-6'>
                  <ShopCard />
                </div>
              </div>
            </div>

            <hr />
            <h2>※注意事項※</h2>
            <div className='container'>
              <div className='row'>
                <div className='col-6'>
                  <ShopCard />
                </div>
                <div className='col-6'>
                  <ShopCard />
                </div>
              </div>
            </div>
            <h2>重要</h2>
            <div className='container'>
              <div className='row'>
                <div className='col-6'>
                  <ShopCard />
                </div>
                <div className='col-6'>
                  <ShopCard />
                </div>
              </div>
            </div>
            <h2>重要</h2>
            <div className='container'>
              <div className='row'>
                <div className='col-6'>
                  <ShopCard />
                </div>
                <div className='col-6'>
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
      </React.Fragment >
    );
  }
}

export default shopList;