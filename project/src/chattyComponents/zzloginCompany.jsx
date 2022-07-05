import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Navbar from '../always used/navbar';

import '../css/signin.css';

class LoginCompany extends Component {
    state = {}

    componentDidMount() {
        var url = "http://localhost:3000/";
        var account = localStorage.getItem('account');
        // console.log(uId);
        if (account) {
            //登入狀態，不能連去登入頁
            window.location = url;
            // window.history.back()
            // $('#loginin').hide();
        }
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <br /><br /><br /><br />
                <form id='loginCompany' className="form-signin form-top">
                    <h1 className='shadow text-center p-2 mb-4'><strong>廠商 登入</strong></h1>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                    
                    <div className='mt-3'>
                        <NavLink to="/register"><button className='btn btn-success'>註冊</button></NavLink>
                        <div className='float-right'>
                            <NavLink to="/forgotpwd">
                                <button className='btn btn-warning mr-2' 
                                    onClick={this.dochangelogpage}>忘記密碼</button>
                            </NavLink>
                            <button className="btn btn-success" type="submit">登入</button>
                        </div>
                    </div>
                    <hr />
                </form>
            </React.Fragment>
        );
    }
}

export default LoginCompany;