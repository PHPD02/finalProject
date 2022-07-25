import React, { Component } from 'react';
import {auth} from "./firebase"
import "../../css/firebase.css"


function Signout() {
    return ( 
        <div className='signout-wrapper '>
            <span className='avatar'></span>
            <span className='name'>南屯第一外送員</span>
            
            <button onClick={()=>auth.signOut()} className="signout-button ">離開聊天室</button>

        </div>
     );
}

export default Signout;
