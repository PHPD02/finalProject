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
            <div className='row'>
              <div className='col-4 col-sm-4 col-md-4 col-lg-4 mt-5 text-center'>
                <h5>關於</h5>
                <hr />
                <li><a href='#'>外送夥伴品牌形象</a></li>
                <li><a href='#'>承攬服務條款</a></li>
                <li><a href='#'>隱私權政策</a></li>
              </div>
              <div className='col-4 col-sm-4 col-md-4 col-lg-4 mt-5 text-center'>
                <h5 className='text-center'>取得協助</h5>
                <hr />
                <li><a href='#'>常見Q&A</a></li>
                <li><a href='#'>營運中心開放時間</a></li>
              </div>
              <div className='col-4 col-sm-3 col-md-3 col-lg-3 mt-5 text-center'>
                <h5 className='text-center'>請聯絡我們</h5>
                <hr />
                {/* id="emails"onMouseEnter={this.openChange} onMouseLeave={this.openChange}  */}
                <i className="fa fa-envelope-o fa-5x"></i>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment >
    );
  }
}

export default Footer;