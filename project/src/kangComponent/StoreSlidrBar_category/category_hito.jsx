import React from "react";
import Carousel from "better-react-carousel";
// import Restaurant from "./restaurant";
import axios from "axios";

class StoreSlidrBar2_drinks extends React.Component {
  state = {
    restaurantsList: [],
    star:(Math.random()*(1-5) + 5).toFixed(1),
    comment:Math.floor(Math.random()*1200),
  };

  async componentDidMount() {
    var result = await axios.get("http://localhost:8050/restaurants/category/hito");
    this.setState({ restaurantsList: result.data });
  }

  render() {
    return (
      <div>
        <Carousel
          cols={4}
          rows={1}
          gap={40}
          dotColorActive={"red"}
          loop
          scrollSnap
        >
          {this.state.restaurantsList.map((item, index) => {
            return (
              <Carousel.Item>
                <div key={item.id}>
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
                          <span className="star-point">{(Math.random()*(1-5) + 5).toFixed(1)}</span>
                          
                          <span className="comment-amount">
                            ({Math.floor(Math.random()*1200)})
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
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default StoreSlidrBar2_drinks;
// https://github.com/devpanther/better-react-carousel?ref=reactjsexample.com
