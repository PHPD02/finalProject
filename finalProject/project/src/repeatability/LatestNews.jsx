import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import 'aos/dist/aos.css';
// import AOS from 'aos';
// import './latestnews.css';
class LatestNews extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <header className='container'>
          <div className='row'>
            <div className='col-md-10'>
              <h1>最新公告</h1>
              <hr className='w-100 bg' />
            </div>
            <div className='col-my-1 mt-5'>
              <p>第一手重要通知，不容錯過</p>
            </div>

          </div>

        </header>
        {/* 電子報 */}
        <section className="container">
          <div className='row'>
            <div className=" col-md-4 card ">
              <div className='container'>
                <div className='row'>
                  <h2>電子報</h2>
                </div>
                <div className='row'>
                  <p>電子報8月號</p>
                </div>
                <div className='row'>
                  <p>8月份電子報為夥伴精選多項夏季活動，請好好把握！！</p>
                </div>
                <div className='row'>
                  <div className='col-10'>
                    <p>2022/08/07</p>
                  </div>
                  <button classNameName='col-3 text-center w-25'><a href="#">touch</a></button>
                </div>
              </div>
            </div>
            <div className=" col-md-4 card">
              <div className='container'>
                <div className='row'>
                  <h2>電子報</h2>
                </div>
                <div className='row'>
                  <p>電子報7月號</p>
                </div>
                <div className='row'>
                  <p>7月份電子報為夥伴精選多項獎金活動，請夥伴們點進來瞧瞧吧!</p>
                </div>
                <div className='row'>
                  <div className='col-10'>
                    <p>2022/07/07</p>
                  </div>
                  <button classNameName='col-3 text-center w-25'><a href="#">touch</a></button>
                </div>
              </div>
            </div>
            <div className=" col-md-4 card">
              <div className='container'>
                <div className='row'>
                  <h2>電子報</h2>
                </div>
                <div className='row'>
                  <p>電子報6月號</p>
                </div>
                <div className='row'>
                  <p>2022年6月份電子報有專屬優惠，快點進來瞧瞧吧!</p>
                </div>
                <div className='row'>
                  <div className='col-10'>
                    <p>2022/06/07</p>
                  </div>
                  <button classNameName='col-3 text-center w-25'><a href="#">touch</a></button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 最新消息 */}
        <section className="container">
          <div className='row'>
            <div className="col-md-4 card">
              <div className='container'>
                <div className='row'>
                  <h2>最新快訊</h2>
                </div>
                <div className='row'>
                  <p>當月開通強檔活動</p>
                </div>
                <div className='row'>
                  <p>了解本月申請成為BytheWay外送夥伴的最新強檔活動</p>
                </div>
                <div className='row'>
                  <div className='col-10'>
                    <p>2022/01/30</p>
                  </div>
                  <button classNameName='col-3 text-center w-25'><a href="#">touch</a></button>
                </div>
              </div>
            </div>
            <div className="col-md-4 card">
              <div className='container'>
                <div className='row'>
                  <h2>最新快訊</h2>
                </div>
                <div className='row'>
                  <p>BytheWay外送申請流程懶人包</p>
                </div>
                <div className='row'>
                  <p>如何加入BytheWay成為外送夥伴？</p>
                </div>
                <div className='row'>
                  <p>今天申請當天領取外送裝備，立即成為BytheWay外送夥伴</p>
                </div>
                <div className='row'>
                  <div className='col-10'>
                    <p>2022/01/30</p>
                  </div>
                  <div>
                    <button classNameName='col-3 text-center w-25'><a href="#">touch</a></button>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-md-4 card">
              <div className='container'>
                <div className='row'>
                  <h2>最新快訊</h2>
                </div>
                <div className='row'>
                  <p>強勢推出「順弁」New 功能</p>
                </div>
                <div className='row'>
                  <p>為了讓消費者能更快速的選擇，我們做了顧客與顧客的往來機制，快來一同「順弁」探索吧！</p>
                </div>
                <div className='row'>
                  <div className='col-10'>
                    <p>2022/08/09</p>
                  </div>
                  <NavLink to="/convenient" type='button' className="btn btn-danger w-25">touch</NavLink>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </section>



      </React.Fragment >
    );
  }
}

export default LatestNews;