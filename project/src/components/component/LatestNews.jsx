import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './css/latesnews.css';
// import 'aos/dist/aos.css';
// import AOS from 'aos';
class LatestNews extends Component {
  state = {}
  // 測試 滑鼠滑過上方會改變背景色與文字顏色
  // onMouseOver = () => {
  //   function change() {
  //     var msg = document.getElementById('msg');
  //     msg.style.color = 'white';
  //     msg.style.backgroundColor = 'red';
  //   }
  // }
  // onMouseout = () => {
  //   function restore() {
  //     var msg = document.getElementById('msg');
  //     msg.style.color = '';
  //     msg.style.backgroundColor = '';
  //   }
  // }
  // id='msg' onMouseOver={"change"} onMouseOut={"restore"}
  // 

  render() {
    return (
      <React.Fragment>
        <header className='container'>
          <div className='row'>
            <div className='col-md-10'>
              <h1>最新公告</h1>
              <hr className='w-100 bg-danger' />
            </div>
            <div className='col-my-1 mt-5'>
              <p>第一手重要通知，不容錯過</p>
            </div>
          </div>

        </header>
        {/* 電子報 */}
        <section className="container">
          <div className='row m-1'>
            {/* 八月電子報 */}
            <div className=" col-md-4 ">
              <div className='container card cardshadow'>
                <b className='p-1'>
                  <div className='row'>
                    <h4>電子報</h4>
                  </div>
                  <div className='row'>
                    <p>電子報8月號</p>
                  </div>
                  <div className='row'>
                    <p>8月份電子報為夥伴精選多項夏季活動，請好好把握！！</p>
                  </div>
                  <div className='row'>
                    <p>2022/08/07</p>
                  </div>
                </b>
              </div>
            </div>

            {/* 七月電子報 */}
            <div className=" col-md-4 ">
              <div className='container card cardshadow'>
                <b className='p-1'>
                  <div className='row'>
                    <h4>電子報</h4>
                  </div>
                  <div className='row'>
                    <p>電子報7月號</p>
                  </div>
                  <div className='row'>
                    <p>7月份電子報為夥伴精選多項獎金活動，請進來瞧瞧吧!</p>
                  </div>
                  <div className='row'>
                    <p>2022/07/07</p>
                  </div></b>
              </div>
            </div>


            {/* 六月電子報 */}
            <div className=" col-md-4 ">
              <div className='container card cardshadow'>
                <b className='p-1'>
                  <div className='row'>
                    <h4>電子報</h4>
                  </div>
                  <div className='row'>
                    <p>電子報6月號</p>
                  </div>
                  <div className='row'>
                    <p>2022年6月份電子報有專屬優惠，快點進來瞧瞧吧!</p>
                  </div>
                  <div className='row'>
                    <p>2022/06/07</p>
                  </div>
                </b>

              </div>
            </div>
          </div>
        </section>

        {/* 最新消息 */}
        <section className="container">
          <div className='row m-1'>
            <div className="col-md-4 ">
              <div className='container card cardshadow'>
                <b className='p-1'>
                  <div className='row'>
                    <h4>最新快訊</h4>
                  </div>
                  <div className='row'>
                    <p>當月開通強檔活動</p>
                  </div>
                  <div className='row'>
                    <p>了解本月申請成為BytheWay外送夥伴的最新強檔活動</p>
                  </div>
                  <div className='row'>
                    <p>2022/01/30</p>
                  </div>
                </b>

              </div>
            </div>

            <div className="col-md-4 ">
              <div className='container card cardshadow'>
                <b className='p-1'>
                  <div className='row'>
                    <h4>最新快訊</h4>
                  </div>
                  <div className='row'>
                    <p>外送申請流程懶人包，如何加入BytheWay成為外送夥伴？</p>
                  </div>
                  <div className='row'>
                    <p>今天申請當天領取外送裝備，立即成為BytheWay外送夥伴</p>
                  </div>
                  <div className='row'>
                    <p>2022/01/30</p>
                  </div>
                </b>

              </div>
            </div>

            {/* 順弁頁面傳送 */}
            <NavLink to="/convenient" className="col-md-4">
              <div className='container card cardshadow'>
                <b className='p-1'>
                  <div className='row'>
                    <h4>最新快訊</h4>
                  </div>
                  <div className='row'>
                    <p>強勢推出「順弁」New 功能</p>
                  </div>
                  <div className='row'>
                    <p>為了讓消費者能更快速的選擇
                      ，我們做了顧客與顧客的往來機制，快來一同「順弁」探索吧！</p>
                  </div>
                  <div className='row'>
                    <p>2022/08/09</p>
                  </div>
                </b>
              </div>
            </NavLink>

          </div>
          <hr className="w-100 bg-danger" />
        </section>



      </React.Fragment >
    );
  }
}

export default LatestNews;