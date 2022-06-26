import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './latestnews.css';
class LatestNews extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <div className="my-5">
          <div className="container">
            <div className="row">
              <h4 className='col-9'>最新公告</h4>
              <h6>第一手重要通知，不容錯過</h6>
            </div>
            <hr className='border-1 w-100' />
            <div className="d-block">
              <div className="row mt-4">
                <div className="col-lg-4">
                  <div className="py-3 h-100">
                    <div className="card-overlap overlap-reverse card-overlap-news overlap-gray">
                      <div className="card-header bg-secondary p-1">
                        <div className="heading-news-title">
                          <h5>電子報</h5>
                        </div>
                        <div className="card-body p-0"></div>
                        <h6 className="h6 news-title text-dark limit-line-2 mb-3">電子報8月號</h6>
                        <p className="p news-txt text-font limit-line-3 mb-3">8月份電子報為夥伴精選多項夏季活動，請好好把握！！</p>
                        <div className='container'>
                          <div className='row'>
                            <p className="note text-pink mb-0 col-9">2022/08/07</p>
                            <button className='col-3 text-center w-25'><a href="https://foodpandarider.tw/news/13">touch</a></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="d-lg-none" />
                <div className="col-lg-4">
                  <div className="py-3 h-100">
                    <div className="card-overlap overlap-reverse card-overlap-news overlap-gray">
                      <div className="card-header bg-secondary p-1">
                        <div className="heading-news-title">
                          <h5>電子報</h5>
                        </div>
                        <div className="card-body p-0"></div>
                        <h6 className="h6 news-title text-dark limit-line-2 mb-3">電子報7月號</h6>
                        <p className="p news-txt text-font limit-line-3 mb-3">7月份電子報為夥伴精選多項獎金活動，請夥伴們點進來瞧瞧吧!</p>
                        <div className='container'>
                          <div className='row'>
                            <p className="note text-pink mb-0 col-9">2022/07/07</p>
                            <button className='col-3 text-center w-25'><a href="https://foodpandarider.tw/news/12">touch</a></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="d-lg-none" />
                <div className="col-lg-4">
                  <div className="py-3 h-100">
                    <div className="card-overlap overlap-reverse card-overlap-news overlap-gray">
                      <div className="card-header bg-secondary p-1">
                        <div className="heading-news-title">
                          <h5>電子報</h5>
                        </div>
                        <div className="card-body p-0"></div>
                        <h6 className="h6 news-title text-dark limit-line-2 mb-3">電子報6月號</h6>
                        <p className="p news-txt text-font limit-line-3 mb-3">2022年6月份電子報有專屬優惠，快點進來瞧瞧吧!</p>
                        <div className='container'>
                          <div className='row'>
                            <p className="note text-pink mb-0 col-9">2022/06/07</p>
                            <button className='col-3 text-center w-25'><a href="https://foodpandarider.tw/news/11">touch</a></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="d-lg-none" />
                <div className="col-lg-4">
                  <div className="py-3 h-100">
                    <div className="card-overlap overlap-reverse card-overlap-news overlap-gray">
                      <div className="card-header bg-secondary p-1">
                        <div className="heading-news-title">
                          <h5>最新快訊</h5>
                        </div>
                        <div className="card-body p-0"></div>
                        <h6 className="h6 news-title text-dark limit-line-2 mb-3">當月開通強檔活動</h6>
                        <p className="p news-txt text-font limit-line-3 mb-3">了解本月申請成為BytheWay外送夥伴的最新強檔活動</p>
                        <div className='container'>
                          <div className='row'>
                            <p className="note text-pink mb-0 col-9">2022/01/30</p>
                            <button className='col-3 text-center w-25'><a href="https://foodpandarider.tw/newPartner?typeId=0&amp;page=1&amp;utm_source=home&amp;utm_medium=news&amp;utm_campaign=recruitment" target="_blank">touch</a></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="d-lg-none" />
                <div className="col-lg-4">
                  <div className="py-3 h-100">
                    <div className="card-overlap overlap-reverse card-overlap-news overlap-gray">
                      <div className="card-header bg-secondary p-1">
                        <div className="heading-news-title">
                          <h5>最新快訊</h5>
                        </div>
                        <div className="card-body p-0"></div>
                        <h6 className="h6 news-title text-dark limit-line-2 mb-3">BytheWay外送申請流程懶人包</h6>
                        <p className="p news-txt text-font limit-line-3 mb-0">BytheWay外送申請流程懶人包！</p>
                        <p className="p news-txt text-font limit-line-3 mb-0">如何加入BytheWay成為外送夥伴？</p>
                        <p className="p news-txt text-font limit-line-3 mb-0">今天申請當天領取外送裝備，立即成為BytheWay外送夥伴</p>
                        <div className='container'>
                          <div className='row'>
                            <p className="note text-pink mb-0 col-9">2022/01/30</p>
                            <button className='col-3 text-center w-25'><a href="https://foodpandarider.tw/join?utm_source=home&amp;utm_medium=news&amp;utm_campaign=recruitment" target="_blank">touch</a></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="d-lg-none" />
                <div className="col-lg-4">
                  <div className="py-3 h-100">
                    <div className="card-overlap overlap-reverse card-overlap-news overlap-gray">
                      <div className="card-header bg-secondary p-0">
                        <div className="heading-news-title">
                          <h5>最新快訊</h5>
                        </div>
                        <div className="card-body p-0"></div>
                        <h6 className="h6 news-title text-dark limit-line-2 mb-3">強勢推出「順弁」New 功能</h6>
                        <p className="p news-txt text-font limit-line-3 mb-3">為了讓消費者能更快速的選擇，我們做了顧客與顧客的往來機制，快來一同「順弁」探索吧！</p>
                        <div className='container'>
                          <div className='row'>
                            <span className="note text-pink mb-0 col-8">2021/07/30</span>
                            <NavLink to="/convenient" className="btn btn-danger col-4">請點我... <i className="fa fa-share"></i></NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LatestNews;