import React, { Component } from 'react';
class ShopCard extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <div className='card'>
          <div className='container'>
            <div className='row'>
              <svg className="bd-img bd-img-lg featurette-image img-fluid rounded float-left" width="100" height="100" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eee" /><text x="25%" y="25%" fill="#aaa">100x100</text></svg>
              <div className='col-md-8'>
                <p>奶茶布丁</p>
                <span>$<span>55</span></span>
              </div>
              <div className='clearfix mt-5 ml-1'><button type="button" className='mt-4 btn btn-primary rounded-lg'>+</button></div>
            </div>
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default ShopCard;