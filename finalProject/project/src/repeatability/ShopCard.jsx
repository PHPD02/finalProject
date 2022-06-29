import React, { Component } from 'react';
class ShopCard extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <div className='container'>
          <div className='row'>
            <div className='col-12 card'>
              <p>奶茶布丁</p>
              <div className=''><button className='float-right btn btn-danger'>+</button></div>
              <span>$<span>55</span></span>
            </div>
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default ShopCard;