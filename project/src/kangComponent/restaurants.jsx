import React from "react";
import Restaurant from "./restaurant";
import axios from "axios";

class Restaurants extends React.Component {
  state = {
    restaurantsList: [],
  };

  async componentDidMount() {
    var result = await axios.get("http://localhost:8000/restaurants/list");
    this.setState({ restaurantsList: result.data });
  }

  render() {
    return (
      <div className="Restaurants">
        <div className="container ">
          <div className="row ">
            {this.state.restaurantsList.map((item, index) => {
              return (
                <div className="col-lg-3 col-md-4 col-sm-6 my-4" key={index}>
                  {/* 這key值需要提供，但還是能跑 */}
                  <div className="card" style={{ maxHeight: "349px" }}>
                    <img
                      src={item.Picture1}
                      className="card-img-top"
                      alt={item.Picture1}
                      style={{
                        height: "150px",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                    {/* 因為上面解構了 */}
                    <div className="card-body">
                      <span
                        className="card-headline d-flex  justify-content-between"
                        style={{ height: "50px", width: "100%" }}
                      >
                        <h5 className="card-title">
                          <b>{item.Name}</b>
                        </h5>
                        <div
                          className="float-right"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          <i
                            className="fa fa-star "
                            style={{ color: "pink" }}
                          ></i>
                          <span className="star-point">{item.star}</span>
                          <span className="comment-amount">
                            ({item.comment})
                          </span>
                        </div>
                      </span>
                      <small className="restaurant-type">
                        $$$, {item.restauranttype}
                      </small>
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
                        {item.Description}
                      </p>
                      <p className="card-price ">
                        $ {item.delivercost}
                        <small> 外送服務費</small>
                      </p>
                    </div>
                  </div>
                  {/* // 我適用props傳遞方式不是用state */}
                </div>
              );
            })}

            {/* <div className="col-lg-3 col-md-4 col-sm-6 my-4">
                <Restaurant />
            </div>            
            <div className="col-lg-3 col-md-4 col-sm-6 my-4">
                <Restaurant />
            </div>            
            <div className="col-lg-3 col-md-4 col-sm-6 my-4">
                <Restaurant />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 my-4">
                <Restaurant />
            </div> */}

            {/* <div className="w-100 d-none d-md-block"></div>
強迫斷點 */}
          </div>
        </div>
      </div>
    );
  }
}

export default Restaurants;
