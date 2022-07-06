import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../repeatability/Navbar';

class convenient extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        {/* 瀏覽欄位 */}
        <Navbar />
        <div className='container'>
          <div className='mt-5'>
            <NavLink to="/firstpage">首頁</NavLink>
          </div>
        </div>
      </React.Fragment>

    );
  }
}

export default convenient;