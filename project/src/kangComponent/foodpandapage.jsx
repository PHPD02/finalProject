import React from "react";
class FoodpandaPage extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <button type="button" className="btn btn-primary">
          Primary
        </button>
        <h1>Foodpanda Page</h1>
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{border:'1px solid black',
                height:'35vh'
        }}
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src="../img/img1.jpg " className="d-block w-100" alt="img1" />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
            <img src="../img/img2.jpg " className="d-block w-100" alt="img2" />
            </div>
            <div className="carousel-item">
            <img src="../img/img1=3.jpg " className="d-block w-100" alt="img1=3" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default FoodpandaPage;
