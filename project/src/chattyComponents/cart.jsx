import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

import Navbar from '../always used/navbar';
import Footer from '../always used/footer';

import Cartcard from './cartcard';

import '../css/cart.css';

class Cart extends Component {
    state = { count: 1, countsum: 100, price: 100,
              total: 100+19 }

    // 餐點數量增加
    doPlusorder = (e) => {
        // console.log(e);
        // var tcount = e.target.closest('.orderbutton');
        // console.log(tcount);
        // var toutput = $(tcount).find('output').val();
        // console.log(toutput);
        this.setState({ count: this.state.count + 1 });
        this.setState({ price: this.state.price });
        this.setState({ countsum: this.state.count * this.state.price + this.state.price });
        this.setState({ total: this.state.countsum+this.state.price +19});

    }
    componentDidMount = () => {
        // document.getElementById('sum').innerHTML = `${this.state.countsum} `;
    }

    // 餐點數量減少
    doDecreseorder = (e) => {
        // console.log(e);
        var tcount = e.target.closest('.orderbutton');
        // console.log(tcount);
        var toutput = parseInt($(tcount).find('output').val());
        // console.log(toutput);

        if (toutput === 1) {
            // window.confirm('you sure?');
            if (window.confirm("確定要移除餐點嗎？") === true) {
                alert('remove');
                // console.log(e.target.closest('.menutail'));
                e.target.closest('.menutail').remove();

            } else {
                alert('cancel');
            }
        }
        else {
            this.setState({ count: this.state.count - 1 })
            this.setState({ price: this.state.price });
            this.setState({ countsum: this.state.count * this.state.price - this.state.price })

        }

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
                        <span className='h4'>店家名字</span>
                    </div>
                    <div className='menutailBar row text-right'>
                        <div className='col-3'>食物</div>
                        <div className='col-3'>食物名字</div>
                        <div className='col-2'>單價</div>
                        <div className='col-2'>數量</div>
                        <div className='col-2'>金額</div>
                    </div>

                    <Cartcard />

                    <div className='menutail row'>
                        {/* 點餐內容 */}
                        <div className='col-3 cart-food-sp sp1'>food1pic</div>
                        <div className='col-3 cart-food-sp sp2'>food1Name</div>
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
                    </div>

                    <div className='menutail row'>
                        {/* 點餐內容 */}
                        <div className='col-3 cart-food-sp sp1'>food1pic</div>
                        <div className='col-3 cart-food-sp sp2'>food1Name</div>
                        <div className='col-2 cart-food-sp'>$100</div>
                        <div className='col-2 cart-food-sp'>

                            <div>
                                <button className='btn'>-</button>
                                <span>&nbsp;1&nbsp;</span>
                                <button className='btn'>+</button>

                            </div>

                        </div>
                        <div className='col-2 cart-food-sp sp3'>$100</div>
                    </div>
                    <div className='menutail row'>
                        {/* 點餐內容 */}
                        <div className='col-3 cart-food-sp sp1'>food2pic</div>
                        <div className='col-3 cart-food-sp sp2'>food2Name</div>
                        <div className='col-2 cart-food-sp'>$150</div>
                        <div className='col-2 cart-food-sp'>

                            <p>
                                <span>
                                    <button className='btn'>-</button>
                                    <span>&nbsp;1&nbsp;</span>
                                    <button className='btn'>+</button>
                                </span>
                            </p>

                        </div>
                        <div className='col-2 cart-food-sp sp3'>$150</div>
                    </div>

                    <hr />
                </div>


                <div className='container'>
                    <div className="row">
                        <div className="col-10 text-right">
                            <p><span>小計：</span></p>
                            <p><span>外送服務費：</span></p>
                            <p><span>總計：</span></p>
                        </div>
                        <div className="col text-right">
                            <p><span >{this.state.countsum}</span></p>
                            <p><span>$19</span></p>
                            <p><span>{this.state.total}</span></p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'></div>
                        <div className="col-3"><NavLink to="/payment"><button className='btn btn-danger btn-block'>點我結帳</button></NavLink></div>
                    </div>
                </div>

                <Footer />
            </React.Fragment>
        );
    }
}

export default Cart;