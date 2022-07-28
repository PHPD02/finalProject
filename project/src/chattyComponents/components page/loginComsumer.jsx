import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { faFacebookSquare, faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import $ from 'jquery';
import '../css/signin.css';
import GoogleLogin from '../components item/useGoogleLogin';
import Navbar from '../../components/repeatability/Navbar';

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
                    
                    // alert(data);
                    var sqluid = JSON.parse(data).uid;
                    var sqlemail = JSON.parse(data).email;
                    var sqlfirstname = JSON.parse(data).firstName;
                    var sqllastname = JSON.parse(data).lastName;
                    var sqltel = JSON.parse(data).tel;
                    var sqladdr = JSON.parse(data).addr;
                    // console.log(JSON.parse(data).id);
                    localStorage.setItem('uid', sqluid);
                    localStorage.setItem('email', sqlemail);
                    localStorage.setItem('firstname', sqlfirstname);
                    localStorage.setItem('lastname', sqllastname);
                    localStorage.setItem('telphone', sqltel);
                    localStorage.setItem('addr', sqladdr);
                    alert("Welcome!"+ sqllastname);
                    window.location = "http://localhost:3000/";
                }

            }
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="backimg">
                    <Navbar />
                <div id="loginComsumer" 
                // style={{ display: 'none' }}
                >
                    {/* <div
                            style={{backgroundColor:'black'}}> */}
                    <form className="form-signin form-top mt-sm-4 p-5"
                        // style={{backgroundColor:'black'}}
                        style={{
                            // backgroundColor:'black'
                            boxShadow:'8px 8px 10px 10px rgba(49, 166, 150 ,0.5)'
                        }}
                        action='http://localhost:80//ourPHPFinalproject/ChtProject/loginComsumer/checkAccount.php' method='post'
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
                        <div className="form-signin form-bottom">
                            {/* <b>使用第三方登入</b><br /> */}
                            {/* <label for='gl' className='btn btn-lg btn-light btn-block shadow mt-4 p-1' > */}
                            <GoogleLogin id='gl' className='btn btn-lg'/>
                                
                            {/* </label> */}
                            <button className='btn btn-lg btn-primary btn-block shadow mt-4 p-1'><FontAwesomeIcon icon={faFacebookSquare} className="mr-2" /> Facebook</button><br />
                            {/* <button className='btn btn-lg btn-light btn-block shadow'><FontAwesomeIcon icon={faGoogle} className="mr-4" /> Google</button><br /> */}
                            <button className='btn btn-lg btn-dark btn-block shadow p-1'><FontAwesomeIcon icon={faApple} className="mr-2" /> 以apple帳戶登入</button><br />
                        </div>
                    </form>


                    {/* </div> */}

                </div>
                </div>
            </React.Fragment>
        );
    }
}

export default LoginComsumer;