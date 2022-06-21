import React from "react";
class Restaurant extends React.Component {
  state = {};

  render() {
    const {
      Name,
      Picture1,
      star,
      comment,
      restauranttype,
      Description,
      delivercost,
    } = this.props.restaurant;

    return (
      <div className="card" style={{ maxHeight: "349px" }}>
        <img
          src={Picture1}
          className="card-img-top"
          alt={Picture1}
          style={{ height: "150px", width: "100%", objectFit: "cover" }}
        />
        {/* 因為上面解構了 */}
        <div className="card-body">
          <span className="card-headline d-flex  justify-content-between" style={{ height: "50px", width: "100%"}}>
            <h5 className="card-title">
              <b>{Name}</b>
            </h5>
            <div  className='float-right'style={{whiteSpace: 'nowrap'}}>
              <i className="fa fa-star " style={{ color: "pink" }}></i>
              <span className="star-point">{star}</span>
              <span className="comment-amount">({comment})</span>
            </div>
          </span>
          <small className="restaurant-type">$$$, {restauranttype}</small>
          <p
            className="card-text"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              WebkitLineClamp: "2",
              fontSize: "12px",
            }}
          >
            {Description}
          </p>
          <p className="card-price ">
            $ {delivercost}
            <small> 外送服務費</small>
          </p>
        </div>
      </div>
    );
  }
}

export default Restaurant;
