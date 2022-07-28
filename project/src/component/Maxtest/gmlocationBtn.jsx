/**
 * 【可以work】
 * 定位 OK
 * 取得當下 座標位置 與 地址
*/

import React, { Component } from 'react';
const google = window.google;
// import "https://maps.googleapis.com/maps/api/js?sensor=false"
class Gmlocate extends Component {
    state = {
        latitude: null,
        longitude: null,
        addr: null,
    }
    componentDidMount() {

    }
    locate = async () => {
        if (navigator.geolocation) {
            console.clear();
            // 使用者不提供權限，或是發生其它錯誤
            function error() {
                alert('無法取得你的位置');
            }

            // 使用者允許抓目前位置，回傳經緯度
            var success = async (position) => {
                console.log(position.coords.latitude, position.coords.longitude);
                this.state.latitude = position.coords.latitude.toFixed(7);
                this.state.longitude = position.coords.longitude.toFixed(7);

                /* ===【Start】 經緯度 轉地址 === */
                var geocoder = new google.maps.Geocoder();
                var coord = new google.maps.LatLng(this.state.latitude, this.state.longitude);
                var result
                result = await geocoder.geocode({ 'latLng': coord }, function (results, status) {
                    if (status === google.maps.GeocoderStatus.OK) {
                        // 如果有資料就會回傳
                        if (results) {
                            console.log(results[0]);
                            // return results;
                        }
                    }
                    // 經緯度資訊錯誤
                    else {
                        alert("Reverse Geocoding failed because: " + status);
                    }
                })
                    .then((res) => {
                        console.log(res);
                        return res;
                    });
                console.log(result);
                this.state.addr = result.results[0].formatted_address
                /* ===End】 經緯度 轉地址 === */

                this.setState({});

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
                <h1>{this.state.latitude},{this.state.longitude}</h1>
                <h1>{this.state.addr}</h1>
                <hr />
                <button onClick={this.locate}> click me</button>
            </div>
        );
    }
}
export default Gmlocate;










