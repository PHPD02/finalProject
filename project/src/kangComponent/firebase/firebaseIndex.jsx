import React, { Component } from "react";
import Signin from "./Signin";
import Chat from "./Chat";
import {auth} from "./firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import '../../css/firebase.css';

function firebaseIndex() {
    const [user] = useAuthState(auth);
  return (
    <div>
    {user ?<Chat />:<Signin />}
      {/* <Signin />
      <Chat /> */}
    </div>
  );
}

export default firebaseIndex;
