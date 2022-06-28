import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../always used/navbar';
import Footer from '../always used/footer';

import shop1 from '../imgs/shop1.jpg';


import '../css/zcartback.css';

class Cart22222 extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <Navbar />
                {/* <div className='container'>
                    <h1>Cart test</h1>
                    <NavLink to="/index">index page</NavLink><br />
                    <NavLink to="/login">login page</NavLink><br />
                    <NavLink to="/register">register page</NavLink><br />
                    <NavLink to="/cart">cart page</NavLink><br />
                    <NavLink to="/payment">payment page</NavLink><br />
                </div> */}
                <br /><br /><br />
                <div className="container" id='cartcontainer'>
                    <div className="row">
                        <div className="col" id='cartcontainer1'>
                            <table>
                                <tr>
                                    {/* 店家pic  */}
                                    <img src={shop1} alt="shop1" />
                                </tr>
                                <tr>
                                    <div className="container">
                                        <p>店家資訊</p>
                                    </div>
                                    
                                </tr>
                                <tr>
                                    <div className="container">
                                         Menu
                                    </div>
                                    
                                </tr>
                            </table>
                        </div>
                        <div className="col-lg-3" id='cartcontainer2'>
                            <p>購物車</p>
                            <button className='btn btn-light'>外送</button> <button className='btn btn-light'>外帶自取</button>
                            <p>date</p>
                            <p>店名</p>
                            <p>點餐content</p>
                            <hr />
                            <p>小計<span>$100</span></p>
                            <p>外送服務費<span>$19</span></p>
                            <p>總計金額<span>$119</span></p>

                            <NavLink to="/payment"><button className='btn btn-danger btn-block'>結帳</button></NavLink>
                        </div>
                    </div>
                </div>
                
                
                <Footer />
                
            </React.Fragment>
            
        );
    }
}
 
export default Cart;