import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import Navbar from '../always used/navbar';
import '../css/register.css';
import './re.js';





class Register extends Component {
    state = {  } 

    

    // checkNewAccount = () =>{
    //     var xhttp = new XMLHttpRequest();
    //     var account = document.getElementById('account').value;
    //     xhttp.open("GET", "isNewAccount.php?account=" + account, true);

    //     xhttp.onreadystatechange = function(){
    //         if (xhttp.readyState == 4 && xhttp.status == 200){
    //             if (xhttp.responseText != 0){
    //                 console.log(xhttp.responseText);
    //                 // 帳號重複
    //                 document.getElementById('mesg').innerHTML = '帳號重複';
    //             }else{
    //                 document.getElementById('mesg').innerHTML = '帳號可以';
    //             }
    //         }
    //     };
        
    //     xhttp.send();
    // }

    render() { 
        return (
            <React.Fragment>
                <Navbar />
                <br /><br /><br /><br />
                <div id='registerform'>
                    <form className="form-signin shadow" id='registerformin' encType="multipart/form-data"  method='POST' action='http://localhost:8000/register.php'>
                        <h1 className="h3 mb-3 font-weight-normal">讓我們開始註冊吧</h1><br /> <span id="mesg"></span><br />
                        <h6>開始建立你的帳戶</h6>
                        <label htmlFor="inputEmail" className="sr-only">電子郵件</label>
                        <input type="email" id="account" name='account' onChange={this.checkNewAccount} className="form-control" placeholder="電子郵件" required autoFocus />
                        <div className="container my-4">
                            <div className='row'>
                                <input type="text" id="inputFirstname" className="form-control col-6" placeholder="姓" required autoFocus />
                                <input type="text" id="inputLastname" name="realname" className="form-control col-6" placeholder="名" required autoFocus />
                            </div>
                        </div>

                        <input type="password" id="passwd" name="passwd" className="form-control" placeholder="密碼" required autoFocus />
                        <button className="btn btn-lg btn-danger btn-block mt-4" type="submit">建立帳戶</button>
                    </form>
                </div>
                
            </React.Fragment>
        );
    }
}
 
export default Register;