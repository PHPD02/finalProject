import React, { Component } from 'react';
import axios from 'axios';
// import $ from 'jquery';
// import dish1 from '../imgs/shop1.jpg'
import '../css/cart.css';

class Cartcard extends Component {
    state = { } 

    doDelete = async() => {
        const { id, menuItemId, restaurantId, restaurantName, dish, type, picture, cost } = this.props.cart;
        console.log(this.props.cart);
        if(window.confirm("確定刪除嗎？") == true){
            const res = await axios.put("http://localhost/PHP/cart/deletecart.php", { id: id })
            // .then(function(response) {
            //     console.log(response);
            // }); 
            this.props.func();
        }
    }

    render() { 
        const{dish, picture ,cost ,mount} =this.props.cart ||{};
        const sumPrice = mount* parseInt(cost);
        return (
            <React.Fragment>
                <div className='menutail row'>
                    {/* 點餐內容 */}
                    <div className="col-1 cart-food-sp sp1'"><span className="close" onClick={this.doDelete}>X</span></div>
                    <div className='col-2 cart-food-sp sp1'><img src={picture} alt={dish} style={{height:'100%'}} /></div>
                    <div className='col-3 cart-food-sp sp2'>{dish}</div>
                    <div className='col-2 cart-food-sp'>{cost}</div>

                    <div className='col-2 cart-food-sp'>
                        <input type="number" defaultValue={mount} className='text-right w-25'  />
                    </div>

                    <output className='col-2 cart-food-sp sp3' id='sum'>{sumPrice}</output>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Cartcard;