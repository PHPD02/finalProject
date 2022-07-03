import React from 'react';
import Navbar from "../always used/navbar";
import '../css/register.css';
import $ from 'jquery';
import { useState } from 'react';

function Register2() {
    const [result, setResult] = useState("");

    const handleSumbit = (e) => {
        e.preventDefault();
        const form = $(e.target);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                setResult(data);
            }
        })
    }

    
    return (
        <React.Fragment>
                <Navbar />
                <br /><br /><br /><br />
                <div id='registerform'>
                    <form className="form-signin shadow" id='registerformin' encType="multipart/form-data"  
                    method='POST' action='http://localhost:8000/register.php'
                    onSubmit={(event) => handleSumbit(event)}>
                        <h1 className="h3 mb-3 font-weight-normal">讓我們開始註冊吧</h1>
                        <h6>開始建立你的帳戶</h6>
                        <span id="mesg">{result}</span><br />
                        <label htmlFor="inputEmail" className="sr-only">電子郵件</label>
                        <input htmlFor="inputEmail" type="email" id="account" name='account' className="form-control" placeholder="電子郵件" required autoFocus />
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
    )
}

export default Register2;