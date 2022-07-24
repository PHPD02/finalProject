import React, { Component, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../../components/repeatability/Navbar';
import '../css/register.css';
// import $ from "jquery";

function Forgotpwd(){ 

    // const [result, setResult] = useState("");

    // const handleSumbit = (e) => {
    //     e.preventDefault();
    //     const form = $(e.target);
    //     $.ajax({
    //         type: "POST",
    //         url: form.attr("action"),
    //         data: form.serialize(),
    //         success(data) {
    //             setResult(data);
    //         },
    //     });
    // };


        return (
            <React.Fragment>
                <div className="backimg">
                <Navbar />
                <br /><br />
                <div id='registerform'>
                    <form className="form-signin registerformin p-5" id='registerformin'
                    style={{
                        // backgroundColor:'black'
                        boxShadow:'8px 8px 10px 10px rgba(49, 166, 150 ,0.5)'
                    }}
                    action='http://localhost:80/forgetpassword/resetpassword/reset-request.php' method='post' >
                    {/* //  onSubmit={(event) => handleSumbit(event)}> */}
                        <h1 className="h3 mb-3 font-weight-normal">你的email是？</h1><br /> 
                        <h6>輸入你的email，我們將發送重設密碼連結</h6>
                        <label htmlFor="inputEmail" className="sr-only">電子郵件</label>

                        {/* <h6>{result}</h6> */}

                        <input type="email" id="inputEmail" className="form-control" placeholder="電子郵件" required autoFocus 
                        name="email"/>
                    
                        <button className="btn btn-lg btn-danger btn-block mt-4" type="submit"
                         name='reset-requset-submit'>重設密碼</button>
                        <NavLink to="/login">
                            <button className="btn btn-lg btn-danger btn-block mt-4" type="submit">返回登入頁</button>
                        </NavLink>
                    </form>
                </div>
                </div>
                
            </React.Fragment>
)};

 
export default Forgotpwd;