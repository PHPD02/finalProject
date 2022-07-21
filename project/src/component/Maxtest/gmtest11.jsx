/* 抓取兩點位置 */
// import googleMapReact from 'google-map-react';
import React, { Component } from 'react';
import { DistanceMatrixService, GoogleMap, useJsApiLoader } from '@react-google-maps/api';

function Gmtest11() {
    let addrA = this.props.addrA;
    let addrB = this.props.addrB;

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCI7LCbJjQCohMVQbtihIqOqg9a-S0l9cI"
    })

    let distanceToParent = (distance) => {
        this.props.func(distance);
    }
    return isLoaded ? (
        <>
            <h1> 抓兩點位置 </h1>
            <DistanceMatrixService
                options={{
                    destinations: [addrA], // 台中火車站
                    origins: [addrB], // 資展這裡
                    travelMode: "DRIVING",  // BICYCLING, DRIVING, TRANSIT, WALKING
                }}
                callback={(response) => {
                    // console.log(response)
                    // console.log(response.rows[0].elements[0].distance.text)
                    distanceToParent(response.rows[0].elements[0].distance.text)
                }}
            />
        </>

    ) : <></>
}

export default React.memo(Gmtest11)