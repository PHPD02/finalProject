import React, { Component } from 'react';
import axios from 'axios';
// import $ from 'jquery';
// import dish1 from '../imgs/shop1.jpg'
import '../css/cart.css';

class Cartcard extends Component {
    state = { } 

    doDelete = async() => {
        const { id } = this.props.cart;
        console.log(this.props.cart);
        if(window.confirm("確定刪除嗎？") == true){
            const res = await axios.put("http://localhost/PHP/cart/deletecart.php", { id: id })
            // .then(function(response) {
            //     console.log(response);
            // }); 
            this.props.func();
        }
    }

    changeM = async(e) => {

        // console.log(this.props.cart);
        const { menuItemId} = this.props.cart;

        this.props.cart.mount = e.target.value <1? 1:e.target.value;
        this.setState({});

        const res = await axios.post("http://localhost/PHP/cart/getcart.php", { menuItemId: menuItemId });
        const carts = res.data;
        console.log(carts.mount);
        // const cart = carts[0]
        carts.mount = e.target.value;

        await axios.put(`http://localhost/PHP/cart/putcart.php`, carts);

    }

    render() { 
        const{dish, picture ,cost ,mount} =this.props.cart ||{};
        const sumPrice = mount* parseInt(cost);
        return (
            <React.Fragment>
                <div className='menutail row'>
                    {/* 點餐內容 */}
                    
                    <div className='col-2 cart-food-sp sp1'><img src={picture} alt={dish} style={{height:'100%'}} /></div>
                    <div className='col-3 cart-food-sp sp2'>{dish}</div>
                    <div className='col-2 cart-food-sp'>{cost}</div>

                    <div className='col-2 cart-food-sp' id='number'>
                        <input type="number" className='text-right w-50'  value={mount} onChange={this.changeM} />
                    </div>

                    <output className='col-2 cart-food-sp sp3' id='sum'>{sumPrice}</output>
                    <div className="col-1 cart-food-sp sp1'"><span className="close" onClick={this.doDelete}><i class="fa fa-trash-o"></i></span></div>
                </div>
                
            </React.Fragment>
        );
    }
}
 
export default Cartcard;