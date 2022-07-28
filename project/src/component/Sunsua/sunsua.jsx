import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import SunsuaProposal from './sunsuaProposal';
import SunsuaSearchProposal from './sunsuaSearchProposal';
import SunsuaIntro from './sunsuaIntro.jsx';

// import Navbar from '../repeatability/Navbar.jsx';
import Navbar from '../../components/repeatability/Navbar';
import Footer from '../../components/repeatability/Footer';

import "./css/sunsua.css";
import $ from 'jquery';

/* 引入檔案 */
import sunsuaTitle from '../../img/9.png'

class Sunsua extends Component {
    state = {
        innerContent: <SunsuaIntro></SunsuaIntro>
    }
    innerContentChange = (e) => {
        $('.sunsuaBtn').addClass("btnNotSel");
        e.target.classList.remove("btnNotSel");
        switch (window.location.pathname) {
            case "/sunsua/intro":
                this.state.innerContent = <SunsuaIntro></SunsuaIntro>
                break;
            case "/sunsua/proposal":
                if (localStorage.getItem('email')) {
                    this.state.innerContent = <SunsuaProposal></SunsuaProposal>
                    break;
                } else {
                    // 沒登入 返回登入頁
                    window.location = "http://localhost:3000/login";
                    break;
                }
            /*  */
            // this.state.innerContent = <SunsuaProposal></SunsuaProposal>;
            // break;
            case "/sunsua/order":
                this.state.innerContent = <SunsuaSearchProposal></SunsuaSearchProposal>
                break;
        }
        this.setState({});
    }
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="body-wrapper">

                    <div id="sunsua" className='py-2'>
                        <div id='sunsuaheader' className=''>
                            {/* <h1 className='h1' >順弁</h1> */}
                            <img className="headerImg" src={sunsuaTitle} alt="" />
                        </div>
                        <p></p>
                        <div className='container'>
                            <div className='row'>
                                {/* 左側 點選列表 */}
                                <div className='col-2 d-flex flex-column pro-item-wrapper'>
                                    <div className=" d-flex justify-content-center pro-item pro-item-1" onClick={this.innerContentChange}>
                                        <button className='btn ' >
                                            <Link to="/sunsua/intro" className='sunsuaBtn btnNotSel h2 font-weight-bold' >順弁團購介紹</Link>
                                        </button>
                                    </div>
                                    <div className=" d-flex justify-content-center pro-item" onClick={this.innerContentChange}>
                                        <button className='btn ' >
                                            <Link to="/sunsua/proposal" className='sunsuaBtn btnNotSel h2 font-weight-bold' >發起團購方案</Link>
                                        </button>
                                    </div>
                                    <div className=" d-flex justify-content-center pro-item" onClick={this.innerContentChange}>
                                        <button className='btn ' >
                                            <Link to="/sunsua/order" className='sunsuaBtn btnNotSel h2 font-weight-bold'>搜尋團購方案</Link>
                                        </button>
                                    </div>
                                </div>
                                {/* 右側顯示列表 */}
                                <div className="col-10 introduce-wrapper" >
                                    {this.state.innerContent}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer />
            </React.Fragment>

        );
    }
}

export default Sunsua;