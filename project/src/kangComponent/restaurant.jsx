import React from "react";
class Restaurant extends React.Component {
  state = {};


  render() {
    const {name,image,star,comment,restauranttype,describe,delivercost}= this.props.restaurant;





    return (
      <div className="card">
        <img src={image} className="card-img-top" alt={image}/>
        {/* 因為上面解構了 */}
        <div className="card-body">
          <span className="card-headline d-flex  justify-content-between">
            <h5 className="card-title"><b>{name}</b></h5>
            <div>
              <i className="fa fa-star " style={{ color: "pink" }}></i>
              <span className="star-point">{star}</span>
              <span className="comment-amount">({comment})</span>
            </div>
          </span>
          <small className="restaurant-type">$$$, {restauranttype}</small>
          <p className="card-text">{describe}</p>
          <p className="card-price ">$ {delivercost}<small> 外送服務費</small></p>
        </div>
      </div>
    );
  }
}

export default Restaurant;
