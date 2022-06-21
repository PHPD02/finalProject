import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class SunsuaProposal extends Component {
    state = {
        order: { name: null, address: null, shop: null, meal: null, pic: null }
    }
    render() {
        return (
            <div className='container'>

                <div className='b'>訂單頁面</div>
                <hr />
                <div>
                    <form action='' method=''>
                        <table>
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td>姓名 : </td>
                                    <td><input type="text" required="required" placeholder="請輸入姓名" /></td>
                                </tr>
                                <tr>
                                    <td>要送到的地址 : </td>
                                    <td><input type="text" required="required" placeholder="請輸入目的地" /></td>
                                </tr>
                                <tr>
                                    <td>餐廳 : </td>
                                    <td><input type="text" required="required" placeholder="請輸入要配送的餐廳" /></td>
                                </tr>
                                <tr>
                                    <td>餐點 : </td>
                                    <td><input type="text" required="required" placeholder="請輸入要配送的餐點" /></td>
                                </tr>
                                <tr>
                                    <td>餐點上限數量 : </td>
                                    <td><input type="text" required="required" placeholder="請輸入要配送餐點的上限數量" /></td>
                                </tr>
                                <tr>
                                    <td>單筆金額 : </td>
                                    <td><input type="text" required="required" placeholder="請輸入單筆餐點的金額" /></td>
                                </tr>
                                <tr>
                                    <td> menu ??? : </td>
                                    <td><input type="file" required="required" /></td>
                                </tr>
                            </tbody>
                            <tfoot></tfoot>
                        </table>
                    </form>
                </div>
            </div>

        );
    }
}

export default SunsuaProposal;