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

        // setTime : 1656644679584.
        // limitTime : 86400000
    }
    // setTime = 0
    // limitTime = 0
    // 86400 = 24hr0
    // 1 = 
    setTime = null
    limitTime = null
    intervalId = null
    constructor() {
        super();
    }
    async componentDidMount() {
        if (this.props.limitTime != null) {
            this.limitTime = this.props.limitTime;
        }
        if (this.props.setTime != null) {
            this.setTime = this.props.setTime;
        }
        this.setState({})
        this.intervalId = setInterval(this.countdown, 500);
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    /*  */
    countdown = () => {
        this.state.currentTime = new Date().valueOf();
        // this.state.showTimeVal = (this.limitTime - (this.state.currentTime - this.setTime));
        this.state.showTimeVal = (this.limitTime - (this.state.currentTime - this.setTime));
        if (this.state.showTimeVal > 0) {

            this.state.showTime.hr = Math.floor(this.state.showTimeVal % (24 * 60 * 60 * 1000) / (60 * 60 * 1000));
            this.state.showTime.min = Math.floor(this.state.showTimeVal % (60 * 60 * 1000) / (60 * 1000));
            this.state.showTime.sec = Math.floor(this.state.showTimeVal % (60 * 1000) / 1000);
        }
        else {
            this.state.showTime.hr = 0;
            this.state.showTime.min = 0;
            this.state.showTime.sec = 0;
            this.setState({});
            clearInterval(this.intervalId);
            this.props.parentFunc();
        }
        this.setState({});
    }

    /* Render */
    render() {
        return (
            <>
                <label className='h3'>{this.state.showTime.hr} </label>
                <label className='p'> hr : </label>
                <label className='h3'>{this.state.showTime.min} </label>
                <label className='p'> min : </label>
                <label className='h3'>{this.state.showTime.sec} </label>
                <label className='p'> sec</label>
            </>
        );
    }
}

export default TimeCountDown;