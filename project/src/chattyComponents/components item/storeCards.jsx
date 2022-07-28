// import Axios from 'axios';
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
// import { height } from '@mui/system';
// import $ from 'jquery';


class StoreCard extends Component {
  state = {}

  addtoCart = async () => {
    try {
      const { menuItemId, restaurantId, restaurantName, dish, type, picture, cost } = this.props.StoreCard;

      const res = await axios.post("http://localhost//ourPHPFinalproject/ChtProject/cart/getcart.php", { menuItemId: menuItemId })
     
      var carts = res.data;
      var id = carts.id
      var mount = carts.mount;

      if (carts) {
        // 如果購物車裡已有此筆資料
        const cart = {
          id,
          mount
        }
        cart.mount = ++mount;
        console.log(cart);
        // 修改數量
        await axios.put("http://localhost//ourPHPFinalproject/ChtProject/cart/putcart.php", cart);
        
      } else {
        // 購物車裡沒有此筆資料
        const cart = {
          menuItemId,
          restaurantId,
          restaurantName,
          dish,
          type,
          picture,
          cost,
          mount: 1 //需要預設值
        };
        await axios.post("http://localhost:80//ourPHPFinalproject/ChtProject/cart/postcart.php", cart);
      }

      toast.info("已成功新增至購物車!");

      // 新增至購物車後右上角數量變動
      var num = document.getElementById('cartNum').innerText;
      document.getElementById('cartNum').innerText = parseInt(num) + 1;
      // console.log(num);
      

    } catch (error) {
      console.log(error);
      // alert('wrong');
      toast.error('添加購物車失敗')
    }

  }


  render() {
    const { dish, type, introduce, picture, cost } = this.props.StoreCard;
    return (
      <React.Fragment>
        <div className='card' style={{ boxShadow: "3px 3px 3px grey" }}>
          <div className='container' style={{ height: '150px' }} >
            <div className='row mt-3 d-flex align-items-center'>
              {/* <div className='col-md-12 col-sm-12'> */}
              <img src={picture} alt="" name="picture" height='100%' className='col-4 ' />
              {/* 圖片 */}
              <div className='col-8 '>
                {/* <div className='col'> */}
                  {/* 商品名稱 */}

                  {/* 金額 */}
                  <h4 name="dish">{dish}</h4>
                  <div className="row">
                    <div name="type" className='col-10'>{type}</div>
                    <div name="introduce" className='col-10'>{introduce}</div>
                    <button type="submit" className='col-2 btn btn-primary rounded-lg h-25' onClick={this.addtoCart}>+</button>
                  </div>
                  <span className='h4'>$<span name="cost" >{cost}</span><b>元</b></span>
                  
                  <br />
                  
              </div>
              {/* </div> */}
            </div>
            <div className="row">
                  
                  </div>
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default StoreCard;