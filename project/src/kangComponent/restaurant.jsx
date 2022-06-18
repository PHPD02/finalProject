import React from "react";
class Restaurant extends React.Component {
  state = {};


  render() {
    const {Name,Picture1,star,comment,restauranttype,Description,delivercost}= this.props.restaurant;





    return (
      <div className="card">
        <img src={Picture1} className="card-img-top" alt={Picture1}/>
        {/* 因為上面解構了 */}
        <div className="card-body">
          <span className="card-headline d-flex  justify-content-between">
            <h5 className="card-title"><b>{Name}</b></h5>
            <div>
              <i className="fa fa-star " style={{ color: "pink" }}></i>
              <span className="star-point">{star}</span>
              <span className="comment-amount">({comment})</span>
            </div>
          </span>
          <small className="restaurant-type">$$$, {restauranttype}</small>
          <p className="card-text">{Description}</p>
          <p className="card-price ">$ {delivercost}<small> 外送服務費</small></p>
        </div>
      </div>
    );
  }
}

export default Restaurant;
