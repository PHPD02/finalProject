import React, { Component, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../components item/navbar';
import '../css/register.css';
import $ from "jquery";

function sendresetemail(){ 
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
                    <form className="form-signin shadow registerformin" id='registerformin'>
                        <h1 className="h3 mb-3 font-weight-normal">重設密碼信件已寄出</h1><br /> 
                        <h6>已將重設密碼驗證信送至您的信箱，請依照步驟完成重設</h6>



                        <NavLink to="/login">
                            <button className="btn btn-lg btn-danger btn-block mt-4" type="submit">返回登入頁</button>
                        </NavLink>
                    </form>
                </div>
                
            </React.Fragment>
)};

 
export default sendresetemail;