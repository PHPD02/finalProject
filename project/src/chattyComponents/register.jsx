import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import Navbar from '../always used/navbar';
import '../css/register.css';
import './re.js';
import $ from "jquery";





class Register extends Component {
    state = { 
        mesg:""
     } 

    // 檢查帳號是否重複
    btnGetFromOrigin_click = () => {
        var account = document.getElementById('account').value;
        // $.get("http://localhost:8000/isNewAccount.php?account=" + account, function(data){$("#mesg").text(data);});
        $.post("http://localhost:8000/isNewAccount.php", {account}, function(data){$("#mesg").text(data);});
    }

    
        handleSumbit = (e) => {
            e.preventDefault();
            const form = $(e.target);
            $.ajax({
                type: "POST",
                url: form.attr("action"),
                data: form.serialize(),
                // 成功回傳data
                success(data) {
                    this.setState({mesg: data})
                },
            });
        };
    

    // doDataback = (data) => {
    //     this.setState({mesg: data});
    //     // $("#mesg").text(data);
    // }
    

    // ckaccount = () => {
    //     var account = document.getElementById('account').value;
    //     $.post("http://localhost:8000/register.php", {account}, function(data){$("#mesg").text(data);});
    // }
    // function btnGetFromMonster_click() {
    //     $.get("http://127.0.0.1/Lab/Demo_SameOriginPolicy/getTime_2.php", 
    //             doDataback);
    // }
    
    // doDataback(data){
    //     $("#mesg").text(data);
    // }
    

    

    // cha = () => {
    //     this.setState({mesg: "我我變了"});
    // }

    render() { 
        return (
            <React.Fragment>
                <Navbar />
                <br /><br /><br /><br />
                <div id='registerform'>
                    <form className="form-signin shadow" id='registerformin' encType="multipart/form-data"  method='POST' action='http://localhost:8000/register.php'>
                        <h1 className="h3 mb-3 font-weight-normal">讓我們開始註冊吧</h1>
                        <h6>開始建立你的帳戶</h6>
                        <span id="mesg">{this.state.mesg}</span><br />
                        <label htmlFor="inputEmail" className="sr-only">電子郵件</label>
                        <input htmlFor="inputEmail" type="email" id="account" name='account' onChange={this.btnGetFromOrigin_click} className="form-control" placeholder="電子郵件" required autoFocus />
                        <div className="container my-4">
                            <div className='row'>
                                <input type="text" id="inputFirstname" className="form-control col-6" placeholder="姓" required autoFocus />
                                <input type="text" id="inputLastname" name="realname" className="form-control col-6" placeholder="名" required autoFocus />
                            </div>
                        </div>

                        <input type="password" id="passwd" name="passwd" className="form-control" placeholder="密碼" required autoFocus />
                        <button onClick={this.handleSumbit} className="btn btn-lg btn-danger btn-block mt-4" type="submit">建立帳戶</button>
                    </form>
                </div>
                
            </React.Fragment>
        );
    }
}
 
export default Register;