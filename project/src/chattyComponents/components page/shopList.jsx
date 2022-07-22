import React, { Component } from 'react';
// import Navbar from '../../components/repeatability/Navbar';
import Navbar from '../../components/repeatability/Navbar';
// import ShopCard from '../../components/component/ShopCard';
import Footer from '../../components/repeatability/Footer';
// import { NavLink } from 'react-router-dom';
import "../../components/component/css/card.css";
import SearchBar from '../../components/component/SearchBar';

import Axios from 'axios';
import StoreCard from '../components item/storeCards';
// import CheckCart from '../components item/checkCart';
import { ToastContainer, toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';
class shopList extends Component {
  state = {
    menuList: [],
    restaurantName: '',
    cartNum: 0
  }

  async componentDidMount() {
    // var result = await Axios.get("http://localhost:8000/todo/list");
    var result = await Axios.get("http://localhost//ourPHPFinalproject/ChtProject/storeCards/getStoreItems.php");
    this.setState({
      menuList: result.data,
      restaurantName: result.data[0].restaurantName
    })
    console.log(this.state.menuList)
    this.initCartNum();
  }

  initCartNum = () => {
    Axios.get("http://localhost//ourPHPFinalproject/ChtProject/cart/getallcart.php").then((res) => {
      console.log(res.data);
      const carts = res.data || [];
      const cartNum = carts.map(cart => parseInt(cart.mount)).reduce((a, value) => a + value, 0);
      console.log(cartNum);
      this.setState({ cartNum: cartNum });
      // console.log(carts[0]);
    })
  }
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

        
        <div>
          <div>
            <img src='https://images.deliveryhero.io/image/fd-tw/LH/d2bz-hero.jpg?width=1600&height=400&quality=45' className="col-12 p-0" />
          </div>
          <br />
          <div className='container'>
            <div className='row'>
              <h4 className='col-9'>餐廳名稱:{this.state.restaurantName}</h4>
              {/* <button className='col-3 btn btn-outline-primary'><b>+</b><i className='fa fa-users pr-1'></i>開始團購訂單</button> */}
              
              <div className="col-2">
                <NavLink to='/CommentPage'>
                  <button className='btn btn-outline-success btn-lg'>餐廳資訊</button>
                </NavLink>
              </div>
                
            </div>
            <div>
              <span>★</span><span>5</span>/<span>4.7</span><span>(500)</span>
            </div>
            {/* <div>
              <span>$$$</span>●<span>種類</span>●<span>西式/台式/沒事</span>
            </div>
            <div>
              <span>地址</span>●<span>公里</span>●<span>以地圖開啟</span>
            </div>
            <hr /> */}
            {/* <div>
              <button className='btn btn-outline-primary'>人氣精選</button>
              <button className='m-1 btn btn-outline-primary'>※注意事項※</button>
              <button className='m-1 btn btn-outline-primary'>種類</button>
              <button className='m-1 btn btn-outline-primary'>種類</button>
              <button className='m-1 btn btn-outline-primary'>種類</button>
            </div> */}
            <br />
            {/* <h3 className>人氣精選✨</h3>
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
            </div> */}
            {/* <hr /> */}
            <h4>菜單</h4>
            <div className='container'>
              <div className='row'>
              {this.state.menuList.map((p) => {
                return (
                  // <div className='row'>
                  <div className='col-md-6 col-sm-12 mt-2' key={(p.menuItemId)} >
                    <StoreCard
                      StoreCard={p} />
                  </div>
                )
              })}
              </div>
              {/* <div className='row'> */}
                {/* <div className='col-md-6 col-sm-12'>
                  <ShopCard />
                </div>
                <div className='col-md-6 col-sm-12'>
                  <ShopCard />
                </div> */}
              {/* </div> */}
            </div>
            <hr />
            {/* <h4>種類</h4>
            <div className='container'>
              <div className='row'>
                <div className='col-md-6 col-sm-12'>
                  <ShopCard />
                </div>
                <div className='col-md-6 col-sm-12'>
                  <ShopCard />
                </div>
              </div>
            </div> */}
          </div>

        </div>
        <br />
        <br />
        <br />
        {/* <ToastContainer /> */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default shopList;