import React from "react";
import Restaurant from "./restaurant";

class Restaurants extends React.Component {
  state = {};
restaurant = {
    name:'八方雲集',
    image:'../../img/img1.jpg',
    star:'5',
    comment:'150',
    restauranttype:'中式',
    describe:'八方雲集雲門舞集',
    delivercost:'25',
}



  render() {
    return (
      <div className="Restaurants">
        <div className="container ">
          <div className="row ">
            <div className="col-lg-3 col-md-4 col-sm-6 my-4">
                <Restaurant restaurant={this.restaurant} />
                {/* 我適用props傳遞方式不是用state */}
            </div>
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
