import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import SunsuaProposal from './sunsuaProposal';
import SunsuaOrder from './sunsuaOrder';
import Navi from '../navigation.jsx';


import "./css/sunsua.css";

class Sunsua extends Component {
    state = {}
    render() {
        return (
            <div id="sunsua">
                <Navi></Navi>
                <div className='header'>
                    <h1 >順弁</h1>
                </div>
                <div className='container'>

                    <div className='row'>
                        {/* 左側 點選列表 */}
                        <div className='col-2'>
                            <div className='col'>
                                <a href='/sunsua/proposal'> 提案 </a>
                                <br />
                                <a href='/sunsua/order'> 查詢訂單 </a>
                            </div>
                        </div>
                        {/* 右側顯示列表 */}
                        <div className="col-10">
                            <BrowserRouter>
                                <Switch>
                                    <Route path="/sunsua/proposal" component={SunsuaProposal} />
                                    <Route path="/sunsua/order" component={SunsuaOrder} />
                                </Switch>
                            </BrowserRouter>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default Sunsua;