import React from 'react';
import Navbar from "../always used/navbar";
import '../css/register.css';
import $ from 'jquery';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons/faCircleCheck';

var upwhere = window.location.href;

function Register2() {
    const [result, setResult] = useState("");

    const reschkButton = () => {
        var chkNumber = Math.floor(Math.random() * 10000);
        // alert(chkNumber);
        $('#chkmesg').text(chkNumber);
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        var correctNumber = $('#chkmesg').text();
        var inputChknumber = $('#reschknumber').val()
        // alert(correctNumber);

        // console.log(chkNumber);
        if (inputChknumber != correctNumber) {
            alert("驗證碼錯誤!");
            // break;
        }
        else {
            const form = $(e.target);
            $.ajax({
                type: "POST",
                url: form.attr("action"),
                data: form.serialize(),
                success(data) {
                    setResult(data);
                    alert(data);
                    localStorage.setItem('upwhere', upwhere);
                    window.location="http://localhost:3000/login1";
                }
            })
        }
        // console.log("hi");

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
                    {/* account */}
                    <input id="inputEmail" name='inputEmail' type="email" className="form-control" placeholder="電子郵件" required autoFocus />

                    <div className="container my-0">
                        <div className='row mb-2'>
                            {/* 驗證碼 */}
                            <input type="text" id="reschknumber" name='reschknumber' className="form-control col-7" placeholder="驗證碼" required autoFocus />
                            <button onClick={reschkButton} className='btn btn-primary btn-block col-5'><small>發送驗證碼</small></button>
                            <div id='chkconfirm' style={{ color: 'green', height: '15px', visibility: 'hidden' }} ><FontAwesomeIcon icon={faCircleCheck} /></div>

                        </div>
                        <div className='row'>
                            {/* firstName */}
                            <input type="text" id="inputFirstname" name="inputFirstname" className="form-control col-6" placeholder="姓" required autoFocus />
                            {/* lastName */}
                            <input type="text" id="inputLastname" name="inputLastname" className="form-control col-6" placeholder="名" required autoFocus />
                        </div>
                    </div>
                    {/* tel */}
                    <input type="text" id="phoneNumber" name="phoneNumber" className='btn-block form-control' placeholder='手機號碼' required autoFocus />
                    {/* password */}
                    <input type="password" id="password" name="password" className="form-control" placeholder="密碼" required autoFocus />
                    <div id="chkmesg" className='h6' style={{ color: 'red', height: '10px' }}></div>
                    <button className="btn btn-lg btn-danger btn-block mt-4" type="submit">建立個人帳戶</button>
                </form>
            </div>

        </React.Fragment>
    )
}

export default Register2;