import React from "react";
import Restaurant from "./restaurant";

class Restaurants extends React.Component {
  state = {
    restaurant:[
          ]
  };
  // restaurant = [
  //   {
  //     id: 1,
  //     name: "八方雲集",
  //     image: "../../img/img1.jpg",
  //     star: "5",
  //     comment: "150",
  //     restauranttype: "中式",
  //     describe: "八方雲集雲門舞集",
  //     delivercost: "25",
  //   },
  //   {
  //     id: 2,
  //     name: "50嵐",
  //     image: "../../img/img2.jpg",
  //     star: "4.2",
  //     comment: "90",
  //     restauranttype: "飲料",
  //     describe: "49+1等於560",
  //     delivercost: "30",
  //   },
  //   {
  //     id: 3,
  //     name: "大浦鐵板燒",
  //     image: "../../img/img3.jpg",
  //     star: "1.8",
  //     comment: "999",
  //     restauranttype: "中式",
  //     describe: "南投埔里台中大浦",
  //     delivercost: "30",
  //   },
  //   {
  //     id: 4,
  //     name: "四海遊龍",
  //     image: "../../img/img4.jpg",
  //     star: "2",
  //     comment: "90",
  //     restauranttype: "中式",
  //     describe: "隆隆鴻鴻鴻鴻集",
  //     delivercost: "90",
  //   },
  //   {
  //     id: 5,
  //     name: "八方雲集",
  //     image: "../../img/img1.jpg",
  //     star: "5",
  //     comment: "150",
  //     restauranttype: "中式",
  //     describe: "八方雲集雲門舞集",
  //     delivercost: "25",
  //   },
  // ]; 
  // 我們下面用map方式選染

  componentDidMount() {
    fetch("http://localhost:3005/restaurant")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          restaurant:data
        });
      });
  }

  render() {
    return (
      <div className="Restaurants">
        <div className="container ">
          <div className="row ">
            {this.state.restaurant.map((r) => {
              return (
                <div className="col-lg-3 col-md-4 col-sm-6 my-4" key={r.Id}>
                  {/* 這key值需要提供，但還是能跑 */}
                  <Restaurant restaurant={r} />
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
