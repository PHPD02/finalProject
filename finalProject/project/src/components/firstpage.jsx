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
        <div>
          <div className="card bg-dark text-white">
            <img src="/image/food.png" className="card-img" height="500px" />
            <div className="card-img-overlay">
              <div className="container">
                <h5 className="card-title display-5">還等什麼？一起和我們開始這個外送的旅程吧！</h5>
                <p className="card-text">想讓上百萬新顧客試試你的美食或生鮮雜貨商品嗎？讓我們來幫忙吧！</p>
                <p className="card-text">該怎麼做呢？我們會協助你上傳菜單或商品清單、幫你處理訂單、訂單確認後我們將請外送夥伴前往你的商店去取件，再將餐點或商品外送給顧客們。</p>
              </div>
              <figure className="figure">
                <img src="..." className="figure-img img-fluid rounded" alt="..." />
                <figcaption className="figure-caption">順弁的連結</figcaption>
              </figure>
            </div>
          </div>
          <a href="" className="">特別合作店家</a>
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

      </React.Fragment >

    );
  }
}

export default firstpage;