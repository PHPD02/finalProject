import React, { Component } from 'react';
import Axios from 'axios';
import StoreCard from '../components item/storeCards';
import CheckCart from '../components item/checkCart';


class StorePage extends Component {
    state = {
        menuList: [],
        restaurantName: ''
    }

    async componentDidMount() {
        // var result = await Axios.get("http://localhost:8000/todo/list");
        var result = await Axios.get("http://localhost/PHP/storeCards/getStoreItems.php");
        this.setState({
            menuList: result.data,
            restaurantName: result.data[0].restaurantName
        })
        console.log(this.state.menuList)
    }
    render() {
        return (
            <div className='container'>
                <div>{this.state.restaurantName}</div>
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