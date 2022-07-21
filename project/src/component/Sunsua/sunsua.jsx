import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import SunsuaProposal from './sunsuaProposal';
import SunsuaSearchProposal from './sunsuaSearchProposal';
import SunsuaIntro from './sunsuaIntro.jsx';
import Navbar from '../../components/repeatability/Navbar';
import Footer from '../../components/repeatability/Footer';

import "./css/sunsua.css";

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
                this.state.innerContent = <SunsuaProposal></SunsuaProposal>
                break;
            case "/sunsua/order":
                this.state.innerContent = <SunsuaSearchProposal></SunsuaSearchProposal>
                break;
        }
        /* 用 HashRouter */
        // switch (window.location.hash) {
        //     case "#/sunsua/intro":
        //         this.state.innerContent = <SunsuaIntro></SunsuaIntro>
        //         break;
        //     case "#/sunsua/proposal":
        //         this.state.innerContent = <SunsuaProposal></SunsuaProposal>
        //         break;
        //     case "#/sunsua/order":
        //         this.state.innerContent = <SunsuaSearchProposal></SunsuaSearchProposal>
        //         break;
        // }
        this.setState({});
    }
    render() {
        return (
            <React.Fragment>
                <div id="sunsua">
                    <Navbar />
                    <div className='header1'>
                        <h1 className='h1' >順弁</h1>
                    </div>
                    <p></p>
                    <div className='container'>
                        <div className='row'>
                            {/* 左側 點選列表 */}
                            <div className='col-2 d-flex flex-column'>
                                <div className="my-1 h2 font-weight-bold d-flex justify-content-center" onClick={this.innerContentChange}><Link to="/sunsua/intro" >介紹</Link></div>
                                <div className="my-1 h2 font-weight-bold d-flex justify-content-center" onClick={this.innerContentChange}><Link to="/sunsua/proposal" >提案</Link></div>
                                <div className="my-1 h2 font-weight-bold d-flex justify-content-center" onClick={this.innerContentChange}><Link to="/sunsua/order">搜方案</Link></div>
                            </div>
                            {/* 右側顯示列表 */}
                            <div className="col-10">
                                {this.state.innerContent}
                            </div>
                        </div>
                    </div>
                    {/* <div className='footer'>
                    <p>about us</p>
                </div> */}

                </div>
                <Footer/>

            </React.Fragment>
        );
    }
}

export default Sunsua;