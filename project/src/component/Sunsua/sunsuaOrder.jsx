import React, { Component } from 'react';
import SunsuaOrderList from './sunsuaOrderList.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


class SunsuaOrder extends Component {
    state = {}
    render() {
        return (
            <div>
                訂單搜尋
                <hr />
                <SunsuaOrderList></SunsuaOrderList>
            </div>

        );
    }
}

export default SunsuaOrder;

