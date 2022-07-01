import React, { Component } from 'react';

import { CountdownCircleTimer } from 'react-countdown-circle-timer'

class Test extends Component {
    state = {}
    render() {
        return (
            <>
                <CountdownCircleTimer
                    isPlaying
                    duration={180}
                    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                    colorsTime={[7, 5, 2, 0]}
                >
                    {({ remainingTime }) => remainingTime}
                </CountdownCircleTimer>
            </>
        );
    }
}

export default Test;