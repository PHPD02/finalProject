// import Axios from 'axios';
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { height } from '@mui/system';
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
          <div className='container' style={{ height: '150px' }} >
            <div className='row mt-3'>
              {/* <div className='col-md-12 col-sm-12'> */}
              <img src={picture} alt="" name="picture" height="100" className='col-3' />
              {/* 圖片 */}
              <div className='col-9 '>
                {/* <div className='col'> */}
                  {/* 商品名稱 */}

                  {/* 金額 */}
                  <h4 name="dish">{dish}</h4>
                  <div className="row">
                    <div name="type" className='col-10'>{type}</div>
                    <button type="submit" className='col-2 btn btn-primary rounded-lg h-25' onClick={this.addtoCart}>+</button>
                  </div>
                  <span>$<span name="cost" >{cost}</span></span>
                  <div className="row">
                  <div name="introduce" className='col-10'>{introduce}</div>
                  </div>
                  {/* <span>$<span name="cost" >{cost}</span></span>
                    <div name="introduce" className='col'>{introduce}</div> */}
                  <br />
                  {/* <div className="row">
                      <div name="introduce" className='col'>{introduce}</div>
                      </div> */}
                {/* </div> */}


              </div>
              {/* </div> */}
            </div>
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default StoreCard;