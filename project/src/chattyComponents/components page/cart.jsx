import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import Navbar from '../../components/repeatability/Navbar';
import axios from 'axios';
import Cartcard from '../components item/cartcard';
import '../css/cart.css';

var getemail = localStorage.getItem('email');
class Cart extends Component {
    state = {
        cart: [],
        restaurantName: ''
    }

    totalPrice = () => {
        const totalPrice = this.state.cart.map(cartt => cartt.mount * parseInt(cartt.cost))
            .reduce((a, value) => a + value, 0)
        return totalPrice
    }

    stateChg = async () => {
        await axios.get("http://localhost//ourPHPFinalproject/ChtProject/cart/getallcart.php").then((response) => {
            this.setState({
                cart: response.data,
            });

        })
        console.log(this.state.cart);

    }

    doPayment = () => {
        if (getemail) {
            try {
                const ordert = {
                    restaurantId: this.state.cart[0].restaurantId,
                    uid: localStorage.getItem('uid'),
                    cost: $('#cartTotal').text(),
                    freight: $('#freight').text(),
                    orderdetails: this.state.cart
                }
                console.log(ordert);
                // const { id, menuItemId, restaurantId, restaurantName, dish, type, picture, cost } = this.props.cart;
                axios.post("http://localhost//ourPHPFinalproject/ChtProject/order/inorder.php", ordert)
                    .then((response) => {
                        console.log(response);
                    })
                window.location = "http://localhost:3000/payment";
            } catch (error) {
                console.log(error);
            }
        } else {
            alert('請先登入!')
            window.location = 'http://localhost:3000/login';
        }
    }

    // isempty() {
    //     alert(' 目前購物車是空的! 請前往選購 ! ');
    //     window.location = 'http://localhost:3000/foodpandapage';
    // }

    async componentDidMount() {
        $('#cartBar').hide();
        await axios.get("http://localhost//ourPHPFinalproject/ChtProject/cart/getallcart.php").then((response) => {
            this.setState({
                cart: response.data,
                restaurantName: response.data[0].restaurantName
            });

        })
        console.log(this.state.cart);
        // 如果購物車沒有資料
        // if (this.state.cart) {
            // this.isempty();
        // }
        // console.log(this.state.cart);
        // console.log(this.state.restaurantName);
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <br /><br /><br />
                <div className="container">
                    <div className='text-center'>
                        <span className='h1'><strong>購物車</strong></span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className='h4'><u>{this.state.restaurantName}</u></span>
                    </div>
                    <div className='menutailBar row text-right mt-4'>
                        <div className='col-2'>食物</div>
                        <div className='col-3'>食物名字</div>
                        <div className='col-2'>單價</div>
                        <div className='col-2'>數量</div>
                        <div className='col-2'>金額</div>
                        <div className='col-1'></div>
                    </div>
                    <hr />



                    <div>
                        {this.state.cart.map((c) => {
                            return (
                                <Cartcard
                                    key={c.id}
                                    cart={c}
                                    func={this.stateChg}
                                />
                            )
                        })}

                    </div>


                    {/* <div className='menutail row'> */}
                    {/* 點餐內容 */}
                    {/* <div className='col-3 cart-food-sp sp1'><img src="https://images.deliveryhero.io/image/fd-tw/Products/38155656.jpg?height=80" alt="" /></div>
                        <div className='col-3 cart-food-sp sp2'>黃金里肌厚切豬排咖哩飯</div>
                        <div className='col-2 cart-food-sp'>{this.state.price}</div>

                        <div className='col-2 cart-food-sp'>
                            <div className='orderbutton'>
                                <button className='btn btn-danger'
                                    onClick={this.doDecreseorder}>-</button>
                                <output>&nbsp;{this.state.count}&nbsp;</output>
                                <button className='btn btn-success'
                                    onClick={this.doPlusorder}>+</button>

                            </div>
                        </div>

                        <output className='col-2 cart-food-sp sp3' id='sum'>${this.state.countsum}</output>
                    </div> */}



                    {/* <hr /> */}
                </div>

                {/* 小計 */}
                <div className='container'>
                    <div className="row">
                        <div className="col-10 text-right">
                            <p><span>小計：</span></p>
                            <p><span>外送服務費：</span></p>
                            <p><span>總計：</span></p>
                        </div>
                        <div className="col text-right">
                            <p>$<span>{this.totalPrice()}</span></p>
                            <p>$<span id='freight'>19</span></p>
                            <p>$<span id='cartTotal'>{this.totalPrice() + 19}</span></p>
                        </div>
                        <div className='col-1'></div>
                    </div>
                    <div className='row'>
                        <div className='col'></div>
                        <div className="col-3">
                            {/* <NavLink to="/payment"> */}
                            <button className='fancy btn-block'
                                onClick={this.doPayment}>
                                <span class="top-key"></span>
                                <span class="text">點我結帳</span>
                                <span class="bottom-key-1"></span>
                                <span class="bottom-key-2"></span>

                            </button>
                            {/* </NavLink> */}
                        </div>
                        <div className="col-1"></div>
                    </div>
                </div>

                {/* <Footer /> */}
            </React.Fragment>
        );
    }
}

export default Cart;