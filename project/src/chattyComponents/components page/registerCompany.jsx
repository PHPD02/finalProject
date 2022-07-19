import $ from "jquery";
import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons/faCircleCheck';

import Navbar from '../../components/repeatability/Navbar';
import '../css/signin.css';


var upwhere = window.location.href;

function Register() {
    const [result, setResult] = useState("");

    // 發送驗證碼
    const reschkButton = () => {
        var sendmail = $('#companyInputEmail').val();
        // var account = $('#inputEmail').val();
        if(sendmail){
            // $.post("http://localhost:80/loginComsumer/isNewAccount.php", {account}, function(data){
            //     console.log(data);
            // })
            alert('已成功發送，請至信箱確認');
        }
        // console.log(sendmail);
        $.post("http://localhost:80/PHP/sendmail/sendmail.php", {sendmail}, function(data){
            setResult(data);
            
        })

    }

    const enterChkNumber = () => {
        var correctNumber = parseInt( $('#chkmesg').text());
        var inputChknumber = parseInt( $('#companyreschknumber').val());
        // alert(correctNumber);

        // console.log(chkNumber);
        if (inputChknumber == correctNumber) {
            $('#chkconfirm').css("visibility",'visible') ;
            // $('#chkconfirm').fadeIn();
            // break;
        }
        if (inputChknumber != correctNumber) {
            $('#chkconfirm').css("visibility",'hidden') ;
            // break;
        }
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        var correctNumber = $('#chkmesg').text();
        var inputChknumber = $('#companyreschknumber').val()
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
                    window.location = "http://localhost:3000/login";
                }
            })
        }
        // console.log("hi");

    }
    
    return (
        <React.Fragment>
            <Navbar />
            <br /><br /><br />
            <div id='companyRegisterform'>
                <form className="form-signin shadow registerformin" id='registerformin' encType="multipart/form-data"  
                    method='POST' action='http://localhost:80/PHP/loginCompany/registerCompany.php'
                    onSubmit={(event) => handleSumbit(event)}>
                    <h6 className="h5 mb-3 font-weight-normal">歡迎與我們的合作，讓我們開始註冊吧!</h6>
                    <h6>開始建立你的帳戶</h6>
                    {/* email */}
                    <input id="companyInputEmail" name='companyInputEmail' type="email" className="form-control" placeholder="電子郵件" required autoFocus />
                    <div className="container my-0">
                        <div className='row mb-2'>
                            {/* 驗證碼 */}
                            <input type="text" id="companyreschknumber" name='companyReschknumber' className="form-control col-7" placeholder="驗證碼" 
                                onChange={enterChkNumber} required autoFocus />
                            <button onClick={reschkButton} className='btn btn-primary btn-block col-5'><small>發送驗證碼</small></button>
                            <div id='chkconfirm' style={{ color: 'green', height: '15px', visibility: 'hidden' }} ><FontAwesomeIcon icon={faCircleCheck} /></div>
                        </div>
                    </div>
                    {/* name */}
                    <input type="text" id="companyName" name="companyName" className="form-control col-12" placeholder="店名" required autoFocus />
                    {/* address */}
                    <input type="text" id="companyAddr" name="companyAddr" className="form-control col-12" placeholder="店家地址" required autoFocus />
                    {/* tel */}
                    <input type="text" id="companyTel" name="companyTel" className='btn-block form-control' placeholder='手機號碼' required autoFocus />
                    {/* password */}
                    <input type="password" id="companyPasswd" name="companyPasswd" className="form-control" placeholder="密碼" required autoFocus />
                    <div id="chkmesg" className='h6' style={{ color: 'red', height: '10px' 
                    // , visibility:'hidden'
                    }}>{result}</div>
                    <button className="btn btn-lg btn-danger btn-block mt-4" type="submit">建立商家帳戶</button>
                </form>
            </div>
            
        </React.Fragment>
    );
    
}
 
export default Register;