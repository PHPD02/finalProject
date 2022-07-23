import React, { Component } from 'react';
import { GoogleLogin, GoogleOAuthProvider, googleLogout } from "@react-oauth/google";
import jwtDecode from 'jwt-decode';
import { useState } from 'react';
import $ from 'jquery';
import { type } from '@testing-library/user-event/dist/type';


const useGoogleLogin = () => {
  const [ user, setUser] = useState({});

  function handleCallbackResponse(response) {
    // console.log(response);
    // console.log(response.credential);
    // console.log(jwtDecode( response.clientId));

    var userObject = jwtDecode(response.credential);
    console.log(userObject);
    setUser(userObject);

    // localStorage.setItem('email', userObject.email);
    // localStorage("https://accounts.google.com").setItem('promo', userObject);
    // $('.btnLogin').hide();
    // $('.btnLogout').show();
  }

  function handleSignOut (event) {
    setUser({});
    // $('.btnLogin').show();
    // $('.btnLogout').hide();
  }


  return (
    <React.Fragment>
      {/* <br /><br /><br /> */}
      {/* <div className='btnLogin' > */}
      <GoogleOAuthProvider clientId="216063196453-rq2ca06ndlf13q47gghp0d7g227flpp0.apps.googleusercontent.com">
          {/* <div className='btn-block m'> */}
          <GoogleLogin
          width="334px"
          onSuccess={handleCallbackResponse}
          onError={() => {
            console.log('Login Failed');
          }}
        />
          {/* </div> */}
        {/* <div className='btn btn-danger btnLogout' 
          onClick={ (e) => handleSignOut(e)} style={{ display: "none"}}>Sign out</div>
        { user &&
          <div>
            <h3>{user.name}</h3>
            <h3>{user.email}</h3>
          </div> } */}
      </GoogleOAuthProvider>
      
    </React.Fragment>
  );
}


export default useGoogleLogin;
