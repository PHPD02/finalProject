import React, { Component } from 'react';
import {auth} from "./firebase"
import "../../css/firebase.css"


function Signout() {
    return ( 
        <div className='signout-wrapper '>
            <button onClick={()=>auth.signOut()} className="signout-button ">離開聊天室</button>
        </div>
     );
}

export default Signout;
