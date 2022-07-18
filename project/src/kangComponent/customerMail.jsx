import React, { Component } from 'react';
import $ from "jquery";
import "../css/CustomerMail.css";
import ReCAPTCHA from "react-google-recaptcha";

class CustomerMail extends Component {
    state = {  } 

    constructor(props){
        super(props);
        this.state ={isVerified:false}
        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleOnChange(value){
        console.log("Captcha value:", value);
        this.setState({isVerified:true})
    }


    buttonOnclick(){
        $("#validationForm").submit(function(event) {
            // event.preventDefault();
            var name = $("#email-name").val();
            var email = $("#email-address").val();
            var pass1 = $("#pass1").val();
            var pass2 = $("#pass2").val();
            var message = $("#mail-message").val();
            var submit = $("#submitButton").val();
      
      
            $("#error").load("mail.php", {
              name: name,
              email: email,
              pass1: pass1,
              pass2: pass2,
              message: message,
              submit: submit,
      
            });
      
          });
    }

    render() { 
        return (
            <div id="container">
            <form id="validationForm"  action="http://localhost/try/mail.php" method="post">
                {/* 注意路徑ㄚㄚㄚㄚ ㄚㄚㄚㄚ */}
            <label htmlFor="whyformail">來函主旨</label>
              <select name="whyformail" id="whyformail" className="input-style input-width" >
                <option value="question" disabled selected>請選擇您的問題</option>
                <option value="成為合作店家或外送員">成為合作店家或外送員</option>
                <option value="投訴店家或送貨員">投訴店家或送貨員</option>
                <option value="相關客服案件">相關客服案件</option>
              </select>

              <label htmlFor="email-name">姓名</label>
              <input id="email-name" className="input-style input-width" type="text" name="name" placeholder="請輸入您的姓名" />
              <label htmlFor="email-gender">性別</label>
              <select name="gender" id="mail-gender" className="input-style">
                <option value="male">先生</option>
                <option value="male">女士</option>
              </select>
        
              <label htmlFor="email-address">電子郵箱</label>
              <input id="email-address" className="input-style input-width" type="text" name="email" placeholder="請輸入您的郵箱" />
              <label htmlFor="tel">電話</label>
              <input id="tel" className="input-style input-width" type="text" name="tel" placeholder="請輸入您的電話號碼" />
              <label htmlFor="file">附件</label>
              <input id="file" className="input-style input-width" type="file" name="file" placeholder="如有需要請提供相關文件" 
              style={{border:"none"}}/>
        
        
        
            
              <textarea name="message" id="mail-message" cols="8" rows="8" className="input-style"
              placeholder='請詳細說明來信原因，以方便客服人員回覆'></textarea><br/>


              <ReCAPTCHA
                sitekey="6LebU_4gAAAAAEs84WRN-WASF9dHGW5r_Vn2tZlh"
                onChange={this.handleOnChange}
                style={{width:"510px"}}
               /> <br/>
              <div className="customerMail">感謝您寶貴的意見，我們將儘速回復您的訊息，謝謝。</div><br/>

              <button id="submitButton" className="input-style" type="submit" name="submit" onClick={this.buttonOnclick}
               disabled={!this.state.isVerified}
              >
                發送意見
              </button>

            </form>
            <div id="error"></div>
          </div>
        
        );
    }
}
 
export default CustomerMail;