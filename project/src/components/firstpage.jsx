import React, { Component } from 'react';
// 頁面需做連結時 引入
import { NavLink } from 'react-router-dom';
// 引入頁面導覽列
import "./css/firstpage.css";
import Footer from './repeatability/Footer';
// 引入首頁專用卡片架構
import Cards from './component/Cards';
// 引入首頁專用地圖架構
import Taiwan from './component/Taiwan';
// 引入首頁專用最新消息資訊架構
import LatestNews from './component/LatestNews';
// 固定功夫茶
// import Diecard from './component/diecard';
import 'aos/dist/aos.css';
import axios from 'axios';
import Navbar from './repeatability/Navbar';
import $ from 'jquery';

class firstpage extends Component {
  state = {
    address: "",   //點選後將地圖'value' 送往後端的空值
    restaurants: [],
    restaurants: []
  }
  // 首頁連結地圖城市
  clickTwCity = async (e) => {
    // 是否有取得到Taiwan頁面的值
    // console.log(e.target.getAttribute('value'));
    var Tw = document.getElementById('textCity');                               //宣告變數等於網頁上的 #id                     
    Tw.textContent = e.target.getAttribute('value');                            //要顯示的文字
    this.state.address = e.target.getAttribute('value');                        //這裡的地址區域 會等於地圖點選後的值
    console.log(this.state.address);
    this.state.restaurants = [];                                                //點選後這裡的餐廳資訊
    this.setState({});                                                          //狀態更新 
    let url = "http://localhost/ourPHPFinalproject/RjieProject/firstsql2.php"
    // console.log(url);
    await axios.get(url, { params: { address: this.state.address } })           //將取到的值送往後端做比較
      .then(rest => {
        this.state.restaurants = rest.data;
        console.log(this.state.restaurants);                                    //點選後 出現進來的哪幾筆資料consloe.log
        this.setState({})                                                       //這裡的狀態更新
      })
  }


  async componentDidMount() {
    $('#accompany').attr('style', 'display:block');
    $('#latestNews').attr('style', 'display:block');
    $('#contact').attr('style', 'display:block');
    $('#navSunsua').attr('style', 'display:block');
    //畫面載入後 自動撈取資料庫
    let url = "http://localhost/ourPHPFinalproject/RjieProject/firstsql.php"
    await axios.get(url)
      .then(res => {
        this.state.restaurants = res.data;
        this.setState({})
        // console.log(this.state.restaurants);
      })



    // or simply just AOS.init();
    // initialise with other settings
    // duration: 2000
  }
  render() {
    return (
      <React.Fragment>
        {/* 導覽欄位 */}
        <Navbar />
        {/* <br /> */}
        {/* 首頁圖片 文字 */}
        <div
        //  style={{zIndex:'-1'}}
        >
          <div className='firstpic'>
            {/* <img src="./image/foodtraditional.png" className="card-img " /> */}
            <div className='secpic'>
              <section>
                <h2 className='pt-5'><b>還等什麼？一起和我們開始這個外送的旅程吧！</b></h2>
                <h3 >想讓上百萬新顧客試試你的美食或生鮮雜貨商品嗎？</h3>
                <h4><b>讓我們來幫忙吧！該怎麼做呢？</b></h4>
                {/* <div style={{ color: 'gray' }}>
                  <h5>我們會協助你上傳菜單或商品清單、幫你處理訂單</h5>
                  <h5>幫你處理訂單、訂單確認後我們將請外送夥伴前往你的商店去取件</h5>
                  <h5>再將餐點或商品外送給顧客們</h5>
                </div> */}
                <div className='text-right'>
                  <NavLink to='/registerCompany'>
                    <button className='btn btn-warning btn-lg'>
                      立即加入我們</button>
                  </NavLink>

                </div>
                {/* <div className='text-center mt-5'>
                  <h1 style={{ color: 'red' }}><u>不知道要吃什麼嗎？</u></h1>

                  <NavLink to='/sunsua'>
                    <button className='btn btn-outline-danger btn-lg'>
                      點我查看新功能</button>
                  </NavLink>

                </div> */}
              </section>
            </div>

          </div>

          <div className='mt-4'>
            <h4 className='text-center ImgZ'><span id="textCity"></span> 特別合作店家</h4>
          </div>
          <hr className='w-75 bg-danger' />
          {/* 測試aos */}
          {/* <div style={{ width: '300px', height: '300px', backgroundColor: "red" }}
          className="zoom-in-down"
          data-aos="zoom-in-down">
        </div> */}

          {/* 點選地圖 - 相對應地區的特別合作店家 */}
          <div className="container">
            <div className='row d-flex justify-content-center'>
              {/* 地圖 */}
              <div className='col-lg-5 col-md-12 '>
                {/* 取得與其他(Taiwan)元件的呼叫 */}
                <Taiwan twCity={(e) => this.clickTwCity(e)} />
              </div>
              {/* 合作店家 */}
              {/* data-aos="zoom-in-down" */}
              <div className="col-lg-7 col-md-12">
                <div className='row '>
                  {/* <div className='col-lg-4 col-md-4 col-sm-12'>
                    <NavLink to='/shoplist2'>
                      <Diecard />
                    </NavLink>
                  </div> */}
                  {/* <div className='col-lg-4 col-md-4 col-sm-12 stylecards'><Diecard /></div> */}
                  {/* 矩陣餐廳內容 導入卡片裡面 */}
                  {this.state.restaurants.map((restaurant, index) => {
                    return (
                      <div className='col-lg-4 col-md-4 col-sm-12'>
                        <Cards key={index} catchData={restaurant} />
                      </div>
                    );
                  })}
                </div>

                <NavLink to="/sunsuafooddelivery" className="float-right">
                  <button data-text="Awesome" className="btnmore">
                    <span className="actual-text">&nbsp;more...&nbsp;</span>
                    <span className="hover-text" aria-hidden="true">&nbsp;more...&nbsp;</span>
                  </button></NavLink>
              </div>
            </div>
          </div>
          {/* 最新消息 */}
          <br /><br /><br />
          <header className='container-fluid'>
            <div className='row'>
              <div className='col-1 col-lg-1'></div>
              <div className='col-7 col-lg-7 col-md-8 col-sm-8'>
                <h3 className='newnews' id="news">最新消息</h3>
              </div>
              <div className='col-3 col-lg-3 col-md-3 col-sm-3 mt-3'>
                <p>第一手重要通知，不容錯過</p>
              </div>
            </div>
            <hr className='w-75 bg-danger' />
          </header>
          <div className='container'>
            <div className='row m-auto'>
              <LatestNews />
            </div>
          </div>
          {/* 頁角 */}
          <Footer />
        </div>
      </React.Fragment>

    );
  }
}
export default firstpage;