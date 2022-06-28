import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// import '../css/navbar.css'

class Navbar extends Component {
    state = {}
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
                            {/* <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li> */}
                        </ul>
                        {/* <form className="form-inline mt-2 mt-md-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form> */}

                        <div className="form-inline mt-2 mt-md-0">
                        <NavLink to="/login1"><button className="btn btn-outline-success my-2 my-sm-0" type="submit">login</button></NavLink>
                        <NavLink to="/cart"><button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Cart</button></NavLink>
                        </div>
                    </div>
                </nav>
                
            </React.Fragment>
        );
    }
}

export default Navbar;