import React, { Component } from 'react';
import axios from 'axios';
class test extends Component {
  state = {
    address: ""
}
addrInput = (e) => {
    this.state.address = e.target.value;
}
getPhp = async () => {
    console.clear();
    let url = "http://localhost/finalProject_php/test/getTest.php"
    await axios.get(url, { params: { address: this.state.address } })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log("failed");
        })
}
stateShow = () => {
    console.log(this.state.address);
}
render() {
    return (
        <>
            <button onClick={this.stateShow}> state show </button>
            <input type="text" onChange={this.addrInput} />
            <br />
            <button onClick={this.getPhp}>submit</button>
            <hr />

        </>
    );
}
}
export default test;