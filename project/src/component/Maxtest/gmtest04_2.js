/* 抓取兩點位置 */
// import googleMapReact from 'google-map-react';

import React, { Component } from 'react';
import { DistanceMatrixService, GoogleMap, useJsApiLoader } from '@react-google-maps/api';


function Gmtest04_2() {
    let addrA = this.props.addrA;
    let addrB = this.props.addrB;
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCI7LCbJjQCohMVQbtihIqOqg9a-S0l9cI"
    })

    let Testl = (distance) => {
        this.props.func(distance);
    }

    return isLoaded ? (
        <>
            <h1> 抓兩點位置 </h1>
            <DistanceMatrixService
                options={{
                    // destinations: [{ lat: 1.296788, lng: 103.778961 }],
                    // // origins: [{ lng: 103.780267, lat: 1.291692 }],
                    // destinations: [{ lat: 24.137263, lng: 120.686903 }], // 台中火車站
                    // origins: [{ lat: 24.1505196, lng: 120.6510087 }], // 資展這裡
                    // destinations: ["台中火車站"], // 台中火車站
                    // origins: ["資展國際股份有限公司-中區中心 408台中市南屯區公益路二段51號"], // 資展這裡
                    destinations: [addrA], // 台中火車站
                    origins: [addrB], // 資展這裡
                    travelMode: "DRIVING",  // BICYCLING, DRIVING, TRANSIT, WALKING
                }}
                callback={(response) => {
                    console.log(response)
                    console.log(response.rows[0].elements[0].distance.text)

                }}
            />
        </>

    ) : <></>
}

export default React.memo(Gmtest04_2)