import React from "react";
import SearchBar from "./searchbar"
import Restaurant from "./restaurant";
import Restaurants from "./restaurants";


class FoodpandaPage extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="d-flex justify-content-end mt-2">
        <button type="button" className="btn btn-outline-light text-dark mr-4">
          購物車
        </button>
        <button type="button" className="btn btn-outline-light text-dark">
          登入 / 註冊
        </button>
        </div>
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
            <div className="carousel-item " data-bs-interval="10000">
              <img src="../img/img1.jpg " className="d-block w-100" alt="img1" style={{width:'100%',overflow:'hidden'}}/>
            </div>
            <div className="carousel-item " data-bs-interval="2000">
            <img src="../img/img2.jpg " className="d-block w-100" alt="img2" />
            </div>
            <div className="carousel-item">
            <img src="../img/img3.jpg " className="d-block w-100" alt="img3" />
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
          </button>
        </div>
{/* 搜尋bar部分 */}
<div style={{margin:'50px 0 70px 0'}}>
<SearchBar />
</div>
<h2>優惠主打星<i className="fa fa-star" style={{color:'gold'}}></i></h2>
<div style={{margin:'20px 0 20px 0'}} className='category-lane'>

</div>

<Restaurants />


      </React.Fragment>
    );
  }
}

export default FoodpandaPage;
