import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './css/latesnews.css';
// import 'aos/dist/aos.css';
// import AOS from 'aos';
class LatestNews extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>

        {/* 電子報 */}
        <section className="container">
          <div className='row'>
            <div className=" col-4">
              <div className='container card cardshadowNew'>
                  <div>
                    <h4>電子報</h4>
                  </div>
                  <div>
                    <p>電子報8月號</p>
                  </div>
                  <div>
                    <p className='text-nowrap text-truncate'>8月份電子報為夥伴精選多項夏季活動，請好好把握！！</p>
                  </div>
                  <div>
                    <p>2022/08/07</p>
                  </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default LatestNews;