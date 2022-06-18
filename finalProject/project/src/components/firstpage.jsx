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
        {/* 瀏覽欄位 */}
        <Navbar />
        <div className='container'>
          <div className='mt-5'>
            <NavLink to="/convenient">便當頁</NavLink>
          </div>
        </div>
      </React.Fragment >

    );
  }
}

export default firstpage;