import React, { Component } from 'react';
import './footer.css';
class Footer extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <footer className='footer-headback text-light'>
          <div className="container">
            <div className='row'>
              <div className='col-lg-4 mt-3'>
                <div className='section-title theme-white'>
                  <h4>關於</h4>
                </div>
                <div className='row my-4 no-gutters mx-n2'>
                  <div className='col-12 px-2 mb-2'>
                    <a className="text-white d-block" role="button" href="/#" target="_blank">外送夥伴品牌形象</a>
                  </div>
                  <div className='col-12 px-2 mb-2'>
                    <a className="text-white d-block" role="button" href="/#" target="_blank">服務條款</a>
                  </div>
                  <div className='col-12 px-2 mb-2'>
                    <a className="text-white d-block" role="button" href="/#" target="_blank">隱私權政策</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt-3">
                <div className="section-title theme-white">
                  <h4>取得協助</h4>
                </div>
                <div className="row my-4 no-gutters mx-n2">

                  <div className="col-12 px-2 mb-2"><a className="text-white d-block" role="button" href="https://foodpandarider.tw/faq/main">常見Q&amp;A</a></div>
                  <div className="col-12 px-2 mb-2"><a className="text-white d-block" role="button" href="https://foodpandarider.tw/operation">營運中心開放時間</a></div>

                </div>
              </div>
              <div className="col-lg-4 mt-3">
                <div className="section-title theme-white">
                  <h4>追蹤社群</h4>
                </div>
                <div className="row my-4 no-gutters mx-n3">
                  <p className='pl-3'>社群 ....</p>
                </div>
              </div>
            </div>
          </div>
          <div className='footer-footback text-light'>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="text-center">
                    <a>©2022 All Right Reserved.</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </footer>
        {/* <!--end of container--> */}
      </React.Fragment >
    );
  }
}

export default Footer;