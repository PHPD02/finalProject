import React, { Component } from 'react';
// 頁面需做連結時 引入
import { NavLink } from 'react-router-dom';
// 引入頁面導覽列
import "./firstpage.css";
import Navbar from '../repeatability/Navbar';
import Footer from '../repeatability/Footer';
import Cards from '../repeatability/Cards';
import Taiwan from '../repeatability/Taiwan';
import LatestNews from '../repeatability/LatestNews';
import 'bootstrap/dist/js/bootstrap.bundle';

class firstpage extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        {/* 導覽欄位 */}
        <Navbar />
        <br />
        <div className='mt-4'>
          {/* 首頁圖片 文字 */}
          <div className="text-white">
            <img src="./image/firstpagepic.jpg" className="card-img" />
            <div className="card-img-overlay mt-5">
              <div className='row'>
                <h2 className="card-title col-12 pl-5 mt-5"><b>還等什麼？一起和我們開始這個外送的旅程吧！</b></h2>
                <div className='row ml-1'>
                  <div className='col-7 mt-4 pl-5'>
                    <h5 className="card-text">想讓上百萬新顧客試試你的美食或生鮮雜貨商品嗎？</h5>
                    <br />
                    <p>讓我們來幫忙吧！該怎麼做呢？</p>
                    <p>我們會協助你上傳菜單或商品清單、幫你處理訂單、訂單確認後我們將請外送夥伴前往你的商店去取件，再將餐點或商品外送給顧客們。</p>
                  </div>
                  <div className='col-5'></div>
                </div>
              </div>
            </div>
          </div>
          {/* 點選地圖 - 相對應地區的特別合作店家 */}
          <div className="mt-3 container">
            <div className='row'>
              <h3 className=' col-12 text-center'>特別合作店家</h3>
            </div>
          </div>
          <div className='ml-4'>
            <Taiwan />
          </div>
          <div className="container">
            <div className='row'>
              <div className='col-2'></div>
              <div className='col-10'>
                <div className="container">
                  <div className='row ml-5'>

                    <div className='col-4'><Cards /><Cards /><Cards /></div>
                    <div className='col-4'><Cards /><Cards /><Cards /></div>
                    <div className='col-4'><Cards /><Cards /><Cards /></div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-1 container'>
            <div className='row wid' style={{ width: "80px" }}>
              <NavLink to="/" className="col-12 btn btn-danger col-4">more...</NavLink>
            </div>
          </div>
          <br />
          <div className='topColor'></div>
          <LatestNews />
          <div className='mt-2'>
            <Footer />
          </div>
        </div>

      </React.Fragment >

    );
  }
}

export default firstpage;