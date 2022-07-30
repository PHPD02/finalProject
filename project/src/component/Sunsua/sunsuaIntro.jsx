/**
 * 順弁的介紹
 * 闡述 順弁 頁面的裡面
 * 稍微 介紹 頁面的使用方法
 */
import React, { Component } from 'react';

/* 引入 css */
import './css/sunsuaIntro.css'

class SunsuaIntro extends Component {
    state = {}
    render() {
        return (
            <div id="sunsuaIntro" className='text-center py-4'>
                <h1 className='h1 font-weight-bolder'> 順弁團購介紹 </h1>
                <hr />
                <h3>理念介紹</h3>
                <h5>基於順弁美食外送的概念，我們重新構築外送員、順弁平台、與消費者者間的鏈結。</h5>
                <h5>顛覆過往以消費者為買賣主軸的概念。</h5>
                <h5>順弁團購將以外送提案人來作為整段買賣的主體。</h5>
                <h5>團購提案人可以自由主導買賣過程，做真正意義上自己的老闆。</h5>

                <br />
                <hr />
                <h3>操作教學  </h3>
                <section>
                    <h4> 提案人 :</h4>
                    <p>在左側點選發起團購方案後，輸入相關資料，即可發起團購方案。並在限時內等候其他人加入團購。</p>
                    <p>在團購訂單額滿、或時間截止，發起人的團購方案就會關閉，並自動生成訂單。</p>
                    <p>如果在期限內沒有人加入團購，方案就會關閉。</p>
                </section>
                <section>
                    <h4> 使用者 :</h4>
                    <p>在左側點選搜尋團購方案後，可以看到所有人發起的方案及相關餐點資訊。</p>
                    <p>並透過上方定位功能、以及檢索功能，搜尋有興趣的團購方案。</p>
                    <p>在找到您想要的方案後，在右側選擇數量並送出付款，即可加入方案。</p>
                </section>
                <hr />
            </div>
        );
    }
}

export default SunsuaIntro;