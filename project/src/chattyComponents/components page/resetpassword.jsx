import React, { Component, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../components item/navbar';
import '../css/register.css';
import $ from "jquery";

function Resetpassword(){ 
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
                    action='http://localhost:80/forgetpassword/resetpassword/reset-password-validatorcopy.php' method='POST' >
                        <h1 className="h3 mb-3 font-weight-normal">重設密碼</h1><br /> 
                        <label htmlFor="inputEmail" className="sr-only">電子郵件</label>



                        <input type="password"  name="pwd" className="form-control" placeholder="請輸入密碼" />
                        <input type="password"  name="pwd-repeat" className="form-control" placeholder="請再次輸入密碼" />


                        <button className="btn btn-lg btn-danger btn-block mt-4" type="submit"
                         name='reset-password-submit'>重設密碼</button>
                    </form>
                </div>
                
            </React.Fragment>
)};

 
export default Resetpassword;