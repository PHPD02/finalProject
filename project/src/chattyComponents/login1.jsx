import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faStore } from '@fortawesome/free-solid-svg-icons'

import '../css/login.css';


import Navbar from '../always used/navbar';

class Login1 extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <Navbar />
                <br /><br /><br />
                <div className="container">
                    <h1 className='text-center my-5 border-bottom'>選擇廠商或用戶</h1>

                    <div className="row mt-5">
                        <div className="col text-center">
                            <NavLink to="/login2">
                                <button className='btn btn-light p-5'>
                                    <FontAwesomeIcon icon={faStore} className="fa-8x"/> <br />
                                    <h4 className='mt-4'>合作商家登入</h4>
                                </button>
                            </NavLink>
                        </div>

                        <div className="col text-center">
                            <NavLink to="/login3">
                                <button className='btn btn-light p-5'>
                                    <FontAwesomeIcon icon={faUserAlt} className="fa-8x"/> <br />
                                    <h4 className='mt-4'>消費者登入</h4>
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
                
            </React.Fragment>
            
        );
    }
}
 
export default Login1;