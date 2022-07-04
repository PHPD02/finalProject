import React, { Component } from 'react';
class ShopCard extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <div className='card' style={{ boxShadow: "3px 3px 3px grey" }}>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 col-sm-12'>
                <svg className="bd-img bd-img-lg featurette-image img-fluid rounded float-left" width="100" height="100" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eee" /><text x="25%" y="25%" fill="#aaa">100x100</text></svg>
                <div className='row m-2'>
                  <div className='col'>
                    <h4>奶茶布丁</h4>
                    <br />
                    <span>$<span>55</span></span>
                  </div>

                  <button type="button" className='mt-4 btn btn-primary rounded-lg'>+</button>
                </div>

              </div>



            </div>
          </div>
        </div>



      </React.Fragment>
    );
  }
}

export default ShopCard;