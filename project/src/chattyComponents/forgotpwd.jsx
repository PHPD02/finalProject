import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../always used/navbar';
import '../css/register.css';

class Forgotpwd extends Component {
    state = {  } 

    render() { 
        return (
            <React.Fragment>
                <Navbar />
                <br /><br /><br /><br /><br />
                <div id='registerform'>
                    <form className="form-signin shadow" id='registerformin'>
                        <h1 className="h3 mb-3 font-weight-normal">你的email是？</h1><br /> 
                        <h6>輸入你的email，我們將發送重設密碼連結</h6>
                        <label htmlFor="inputEmail" className="sr-only">電子郵件</label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="電子郵件" required autoFocus />
                    
                        <button className="btn btn-lg btn-danger btn-block mt-4" type="submit">重設密碼</button>
                        <NavLink to="/login3">
                            <button className="btn btn-lg btn-danger btn-block mt-4" type="submit">返回登入頁</button>
                        </NavLink>
                    </form>
                </div>
                
            </React.Fragment>
        );
    }
}
 
export default Forgotpwd;