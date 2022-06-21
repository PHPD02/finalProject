/**
 * 順弁的介紹
 * 闡述 順弁 頁面的裡面
 * 稍微 介紹 頁面的使用方法
 */
import React, { Component } from 'react';
class SunsuaIntro extends Component {
    state = {}
    render() {
        return (
            <div className='text-center py-4'>
                <h2> 關於順弁 </h2>
                <hr />
                <h4>我們的構想理念:</h4>
                <h5>基於美食外送之概念，重新構築外送員、美食平台、與消費者三者間的關係。</h5>
                <p>......</p>
                <hr />
                <h4>大致操作 : </h4>
                <p>在左側點選提案後，輸入相關資料，發起提案。等候其他人期限內是否要加入定單。</p>
                <p></p>
                <hr />
            </div>
        );
    }
}

export default SunsuaIntro;