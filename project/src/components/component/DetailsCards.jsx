import React, { Component } from 'react';
class Details extends Component {
  state = {}
  details = this.props.catchDetails;
  componentDidMount = async () => {
    // console.log(this.catchDetails.orderId);
    // console.log(this.rest.region);
  }
  render() {
    return (
      <React.Fragment>
        <br />
        <h5>訂單編號:{this.details.orderId}</h5>
        <br />
        <h5>訂單配送來自:{ }</h5>
        <br />
        <h5>送餐地址:{ }</h5>
        <br />
        <h5>總計: ${ }</h5>
        {/* 撈資料庫產生 */}
        <h5>查看細節({ }個品項):
          <span className="dropdown">
            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <i className="dropdown-item">{ }</i>
            </div>
          </span></h5>
      </React.Fragment>
    );
  }
}

export default Details;