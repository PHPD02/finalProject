/**
 * 時間倒數
 *   input:
 *     @param {}setTime 方案成立時間 
 *     @param {}limitTime 方案限制時間
 *   output:
 *     
 */
import React, { Component } from 'react';

class TimeCountDown extends Component {
    state = {
        currentTime: new Date().valueOf(),
        showTimeVal: null,
        showTime: {
            hr: null,
            min: null,
            sec: null
        },
        setTime : 1656644679584,
        limitTime : 86400000,
        // setTime : 1656644679584.
        // limitTime : 86400000
    }
    // setTime = 0
    // limitTime = 0
    // 86400 = 24hr0
    // 1 = 1sec
    intervalId = null

    constructor() {
        super();
    }
    async componentDidMount() {
        console.log(this)
        console.log(this.props)
        if (this.props.limitTime != null) {
            this.state.limitTime = this.props.limitTime;
        }
        if (this.props.setTime != null) {
            this.state.setTime = this.props.setTime;
        }
        this.setState({})
        this.intervalId = setInterval(this.countdown, 500);
    }
    countdown = () => {
        this.state.currentTime = new Date().valueOf();
        // this.state.showTimeVal = (this.limitTime - (this.state.currentTime - this.setTime));
        this.state.showTimeVal = (this.state.limitTime - (this.state.currentTime - this.state.setTime));
        this.state.showTime.hr = Math.floor(this.state.showTimeVal % (24 * 60 * 60 * 1000) / (60 * 60 * 1000));
        this.state.showTime.min = Math.floor(this.state.showTimeVal % (60 * 60 * 1000) / (60 * 1000));
        this.state.showTime.sec = Math.floor(this.state.showTimeVal % (60 * 1000) / 1000);
        this.setState({});
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    datashow = () => {
        console.log(this.state);
        console.log(this.setTime);
        console.log(this.limitTime);

    }
    render() {
        return (
            <>
                <label className='h3'>{this.state.showTime.hr} </label>
                <label className='p'> hr : </label>
                <label className='h3'>{this.state.showTime.min} </label>
                <label className='p'> min : </label>
                <label className='h3'>{this.state.showTime.sec} </label>
                <label className='p'> sec</label>

                <button onClick={this.datashow}> test</button>
                {/* {this.state.showTime.hr} hr : {this.state.showTime.min} min : {this.state.showTime.sec} sec */}
            </>
        );
    }
}

export default TimeCountDown;