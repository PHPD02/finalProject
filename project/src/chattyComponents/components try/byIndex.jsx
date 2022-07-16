import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Navbar from '../components item/navbar';

class byIndex extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <Navbar />
                <br /><br /><br /><br />
                <div className='container'>
                    <h1>Index test</h1>
                    {/* <NavLink to="/index">index page</NavLink><br />
                    <NavLink to="/login1">login1 page</NavLink><br /> */}
                    {/* <NavLink to="/login2">login2 page</NavLink><br />
                    <NavLink to="/login3">login3 page</NavLink><br /> */}
                    {/* <NavLink to="/register">register page</NavLink><br />
                    <NavLink to="/forgotpwd">forgotpwd page</NavLink><br />
                    <NavLink to="/cart">cart page</NavLink><br />
                    <NavLink to="/payment">payment page</NavLink><br />
                    <NavLink to="/storeCards">storeCards</NavLink><br />
                    <NavLink to="/storePage">storePage</NavLink><br /> */}
                    {/* <NavLink to="/forgotpwd">forgotpwd page</NavLink><br />
                    <NavLink to="/cart">cart page</NavLink><br />
                    <NavLink to="/payment">payment page</NavLink><br /> */}
                    <div>HI! {localStorage.getItem('lastname')}</div>
                </div>
            </React.Fragment>
            
        );
    }
}
 
export default byIndex;