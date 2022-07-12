import React, { Component } from 'react';
import axios from 'axios';
class test extends Component {
  state = {
    restaurant: []
  }
  componentDidMount = async () => {
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
        {this.state.restaurant.map((value, index) => {
          return (
            <h5 key={index}>{value.name} : {value.region} : {value.picture}</h5>
          )
        })}

      </>
    );
  }
}

export default test;