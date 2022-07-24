import React, { Component } from 'react';
import { DistanceMatrixService, GoogleMap, useJsApiLoader } from '@react-google-maps/api';


class Gmtest04 extends Component {
    state = {
        addrA: '',
        addrB: '',
        distance: 0,

    }
    isLoaded = null
    componentDidMount = () => {
        this.isLoaded = useJsApiLoader({
            id: 'google-map-script',
            googleMapsApiKey: "AIzaSyCI7LCbJjQCohMVQbtihIqOqg9a-S0l9cI"
        })
    }

    stateShow = () => {
        console.log(this.state);
    }
    addrAInput = (e) => {
        this.state.addrA = e.target.value;
    }
    addrBInput = (e) => {
        this.state.addrB = e.target.value;
    }
    distanceShow = () => {
        this.setState({});
    }
    render() {
        return (this.isLoaded ?
            <>
                {/* ============================================== */}

                <button onClick={this.stateShow}> click</button>
                <hr />
                <input type="text" placeholder='A地址' onChange={this.addrAInput} />
                <br />
                <input type="text" placeholder='B地址' onChange={this.addrBInput} />
                <br />
                <button onClick={this.distanceShow}> distance Show</button>
                <hr />
                {/* <button onClick={this.testFunction}> click test</button> */}
                {/* =========================================== */}
                <DistanceMatrixService
                    options={{
                        destinations: [this.state.addrA],
                        origins: [this.state.addrB],
                        travelMode: "DRIVING",  // BICYCLING, DRIVING, TRANSIT, WALKING
                    }}
                    callback={(response) => {
                        console.log(response);
                        console.log(response.rows[0].elements[0].distance.text);
                        
                        this.state.distance = response.rows[0].elements[0].distance.text;
                    }}
                />
            </>
            :
            <></>
        );
    }
}

export default Gmtest04;

