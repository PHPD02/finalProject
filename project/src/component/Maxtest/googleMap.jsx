import React, { Component } from 'react';
import axios from 'axios';

class SimpleMap extends Component {

    state = {
        addr: ''
    }
    addrInput = (event) => {
        this.state.addr = event.target.value;
    }
    ttt = async () => {
        console.log()
        let url = "https://maps.googleapis.com/maps/api/geocode/json"
        await axios.get(url, {
            params: {
                key: "AIzaSyCI7LCbJjQCohMVQbtihIqOqg9a-S0l9cI",
                // address: "彰化縣大城鄉台西村"
                address: this.state.addr
            }
        })
            .then(res => {
                console.log("success");
                console.log(res);
            })
            .catch(err => {
                console.log("failed");
            });


    }

    stateShow = () => {
        console.log(this.state)
    }

    render() {
        return (
            <>
                <button onClick={this.stateShow}>state console</button>
                <hr />
                <input type="text" onChange={this.addrInput}></input>
                <button onClick={this.ttt}>click</button>
                <p>彰化縣大城鄉台西村</p>
                <p>彰化縣天天好心情皮卡丘路</p>
            </>
        );
    }
}

export default SimpleMap;