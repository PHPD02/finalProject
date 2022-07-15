// import Axios from 'axios';
import React, { Component } from 'react';
// import $ from 'jquery';


class StoreCard extends Component {
  state = { }

  render() {
    const { dish, type, introduce, picture, cost } = this.props.StoreCard;
    return (
      <React.Fragment>
        <div className='card' style={{ boxShadow: "3px 3px 3px grey" }}>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 col-sm-12'>
                <img src={picture} alt="" height="100"  />
                {/* 圖片 */}
                <div className='row m-2'>
                  <div className='col'>
                    {/* 商品名稱 */}
                    <h4>{dish}</h4>
                    <br />
                    {/* 金額 */}
                    <span>$<span>{cost}</span></span>
                    <div>{type}</div>
                    <div>{introduce}</div>

                  </div>
                  <button type="button" className='mt-4 btn btn-primary rounded-lg'>+</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <button onClick={this.handleSumbit}>click me</button> */}

        {/* <div>{this.state.menuList.dish}</div> */}





      </React.Fragment>
    );
  }
}

export default StoreCard;