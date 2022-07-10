import React, { Component } from 'react';
import GoogleLogin from './useGoogleLogin';
import Usefacebooklogin from './facebooklogin';

class Testscreen extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <h1>testscreen</h1>
                <GoogleLogin/>
                {/* <Usefacebooklogin /> */}
            </React.Fragment>
            
        );
    }
}
 
export default Testscreen;