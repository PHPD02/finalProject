import React from 'react';
import { GoogleLogin, GoogleOAuthProvider, googleLogout } from "@react-oauth/google";
import jwtDecode from 'jwt-decode';
// import { useState } from 'react';
// import $ from 'jquery';
// import { type } from '@testing-library/user-event/dist/type';


const useGoogleLogin = () => {
  // const [ user, setUser] = useState({});

  function handleCallbackResponse(response) {
    // console.log(response);
    // console.log(response.credential);
    // console.log(jwtDecode( response.clientId));

    var userObject = jwtDecode(response.credential);
    var name = userObject.given_name;
    console.log(userObject);
    // setUser(userObject);
    // console.log(userObject.email);
    localStorage.setItem('uid', userObject.sub);
    localStorage.setItem('email', userObject.email);
    localStorage.setItem('firstname', userObject.family_name);
    localStorage.setItem('lastname', userObject.given_name);
    localStorage.setItem('picture', userObject.picture);
    
    alert('welcome！'+ name);
    window.location = "http://localhost:3000/";
  }

  // function handleSignOut (event) {
  //   setUser({});
  //   // $('.btnLogin').show();
  //   // $('.btnLogout').hide();
  // }


  return (
    <React.Fragment>
      {/* <br /><br /><br /> */}
      {/* <div className='btnLogin' > */}
      <GoogleOAuthProvider clientId="216063196453-rq2ca06ndlf13q47gghp0d7g227flpp0.apps.googleusercontent.com">
          {/* <div className='btn-block m'> */}
          <GoogleLogin
          // type='icon'
          // text="signin_with"
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
