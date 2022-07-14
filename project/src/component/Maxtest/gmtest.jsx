/**
 * 定位測試
 */

import React, { Component } from 'react';


class Gmtest extends Component {
    state = {}
    componentDidMount() {
        if (navigator.geolocation) {
            // 使用者不提供權限，或是發生其它錯誤
            function error() {
                alert('無法取得你的位置');
            }

            // 使用者允許抓目前位置，回傳經緯度
            function success(position) {
                console.log(position.coords.latitude, position.coords.longitude);
            }

            // 跟使用者拿所在位置的權限
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            alert('Sorry, 你的裝置不支援地理位置功能。')
        }
    }
    render() {
        return (
            <div>
                <h1>hello</h1>
            </div>
        );
    }
}

export default Gmtest;