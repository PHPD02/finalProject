import React from "react";
import Restaurant from "./restaurant";
import axios from "axios";


// 給foodpanda下面更多用
class Restaurants extends React.Component {
  state = {
    restaurantsList: [],
    star:(Math.random()*(1-5) + 5).toFixed(1),
    comment:Math.floor(Math.random()*1200),
  };

  async componentDidMount() {
    var result = await axios.get("http://localhost:8000/restaurants/category/all");
    this.setState({ restaurantsList: result.data });
  }

  render() {
    return (
      <div className="Restaurants">
        <div className="container ">
          <div className="row ">
            {this.state.restaurantsList.map((item, index) => {
              return (
                <div className="col-lg-3 col-md-4 col-sm-6 my-4" key={item.id}>
                  {/* 這key值需要提供，但還是能跑 */}
                  <div className="card" style={{ maxHeight: "349px",cursor:"pointer" }}>
                    <img
                      src={item.picture}
                      className="card-img-top"
                      alt={item.picture}
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
                        <h5 className="card-title "
                        style={{ 
                          display: "webkitBox",
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          webkitLineClamp: "2",
                          lineHeight: "20px",
                          }}
                        >
                          <b>{item.name}</b>
                        </h5>
                        <div
                          className="float-right"
                          style={{ whiteSpace: "nowrap",width:"30%" }}
                        >
                          <i
                            className="fa fa-star "
                            style={{ color: "pink" }}
                          ></i>
                          <span className="star-point">{this.state.star}</span>
                          <span className="comment-amount">
                            ({this.state.comment})
                          </span>
                        </div>
                      </span>
                      <small className="restaurant-type">
                        $$$, {item.category}
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
                        {item.description}
                      </p>
                      <p className="card-price ">
                        $ {item.tel}
                        <small> 外送服務費</small>
                      </p>
                    </div>
                  </div>
                  {/* // 我適用props傳遞方式不是用state */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Restaurants;
