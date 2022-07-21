import React, { Component } from 'react';

import Gmtest11 from './gmtest11';

class GmTest12 extends Component {
    state = {
        addrA: '台中火車站',
        addrB: '台中新光三越',
        distance: 0
    }
    distanceShow = (distance) => {
        this.state.distance = distance;
    }
    render() {
        return (

            <Gmtest11
                addrA={this.state.addrA}
                addrB={this.state.addrB}
                func={this.distanceShow}></Gmtest11>
        );
    }
}

export default GmTest12;