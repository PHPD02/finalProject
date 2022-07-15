import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class CheckCart extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div>
                    <NavLink to="/cart">
                        <div onClick={this.goCart}>
                            <i className='fas fa-shopping-cart'></i>
                            <span>({this.props.cartNum})</span>
                        </div>
                    </NavLink>
                </div>

            </React.Fragment>
        );
    }
}

export default CheckCart;