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
    let id
    if(this.props.match.params.id){
      id = this.props.match.params.id;
    }

    // var result = await Axios.get("http://localhost//ourPHPFinalproject/ChtProject/storeCards/getStoreItems.php");
    var result = await Axios.get("http://localhost/ourPHPFinalproject/ChtProject/storeCards/getStoreItems.php",{params:{restaurantId:id}});
    this.setState({
      menuList: result.data,
      restaurantName: result.data[0].restaurantName
    })
    console.log(this.state.menuList)
    this.initCartNum();
  }

  initCartNum = () => {
    Axios.get("http://localhost//ourPHPFinalproject/ChtProject/cart/1.php").then((res) => {
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
              <h4 className='col-9' style={{fontWeight:"bold",fontSize:"30px"}}>餐廳名稱:{this.state.restaurantName}</h4>
              {/* <button className='col-3 btn btn-outline-primary'><b>+</b><i className='fa fa-users pr-1'></i>開始團購訂單</button> */}
              
              <div className="col-2">
                <NavLink to='/CommentPage'>
                  <button className='btn btn-outline-success btn-lg' >餐廳資訊</button>
                </NavLink>
              </div>
                
            </div>
            <div style={{fontSize:"20px"}}>
              <span style={{color:"red"}}>★</span><span >5</span>/<span >5</span><span >(476)</span>
            </div>
            <br/>
            <h4  style={{fontSize:"26px"}}>菜單</h4>
            <div className='container'>
              <div className='row'>
              {this.state.menuList.map((p) => {
                return (
                  // <div className='row'>
                  <div className='col-md-6 col-sm-12 mt-2' key={(p.menuItemId)} >
                    <StoreCard
                      StoreCard={p}
                      // func={this.initCartNum} 
                      />
                  </div>
                )
              })}
              </div>
            </div>
            <hr />
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