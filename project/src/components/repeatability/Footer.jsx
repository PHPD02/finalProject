import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './css/footer.css';

class Footer extends Component {
  state = {}

  // openChange = (event) => {
  //   var e = event.target.getAttribute('class');
  //   e.document.querySelector('#emails').className = "fa fa-envelope-open-o";
  //   console.log(e);
    // if (e === 'fa fa-envelope-o fa-5x') {
    //   e = 'fa fa-envelope-open-o fa-5x'
    // } else {
    //   e = 'fa fa-envelope-o fa-5x'
    // }
    // console.log(e);
  //}

  render() {
    return (
      <React.Fragment>
        <div className="footerbackimg" id='ff'>
          <div className='container'>
            <div className='row '>
              <div className='col-4 col-sm-4 col-md-4 col-lg-4 mt-4 text-center'>
                <h5 style={{fontSize:"25px",fontWeight:"bold"}}>關於</h5>
                <li><a href='#' style={{color:"black"}}>外送夥伴品牌形象</a></li>
                <li><a href='#' style={{color:"black"}}>承攬服務條款</a></li>
                <li><a href='#' style={{color:"black"}}>隱私權政策</a></li>
              </div>
              <div className='col-4 col-sm-4 col-md-4 col-lg-4 mt-4 text-center'>
                <h5 className='text-center' style={{fontSize:"25px",fontWeight:"bold"}}>取得協助</h5>
                <li><a href='#' style={{color:"black"}}>常見Q&A</a></li>
                <li><a href='#' style={{color:"black"}}>營運中心開放時間</a></li>
              </div>
              <div className='col-4 col-sm-4 col-md-4 col-lg-4 mt-4 text-center'>
                <h5 className='text-center' style={{fontSize:"25px",fontWeight:"bold"}}>聯絡我們</h5>
                {/* id="emails"onMouseEnter={this.openChange} onMouseLeave={this.openChange}  */}
                <li><a href='#' style={{color:"black"}}>成為合作店家</a></li>
                <li><a href='#' style={{color:"black"}}>成為外送員</a></li>
                <a href="/customerMail" ><i className="fa fa-envelope-o fa-2x" style={{color:"black",cursor:"pointer"}}></i></a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment >
    );
  }
}

export default Footer;