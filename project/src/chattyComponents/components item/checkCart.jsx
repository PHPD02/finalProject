import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class CheckCart extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>

                <NavLink to="/cart">
                    <span onClick={this.goCart}>
                        {/* <i className='fas fa-shopping-cart'></i> */}
                        <span>({this.props.cartNum})</span>
                    </span>
                </NavLink>


            </React.Fragment>
        );
    }
}

export default CheckCart;