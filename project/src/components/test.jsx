import React, { Component } from 'react';
import axios from 'axios';
class test extends Component {
  state = {
    restaurant: []
  }
  componentDidMount = async () => {
    // let url = "http://localhost/finalproject/home.php";
    let url = "http://localhost/finalproject/firstsql2.php";
    await axios.get(url)
      .then(res => {
        console.log("success");
        // console.log(res.data);
        this.state.restaurant = res.data;
        this.setState({});
      })
      .catch(err => {
        console.log("failed");
      });
  }
  stateShow = () => {
    console.log(this.state);
  }
  render() {
    return (
      <>
        <h1>gaga</h1>
        <button onClick={this.stateShow}>state show </button>
        <hr />
        {this.state.restaurant.map((restaurant, index) => {
          return (
            <h5 key={index}>{restaurant.name} : {restaurant.region} : {restaurant.picture}</h5>
          )
        })}

      </>
    );
  }
}

export default test;