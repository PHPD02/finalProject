import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

// import '../css/navbar.css'
var getemail = localStorage.getItem('email');

class Navbar extends Component {
    state = {}

    loginClick = () => {
        if (getemail) {
            //登入狀態，不能連去登入頁
            window.location = "http://localhost:3000/index";
            // window.history.back()
            // $('#loginin').hide();
        }else {
            $('#login1').fadeIn();
            $('#loginCompany').hide();
            $('#loginComsumer').hide();
        }
    }

    logoutClick() {
        // 登出
        localStorage.clear();
        window.location = "http://localhost:3000/index";

    }

    componentDidMount() {
        // console.log(uId);
        if (getemail) {
            //登入狀態
            $('#loginin').attr("type", "hidden");
            $('#logoutout').attr("type", "submit");
        }
        else {
            $('#logoutout').attr("type", "hidden");
            $('#loginin').attr("type", "submit");
        }
    }

    

    render() {
        return (
            <React.Fragment>

                <nav className="navbar navbar-expand-md navbar-light fixed-top bg-warning">
                    <NavLink to="/index" className="navbar-brand" href="#">Icon</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                        </ul>

                        <div className="form-inline mt-2 mt-md-0">
                            {/* <NavLink to="/login1"><button onClick={this.loginClick} className="btn btn-outline-success my-2 my-sm-0" type="submit">login</button></NavLink> */}
                            <NavLink to="/login1"><input id="loginin" onClick={this.loginClick} className="btn btn-outline-success my-2 my-sm-0" type="submit" value="login" /></NavLink>
                            <NavLink to="/"><input id="logoutout" onClick={this.logoutClick} className="btn btn-outline-primary my-2 my-sm-0" type="hidden" value="logout" /></NavLink>
                            <NavLink to="/cart"><button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Cart</button></NavLink>
                        </div>
                    </div>
                </nav>

            </React.Fragment>
        );
    }
}

export default Navbar;