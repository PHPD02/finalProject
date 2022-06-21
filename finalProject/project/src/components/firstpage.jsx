import React, { Component } from 'react';
// 頁面需做連結時 引入
import { NavLink } from 'react-router-dom';
// 引入頁面導覽列
import Navbar from '../repeatability/Navbar';

class firstpage extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        {/* 導覽欄位 */}
        <Navbar />
        <br />
        <div>
          <div className="text-dark">
            <div className="mb-2">
              <div className="container mt-5">
                <h5 className="display-5">還等什麼？一起和我們開始這個外送的旅程吧！</h5>
                <p>想讓上百萬新顧客試試你的美食或生鮮雜貨商品嗎？讓我們來幫忙吧！</p>
                <p>該怎麼做呢？我們會協助你上傳菜單或商品清單、幫你處理訂單、訂單確認後我們將請外送夥伴前往你的商店去取件，再將餐點或商品外送給顧客們。</p>
              </div>
              <div className="container">
                <div className="row">
                  <div className='col-6'></div>
                  <div className="card col-6 p-2">
                    <div>
                      <p className="text-muted">「順弁」發起人可以透過我們第三方平台來發起自己想去購買的餐廳或商店，告訴附近有不想出門、懶的出門的「順弁」使用者，而「順弁」使用者可以向發起人送交採購需求，並在約定地點交貨，且「順弁」的費用，完全可由發起人自己決定，因為這段採購行為本身就存在的，發起人想賺多賺少全憑自己想法，想多賺的人亦可以透過頻繁地發起「順弁」團購，以進一步增加自己的收益。</p>
                      <NavLink to="/convenient" className="btn btn-danger">請點我... <i className="fa fa-share"></i></NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-3">
            <div className="text-center">
              <h2>特別合作店家</h2>
            </div>

            <div className=''>
              <a href="" className="btn btn-outline-dark ml-1">北</a>
              <a href="" className="btn btn-outline-dark ml-1">中</a>
              <a href="" className="btn btn-outline-dark ml-1">南</a>
            </div>
            <div className="container">
              <div>
                <figure className="figure">
                  <img src="..." className="figure-img img-fluid rounded" alt="..." />
                  <figcaption className="figure-caption">北區輪播圖-餐廳</figcaption>
                </figure>
              </div>
              <div>
                <figure className="figure">
                  <img src="..." className="figure-img img-fluid rounded" alt="..." />
                  <figcaption className="figure-caption">北區輪播圖-飲料</figcaption>
                </figure>
              </div>
              <div>
                <figure className="figure">
                  <img src="..." className="figure-img img-fluid rounded" alt="..." />
                  <figcaption className="figure-caption">北區輪播圖-素食餐館</figcaption>
                </figure>
              </div>
            </div>
          </div>

        </div>

      </React.Fragment >

    );
  }
}

export default firstpage;