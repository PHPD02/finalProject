import React, { Component } from 'react';
// import $ from 'jquery';
// import dish1 from '../imgs/shop1.jpg'
import '../css/cart.css';

class Cartcard extends Component {
    state = { } 

    render() { 
        const{name, image ,price ,mount} =this.props.cart ||{};
        const sumPrice = mount* parseInt(price);
        return (
            <React.Fragment>
                <div className='menutail row'>
                    {/* 點餐內容 */}
                    <div className='col-3 cart-food-sp sp1'>pic<img src={image} alt={name} style={{height:'100%'}} /></div>
                    <div className='col-3 cart-food-sp sp2'>{name}</div>
                    <div className='col-2 cart-food-sp'>{price}</div>

                    <div className='col-2 cart-food-sp'>
                        <input type="number" defaultValue="1" className='text-right w-25'  />
                    </div>

                    <output className='col-2 cart-food-sp sp3' id='sum'>{sumPrice}</output>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Cartcard;