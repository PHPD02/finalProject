import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import '../css/signin.css';
import Navbar from '../../components/repeatability/Navbar';



class LoginCompany extends Component {
    state = {}

    handleSubmitCompany = (e) => {
        e.preventDefault();
        const form = $(e.target);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                // console.log(data);
                if (parseInt(data) < 0) {
                    // localStorage.setItem('uId', data);
                    alert("something wrong or password worong")
                }
                else {
                    alert("Welcome!");
                    var sqlcid = JSON.parse(data).id;
                    var sqlemail = JSON.parse(data).email;
                    var sqlname = JSON.parse(data).name;
                    var sqladdress = JSON.parse(data).address;

                    localStorage.setItem('cid', sqlcid);
                    localStorage.setItem('cemail', sqlemail);
                    localStorage.setItem('companyname', sqlname);
                    localStorage.setItem('companyaddr', sqladdress);

                    /////廠商登入後須到後台不留在前台
                    window.location = "http://localhost:3000/todoindex";
                }
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="backimg">
                    <Navbar />
                    <div id="loginCompany">
                        <br /><br /><br /><br />
                        <form className="form-signin p-5 "
                            style={{
                                // backgroundColor:'black'
                                boxShadow:'8px 8px 10px 10px rgba(49, 166, 150 ,0.5)'
                            }}
                            action='http://localhost:80/ourPHPFinalproject/ChtProject/loginCompany/checkCompanyAccount.php' method='post'
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
                </div>
            </React.Fragment>
        );
    }
}

export default LoginCompany;