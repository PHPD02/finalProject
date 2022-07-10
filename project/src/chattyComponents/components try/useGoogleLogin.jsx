import React, { Component } from 'react';
import { GoogleLogin, GoogleOAuthProvider, googleLogout } from "@react-oauth/google";
import jwtDecode from 'jwt-decode';
import { useState } from 'react';
import $ from 'jquery';


const useGoogleLogin = () => {
  const [ user, setUser] = useState({});

  function handleCallbackResponse(response) {
    // console.log(response);
    // console.log(response.credential);
    var userObject = jwtDecode(response.credential);
    console.log(userObject);
    setUser(userObject);
    $('.btnLogin').hide();
    $('.btnLogout').show();
  }

  function handleSignOut (event) {
    setUser({});
    $('.btnLogin').show();
    $('.btnLogout').hide();
  }


  return (
    <React.Fragment>
      <br /><br /><br />
      <GoogleOAuthProvider clientId="216063196453-rq2ca06ndlf13q47gghp0d7g227flpp0.apps.googleusercontent.com">
        {/* <button className='btn btn-success' onClick={()=> login()}>Singn in  with Google</button> */}
        <div className='btnLogin'>
          <GoogleLogin
          onSuccess={handleCallbackResponse}
          onError={() => {
            console.log('Login Failed');
          }}
        />
        </div>
        <div className='btn btn-danger btnLogout' 
          onClick={ (e) => handleSignOut(e)} style={{ display: "none"}}>Sign out</div>
        { user &&
          <div>
            <h3>{user.name}</h3>
            <h3>{user.email}</h3>
          </div> }
        {/* <GoogleLogin
          onSuccess={handleCallbackResponse}
          onError={() => {
            console.log('Login Failed');
          }}
        /> */}
      </GoogleOAuthProvider>
    </React.Fragment>
  );
}


export default useGoogleLogin;