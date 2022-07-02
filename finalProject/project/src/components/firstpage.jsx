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
        {/* 首頁圖片 文字 */}

        <img src="./image/firstpagepic.jpg" className="card-img firstpic" />
        <div className='container-intro text-left card-img-overlay text-white'>
          <div className='row'>
            <div className='col-sm-12'>
              <h2 className="pl-5 mt-5 textheader"><b>還等什麼？一起和我們開始這個外送的旅程吧！</b></h2>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-sm-8'>
              <h3 className="pl-5 textcontent">想讓上百萬新顧客試試你的美食或生鮮雜貨商品嗎？</h3>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-6'>
              <h4 className="pl-5 textfooter"><b>讓我們來幫忙吧！該怎麼做呢？</b></h4>
              <h5 className="pl-5 mt-1 textfooter"><b>我們會協助你上傳菜單或商品清單、幫你處理訂單、訂單確認後我們將請外送夥伴前往你的商店去取件，再將餐點或商品外送給顧客們。</b></h5>
            </div>
          </div>
        </div>

        <div className='mt-4'></div>
        <h3 className='text-center'>特別合作店家</h3>

        {/* 點選地圖 - 相對應地區的特別合作店家 */}
        <div className="container">
          <div className='row'>
            {/* 地圖 */}
            <div className='col-4'>
              <Taiwan />
            </div>
            <div style={{ display: "hidden" }}></div>
            {/* 合作店家 */}
            <div class="col-7 ">
              <div className="container">
                <div className='row'>
                  <div className='col-4'><Cards /></div>
                  <div className='col-4'><Cards /></div>
                  <div className='col-4'><Cards /></div>
                </div>
                <div className='row mt-2'>
                  <div className='col-4'><Cards /></div>
                  <div className='col-4'><Cards /></div>
                  <div className='col-4'><Cards /></div>
                </div>
                <div className='row mt-2'>
                  <div className='col-4'><Cards /></div>
                  <div className='col-4'><Cards /></div>
                  <div className='col-4'><Cards /></div>
                </div>
                <NavLink to="/" className=" float-right btn btn-danger ">more...</NavLink>
              </div>
            </div>
          </div>
        </div>
        {/* 最新消息 */}
        <LatestNews />
        <br />
        {/* 頁角 */}
        <Footer />
      </React.Fragment >

    );
  }
}

export default firstpage;