import React, { Component } from 'react';
import Axios from 'axios';
import StoreCard from '../components item/storeCards';
import CheckCart from '../components item/checkCart';


class StorePage extends Component {
    state = {
        menuList: [],
        restaurantName: '',
        cartNum:0
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
        Axios.get("http://localhost//ourPHPFinalproject/ChtProject/cart/getallcart1.php").then((res) => {
            console.log(res.data);
            const carts = res.data || [] ;
            const cartNum = carts.map(cart => parseInt(cart.mount)).reduce((a,value) => a+value ,0);
            console.log(cartNum);
            this.setState({cartNum: cartNum});
            // console.log(carts[0]);
        })
    }

    render() {
        return (
            <div className='container'>
                <span>{this.state.restaurantName}</span>
                <CheckCart cartNum={this.state.cartNum} />
                {this.state.menuList.map((p) => {
                    return (
                        <div className="column is-3 col-6" key={p.menuItemId}>
                            <StoreCard
                                StoreCard={p} />
                        </div>
                    )

                })}
            </div>
        );
    }
}

export default StorePage;