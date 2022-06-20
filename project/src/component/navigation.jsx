import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Navigation extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className='nav'> 
                    <a href="#"> Home </a>
                    <a href="#"> Login </a>
                </div>
            </div>
        );
    }
}

export default Navigation;