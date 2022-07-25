import React, { Component, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../components item/navbar';
import '../css/register.css';
import $ from "jquery";

function CompleteResetPwd(){ 
    //http://localhost:80/forgetpassword/resetpassword/create-new-passwordcopy.php
    // const [result, setResult] = useState("");
    // $(function(){
    //     window.onload=function(){
    //         $.getJSON("reset-password-validatorcopy.php",function(data){
    //            alert(data.num);
    //          })
    //      }
    //    });


        return (
            <React.Fragment>
                <Navbar />
                <br /><br /><br /><br /><br />
                <div id='registerform'>
                    <form className="form-signin shadow registerformin" id='registerformin'
                    action='http://localhost:80/ourPHPFinalproject/kangProject/forgetpassword/reset-password-validatorcopy.php' method='POST' >
                        <h1 className="h3 mb-3 font-weight-normal">您已完成重設密碼</h1><br /> 
                        <h6>請點選按鈕返回登入頁，並重新登入</h6>



                        <NavLink to="/login3">
                            <button className="btn btn-lg btn-danger btn-block mt-4" type="submit">返回登入頁</button>
                        </NavLink>
                    </form>
                </div>
                
            </React.Fragment>
)};

 
export default CompleteResetPwd;