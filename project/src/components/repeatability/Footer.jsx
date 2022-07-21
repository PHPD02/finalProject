import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './css/footer.css';

class Footer extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <footer className="flex-rw" id='ff'>
          <ul className="footer-list-top ">
            <li>
              <h4 className="footer-list-header text-dark">關於</h4></li>
            <li><a href='#' className="generic-anchor footer-list-anchor text-dark" itemprop="significantLink">外送夥伴品牌形象</a></li>
            <li><a href='#' className="generic-anchor footer-list-anchor text-dark" itemprop="significantLink">承攬服務條款</a></li>
            <li><a href='#' className="generic-anchor footer-list-anchor text-dark" itemprop="significantLink">隱私權政策</a></li>
          </ul>
          <ul className="footer-list-top">
            <li>
              <h4 className="footer-list-header text-dark">取得協助</h4></li>
            <li><a href='#' className="generic-anchor footer-list-anchor text-dark">常見Q&A</a></li>
            <li><a href='#' className="generic-anchor footer-list-anchor text-dark">營運中心開放時間</a></li>
          </ul>
          <ul className="footer-list-top">
            <br />
            <i class="fa fa-envelope-o fa-10x" ></i>
          </ul>
          <div className="footer-bottom-wrapper">
            <i className="fa fa-copyright">
            </i> 2022 <address className="footer-address">非商業使用，團隊創作</address>
          </div>
        </footer>
        {/* <!--end of container--> */}
      </React.Fragment >
    );
  }
}

export default Footer;