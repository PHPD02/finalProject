import React, { Component } from 'react';
import './footer.css';
class Footer extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <footer className="flex-rw">

          <ul className="footer-list-top">
            <li>
              <h4 className="footer-list-header">關於</h4></li>
            <li><a href='#' className="generic-anchor footer-list-anchor" itemprop="significantLink">外送夥伴品牌形象</a></li>
            <li><a href='#' className="generic-anchor footer-list-anchor" itemprop="significantLink">承攬服務條款</a></li>
            <li><a href='#' className="generic-anchor footer-list-anchor" itemprop="significantLink">隱私權政策</a></li>
          </ul>
          <ul className="footer-list-top">
            <li>
              <h4 className="footer-list-header">取得協助</h4></li>


            <li><a href='#' className="generic-anchor footer-list-anchor">常見Q&A</a></li>
            <li><a href='#' className="generic-anchor footer-list-anchor">營運中心開放時間</a></li>

          </ul>
          <ul className="footer-list-top">
            <li id='help'>
              <h4 className="footer-list-header">追蹤社群</h4></li>
            <section className="footer-social-section flex-rw">
              <span className="footer-social-overlap footer-social-icons-wrapper">

                <a href="#" className="generic-anchor" target="_blank" title="Facebook" itemprop="significantLink"><i className="fa fa-facebook"></i></a>

                <a href="#" className="generic-anchor" target="_blank" title="Instagram" itemprop="significantLink"><i className="fa fa-instagram"></i></a>

                <a href="#" className="generic-anchor" target="_blank" title="Google Plus" itemprop="significantLink"><i className="fa fa-google-plus"></i></a>
              </span>
            </section>
          </ul>


          <div className="footer-bottom-wrapper">
            <i className="fa fa-copyright" role="copyright">

            </i> 2022 <address className="footer-address" role="company address">非商業使用，團隊創作</address>
          </div>

        </footer>
        {/* <!--end of container--> */}
      </React.Fragment >
    );
  }
}

export default Footer;