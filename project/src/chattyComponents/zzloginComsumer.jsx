import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import $ from 'jquery';

import Navbar from '../always used/navbar';

import '../css/signin.css';

class LoginComsumer extends Component {

    state = {}

    handleSumbit = (e) => {
        e.preventDefault();
        // localStorage.setItem('uId', $('#inputEmail').val()) 
        const form = $(e.target);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                // setResult(data);
                if (parseInt(data) < 0) {
                    // localStorage.setItem('uId', data);
                    alert("something wrong or password worong")
                }
                else {
                    // alert("Welcome!");
                    alert(data);
                    // var account = JSON.parse(data).account;
                    // console.log(JSON.parse(data).id);
                    // localStorage.setItem('account', account);
                    // window.location= url;
                    // window.history.back();
                    // window.history.back();


                }
                // alert(data);

                // console.log($('#inputEmail').val());
                // localStorage.setItem(setuIdNumber(uId));
            }
        })
    }

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
                <br /><br /><br />
                <div id="loginComsumer">
                    <form className="form-signin form-top mt-sm-2"
                        action='http://localhost:8000/checkAccount.php' method='post'
                        onSubmit={(event) => this.handleSumbit(event)}>
                        <h1 className='shadow text-center p-2 mb-4'><strong>用戶 登入</strong></h1>
                        <label htmlFor="inputEmail" className="sr-only" >Email address</label>
                        <input type="email" name="account" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                        <label htmlFor="inputPassword" className="sr-only" >Password</label>
                        <input type="password" id="inputPassword" name="passwd" className="form-control" placeholder="Password" required />

                        <div className='mt-3'>
                            <NavLink to="/register2"><button className='btn btn-success'>註冊</button></NavLink>
                            <div className='float-right'>
                                <NavLink to="/forgotpwd">
                                    <button className='btn btn-warning mr-2'>忘記密碼</button>
                                </NavLink>
                                <button className="btn btn-success" type="submit">登入</button>
                            </div>
                        </div>
                        <hr />
                    </form>

                    <div className="form-signin form-bottom">
                        {/* <b>使用第三方登入</b><br /> */}
                        <button className='btn btn-lg btn-primary btn-block shadow '><FontAwesomeIcon icon={faFacebookSquare} className="mr-2" /> Facebook</button><br />
                        <button className='btn btn-lg btn-light btn-block shadow'><FontAwesomeIcon icon={faGoogle} className="mr-4" /> Google</button><br />
                        <button className='btn btn-lg btn-dark btn-block shadow'><FontAwesomeIcon icon={faApple} className="mr-2" /> 以apple帳戶登入</button><br />
                    </div>

                </div>


            </React.Fragment>
        );
    }
}

export default LoginComsumer;