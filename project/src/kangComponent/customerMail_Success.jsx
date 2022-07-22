import React, { Component } from 'react';
import Logo from "../img/logo.png";
import "../css/CustomerMail.css"


class CustomerMailSuccess extends Component {
    state = {  } 
    render() { 
        return (
            
            <div id="container">
            <div className='success-wrapper'>
                <p>感謝您的來信</p>
                <img src={Logo} alt="" />
                <p>我們將儘快回覆您</p>
                <button id="backtoindex" className="input-style"  name="submit" >
                <a href='http://localhost:3000/foodpandapage' style={{color:"white"}}>返回首頁</a>
              </button>

            </div>
            <form id="validationForm"  action="http://localhost:80/ourPHPFinalproject/kangProject/sendEmail/mail.php" method="post" disabled>
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
              placeholder='請詳細說明來信原因，以方便客服人員回覆'></textarea>
        
              <div className="customerMail">感謝您寶貴的意見，我們將儘速回復您的訊息，謝謝。</div><br/><br/>
              <button id="submitButton" className="input-style" type="submit" name="submit" onClick={this.buttonOnclick}>
                發送意見
              </button>
            </form>
            <div id="error"></div>
          </div>

        );
    }
}
 
export default CustomerMailSuccess;