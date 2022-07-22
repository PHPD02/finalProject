import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './css/footer.css';

class Footer extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <div className="footerbackimg" id='ff'>
          <div className='container-fluid'style={{height:"400px"}}>
            <div className='row'>
              <div className='col-5'></div>
              <div className='col-7 row mt-5'>
                <div className='col-4 col-sm-4 col-md-4 col-lg-4 text-center mt-5'>
                  <h5>關於</h5>
                  <li><a href='#'>外送夥伴品牌形象</a></li>
                  <li><a href='#'>承攬服務條款</a></li>
                  <li><a href='#'>隱私權政策</a></li>
                </div>
                <div className='col-4 col-sm-4 col-md-4 col-lg-4 text-center mt-5'>
                  <h5>取得協助</h5>
                  <li><a href='#'>常見Q&A</a></li>
                  <li><a href='#'>營運中心開放時間</a></li>
                </div>
                <div className='col-3 col-sm-3 col-md-3 col-lg-3 text-center mt-5'>
                  <h5>請聯絡我們</h5>
                  <i class="fa fa-envelope-o fa-10x" ></i>
                </div>

              </div>
            </div>
          </div>
        </div>
      </React.Fragment >
    );
  }
}

export default Footer;