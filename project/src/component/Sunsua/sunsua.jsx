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

/* 引入檔案 */
import sunsuaTitle from '../../img/順便特殊字體.png'

class Sunsua extends Component {
    state = {
        innerContent: <SunsuaIntro></SunsuaIntro>
    }
    innerContentChange = () => {
        // console.log(window.location.pathname);
        /* 用 BrowserRouter */
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
                            <img src={sunsuaTitle} alt="" />
                        </div>
                        <p></p>
                        <div className='container'>
                            <div className='row'>
                                {/* 左側 點選列表 */}
                                <div className='col-2 d-flex flex-column'>
                                    <div className="my-1 d-flex justify-content-center" onClick={this.innerContentChange}>
                                        <button className='btn btn-outline-danger' >
                                            <Link to="/sunsua/intro" className='h2 font-weight-bold' >介紹</Link>
                                        </button>
                                    </div>
                                    <div className="my-1 d-flex justify-content-center" onClick={this.innerContentChange}>
                                        <button className='btn btn-outline-danger' >
                                            <Link to="/sunsua/proposal" className='h2 font-weight-bold' >提案</Link>
                                        </button>
                                    </div>
                                    <div className="my-1 d-flex justify-content-center" onClick={this.innerContentChange}>
                                        <button className='btn btn-outline-danger' >
                                            <Link to="/sunsua/order" className='h2 font-weight-bold'>搜方案</Link>
                                        </button>
                                    </div>
                                </div>
                                {/* 右側顯示列表 */}
                                <div className="col-10">
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