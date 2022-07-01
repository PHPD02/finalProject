import React, { Component } from 'react';
import Countdown from 'react-countdown';

const Completionist = () => <span>You are good to go!</span>;
class Test extends Component {
    state = {}
    render() {
        return (
            <>
                <Countdown date={Date.now() + 5000000}>
                    <Completionist />
                </Countdown>
            </>
        );
    }
}

export default Test;