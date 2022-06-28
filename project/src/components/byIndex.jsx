import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Navbar from '../always used/navbar';

class byIndex extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <Navbar />
                <div className='container mt-5'>
                    <h1>Index test</h1>
                    <NavLink to="/index">index page</NavLink><br />
                    <NavLink to="/login1">login1 page</NavLink><br />
                    <NavLink to="/login2">login2 page</NavLink><br />
                    <NavLink to="/login3">login3 page</NavLink><br />
                    <NavLink to="/register">register page</NavLink><br />
                    <NavLink to="/forgotpwd">forgotpwd page</NavLink><br />
                    <NavLink to="/cart">cart page</NavLink><br />
                    <NavLink to="/payment">payment page</NavLink><br />
                </div>
            </React.Fragment>
            
        );
    }
}
 
export default byIndex;