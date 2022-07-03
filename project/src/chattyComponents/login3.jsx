import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGoogle, faApple  } from '@fortawesome/free-brands-svg-icons';

import Navbar from '../always used/navbar';

import '../css/signin.css';

class Login3 extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <br /><br /><br />
                <form className="form-signin form-top mt-sm-2" action='http://localhost:8000/checkAccount.php' method='post'>
                    {/* <img className="mb-4" src="../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" /> */}
                    {/* <h1 className="h3 mb-3 font-weight-normal">歡迎！<br /> <small><NavLink to="/register">註冊</NavLink>或登入</small></h1> */}
                    <h1 className='shadow text-center p-2 mb-4'><strong>用戶 登入</strong></h1>
                    <label htmlFor="inputEmail" className="sr-only" >Email address</label>
                    <input type="email" name="account" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                    <label htmlFor="inputPassword" className="sr-only" >Password</label>
                    <input type="password" id="inputPassword" name="passwd" className="form-control" placeholder="Password" required />
                    {/* <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div> */}
                    
                    <div className='mt-3'>
                        <NavLink to="/register"><button className='btn btn-success'>註冊</button></NavLink>
                        <div className='float-right'>
                            <NavLink to="/forgotpwd">
                                <button className='btn btn-warning mr-2'>忘記密碼</button>
                            </NavLink>
                            <button className="btn btn-success" type="submit">登入</button>
                        </div>
                    </div>
                    <hr />
                    
                    {/* <p className="mt-5 mb-3 text-muted">&copy; 2017-2021</p> */}
                </form>

                <div className="form-signin form-bottom">
                    {/* <b>使用第三方登入</b><br /> */}
                    <button className='btn btn-lg btn-primary btn-block shadow '><FontAwesomeIcon icon={faFacebookSquare} className="mr-2"/> Facebook</button><br />
                    <button className='btn btn-lg btn-light btn-block shadow'><FontAwesomeIcon icon={faGoogle} className="mr-4" /> Google</button><br />
                    <button className='btn btn-lg btn-dark btn-block shadow'><FontAwesomeIcon icon={faApple} className="mr-2" /> 以apple帳戶登入</button><br />
                </div>

                
                {/* <div className='container'>
                    <h1>login test</h1>
                    <NavLink to="/index">index page</NavLink><br />
                    <NavLink to="/login">login page</NavLink><br />
                    <NavLink to="/register">register page</NavLink><br />
                    <NavLink to="/cart">cart page</NavLink><br />
                    <NavLink to="/payment">payment page</NavLink><br />
                </div> */}
            
            </React.Fragment>

        );
    }
}

export default Login3;