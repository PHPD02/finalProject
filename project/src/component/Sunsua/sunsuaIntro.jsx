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
                <h3>構想理念:</h3>
                <h5>基於美食外送之概念，重新構築外送員、美食平台、與消費者三者間的關係。</h5>
                <h5>嘗試顛覆過往以消費者為本之概念，改以提案人的外送行為為主體。</h5>
                <h5>透過提案人間的市場競逐，來獲取我們平台的收益，活絡外送市場。</h5>

                <br />
                <hr />
                <h3>大致操作 : </h3>
                <section>
                    <h4> 提案人 :</h4>
                    <p>在左側點選提案後，輸入相關資料，發起提案。等候其他人期限內是否要加入提案。</p>
                    <p>如果有人在期限加入提案，時間截止，或份數已滿，提案就會關閉，然後生成訂單。</p>
                    <p>如果沒有人在期限內加入提案，時間到提案就會關閉。</p>
                </section>
                <section>
                    <h4> 使用者 :</h4>
                    <p>在左側點選搜提案後，可以看到所有人發起的提案及相關餐點資訊。</p>
                    <p>找到你想要、能接受的方案後，在右側選擇你的數量，後可以加入提案。</p>
                </section>
                <hr />
            </div>
        );
    }
}

export default SunsuaIntro;