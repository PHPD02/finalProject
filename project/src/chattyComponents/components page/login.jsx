import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faStore } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import $ from 'jquery';

import '../css/signin.css';

import Navbar from '../components item/navbar';

var fromwhere = localStorage.getItem('upwhere');
var getemail = localStorage.getItem('email');
var getlastname = localStorage.getItem('lastname');

class Login1 extends Component {
    state = {}
    // 廠商點擊
    companyClick = () => {
        $('#login1').hide();
        $('#loginCompany').fadeIn();
    }
    // 消費者點擊
    comsumerClick = () => {
        $('#login1').hide();
        // $('#loginComsumer').attr('style','display:block');
        $('#loginComsumer').fadeIn();
    }
    // 廠商提交登入表單
    handleSubmitCompany = (e) => {
        e.preventDefault();
        const form = $(e.target);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data:form.serialize(),
            success(data){
                // console.log(data);
                if (parseInt(data) < 0) {
                    // localStorage.setItem('uId', data);
                    alert("something wrong or password worong")
                }
                else {
                    alert("Welcome!");
                    // alert(data);
                    var sqlemail = JSON.parse(data).email;
                    var sqlname = JSON.parse(data).name;
                    var sqladdress= JSON.parse(data).address;
                    // console.log(JSON.parse(data).id);
                    localStorage.setItem('email', sqlemail);
                    localStorage.setItem('companyname', sqlname);
                    localStorage.setItem('companyaddr', sqladdress);
                    
                    /////廠商登入後須到後台不留在前台
                    window.location = "http://localhost:3000/";
                }
            }
        })
    }
    // 消費者提交登入表單
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
                    alert("Welcome!");
                    // alert(data);
                    var sqlemail = JSON.parse(data).email;
                    var sqlfirstname = JSON.parse(data).firstName;
                    var sqllastname = JSON.parse(data).lastName;
                    // console.log(JSON.parse(data).id);
                    localStorage.setItem('email', sqlemail);
                    localStorage.setItem('firstname', sqlfirstname);
                    localStorage.setItem('lastname', sqllastname);
                    // window.location= url;
                    // window.location = "http://localhost:3000/index";
                    // var fromwhere = localStorage.getItem('upwhere');
                    // if(fromwhere){
                    //     if(fromwhere = "http://localhost:3000/register2" || "http://localhost:3000/register" ){
                    //         window.location = "http://localhost:3000/";
                    //     }
                    //     window.location= fromwhere;
                    // }
                    // else{
                    //     window.location = "http://localhost:3000/";
                    // }

                    // 登入成功到首頁 //以上判斷有空再調整
                    window.location = "http://localhost:3000/";
                }

            }
        })
    }

    componentDidMount() {
        var fromwhere = localStorage.getItem('upwhere');
        var url = "http://localhost:3000/";
        if (getemail) {
            //登入狀態，不能連去登入頁
            window.location = url;
        }

        // 要再調整目前無作用??
        var urlfrom = "http://localhost:3000/registerComsumer"
        var urlfrom2 = "http://localhost:3000/registerCompany"
        if (fromwhere == urlfrom2) {
            // 廠商註冊完進到登入畫面
            $('#login1').hide();
            // $('#loginComsumer').attr('style','display:block');
            $('#loginCompany').fadeIn();
        }
        if (fromwhere == urlfrom) {
            // 消費者註冊完進到登入畫面
            $('#login1').hide();
            // $('#loginComsumer').attr('style','display:block');
            $('#loginComsumer').fadeIn();
        }
    }
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <br /><br /><br />
                {/* 廠商 or 消費者 */}
                <div id="login1" className="container">
                    <h1 className='text-center my-5 border-bottom'>請選擇您是廠商或用戶</h1>

                    <div className="row mt-5">
                        <div className="col text-center">
                            {/* <NavLink to="/login2"> */}
                            <button className='btn btn-light p-5' onClick={this.companyClick}>
                                <FontAwesomeIcon icon={faStore} className="fa-8x" /> <br />
                                <h4 className='mt-4'>合作商家登入</h4>
                            </button>
                            {/* </NavLink> */}
                        </div>

                        <div className="col text-center">
                            {/* <NavLink to="/login3"> */}
                            <button className='btn btn-light p-5' onClick={this.comsumerClick}>
                                <FontAwesomeIcon icon={faUserAlt} className="fa-8x" /> <br />
                                <h4 className='mt-4'>消費者登入</h4>
                            </button>
                            {/* </NavLink> */}
                        </div>

                    </div>
                </div>

                {/* 廠商登入 */}
                <div id="loginCompany" style={{ display: 'none' }}>
                    <form className="form-signin form-top"
                        action='http://localhost:80/PHP/loginCompany/checkCompanyAccount.php' method='post'
                        onSubmit={(event) => this.handleSubmitCompany(event)} >
                        <h1 className='shadow text-center p-2 mb-4'><strong>廠商 登入</strong></h1>
                        {/* 廠商email */}
                        <input type="email" id="companyInputEmail" name='companyInputEmail' className="form-control" placeholder="Email address" required autoFocus />
                        {/* 廠商password */}
                        <input type="password" id="companyInputPassword" name="companyInputPassword" className="form-control" placeholder="Password" required />

                        <div className='mt-3'>
                            <NavLink to="/registerCompany"><button className='btn btn-success'>註冊</button></NavLink>
                            <div className='float-right'>
                                <NavLink to="/forgotpwd">
                                    <button className='btn btn-warning mr-2'>忘記密碼</button>
                                </NavLink>
                                <button className="btn btn-success" type="submit">登入</button>
                            </div>
                        </div>
                        <hr />
                    </form>
                </div>

                {/* 消費者登入 */}
                <div id="loginComsumer" style={{ display: 'none' }}>
                    <form className="form-signin form-top mt-sm-2"
                        action='http://localhost:80/PHP/loginComsumer/checkAccount.php' method='post'
                        onSubmit={(event) => this.handleSumbit(event)}>
                        <h1 className='shadow text-center p-2 mb-4'><strong>用戶 登入</strong></h1>
                        {/* userEmail */}
                        <input type="email" id="inputEmail" name="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                        {/* userPassword */}
                        <input type="password" id="inputPassword" name="inputPassword" className="form-control" placeholder="Password" required autoFocus />

                        <div className='mt-3'>
                            <NavLink to="/registerComsumer"><button className='btn btn-success'>註冊</button></NavLink>
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

export default Login1;