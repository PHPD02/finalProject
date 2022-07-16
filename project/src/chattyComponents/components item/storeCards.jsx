// import Axios from 'axios';
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
// import $ from 'jquery';


class StoreCard extends Component {
  state = {}

  addtoCart = async () => {
    // const { dish, type, introduce, picture, cost } = this.props.StoreCard;
    // console.log(this.props.StoreCard);
    try {
      const { menuItemId, restaurantId, restaurantName, dish, type, picture, cost } = this.props.StoreCard;

      const res = await axios.post("http://localhost/PHP/cart/getcart.php", { menuItemId: menuItemId })
      // .then(function(response) {
      //   console.log(response);
      // }); 
      var carts = res.data;
      var id = carts.id
      var mount = carts.mount;

      // console.log(carts);
      // console.log(mount);

      if (carts) {
        // 如果購物車裡已有此筆資料

        // const { id, mount} = this.props.StoreCard;
        const cart = {
          id,
          mount
        }
        // const cmount = parseInt(carts.mount);
        cart.mount = ++mount;
        console.log(cart);
        // 修改數量
        await axios.put("http://localhost/PHP/cart/putcart.php", cart);
        // .then(function(response) {
        //   console.log(response);
        // })
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
        // console.log(cart);
        // await axios.post("http://localhost/PHP/cart/postcart.php", this.props.StoreCard);
        await axios.post("http://localhost:80/PHP/cart/postcart.php", cart);
        //   .then(function(response) {
        //     //code here 
        //     console.log(response);
        // });

        
      }

      toast.info("已成功新增至購物車!");

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
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 col-sm-12'>
                <img src={picture} alt="" name="picture" height="100" />
                {/* 圖片 */}
                <div className='row m-2'>
                  <div className='col'>
                    {/* 商品名稱 */}
                    <h4 name="dish">{dish}</h4>
                    <br />
                    {/* 金額 */}
                    <span>$<span name="cost">{cost}</span></span>
                    <div name="type">{type}</div>
                    <div name="introduce">{introduce}</div>

                  </div>
                  <button type="submit" className='mt-4 btn btn-primary rounded-lg' onClick={this.addtoCart}>+</button>
                  <ToastContainer />
                </div>
              </div>
            </div>
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default StoreCard;