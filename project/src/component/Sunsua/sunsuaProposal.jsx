/**
 * 發起提案
 * TODO: 1.看看 input 長度需不需要改變
 *       2.submitProposal 改變樣式
*/
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class SunsuaProposal extends Component {
    state = {
        proposal: [{
            name: null, address: null, shop: null,
            meal: null, cost: null, deadlineTime: null, arriveTime: null, pic: null
        }]
    }
    render() {
        return (
            <div className='container py-3'>

                <h1 className='text-center'>提案頁面</h1>
                <hr />
                <div className='text-center'>
                    <form action='' method=''>
                        <table className='table' border="1">
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td>姓名</td>
                                    <td><input type="text" required="required" placeholder="輸入姓名" /></td>
                                </tr>
                                <tr>
                                    <td>要送到的地址</td>
                                    <td><input type="text" required="required" placeholder="輸入目的地" /></td>
                                </tr>
                                <tr>
                                    <td>餐廳</td>
                                    <td><input type="text" required="required" placeholder="輸入要配送的餐廳" width={"1000px"} /></td>
                                </tr>
                                <tr>
                                    <td>餐點</td>
                                    <td><input type="text" required="required" placeholder="輸入要配送的餐點" /></td>
                                </tr>
                                <tr>
                                    <td>餐點上限數量</td>
                                    <td><input type="text" required="required" placeholder="輸入配送餐點的上限數量" /></td>
                                </tr>
                                <tr>
                                    <td>單筆金額</td>
                                    <td><input type="text" required="required" placeholder="輸入單筆餐點的金額" /></td>
                                </tr>
                                <tr>
                                    <td>訂單限制時間</td>
                                    <td><input type="text" required="required" placeholder="輸入訂單限制時間" /></td>
                                </tr>
                                <tr>
                                    <td>預計到達時間</td>
                                    <td><input type="text" required="required" placeholder="輸入預計到達時間" /></td>
                                </tr>
                                <tr>
                                    <td>menu</td>
                                    <td><input type="file" required="required" /></td>
                                </tr>
                            </tbody>
                            <tfoot></tfoot>
                        </table>
                    </form>
                </div>
                <hr />
                <button id="submitProposal" type="sumit">送出提案</button>
            </div>

        );
    }
}

export default SunsuaProposal;