import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {auth} from "./firebase"
import {Button} from "react-bootstrap";
import "../../css/firebase.css"

function firebaseSignin() {
    function signInWithGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider() ;
        auth.signInWithPopup(provider)
    }


    return ( 
        <div className='signin-wrapper'>
            <Button onClick={signInWithGoogle} className='signin-button'> Google登入</Button>
        </div>
     );
}

export default firebaseSignin;