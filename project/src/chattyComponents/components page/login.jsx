import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faStore } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import Navbar from '../../components/repeatability/Navbar';

var getemail = localStorage.getItem('email');
var getcemail = localStorage.getItem('cemail');

class Login1 extends Component {
    state = {}

    componentDidMount() {
        var url = "http://localhost:3000/";
        if (getemail || getcemail) {
            //登入狀態，不能連去登入頁
            window.location = url;
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="backimg">
                    <Navbar />
                    <div id="login1" className="container">
                        <h1 className='text-center my-4 border-bottom shadow-sm'
                            style={{
                                // backgroundColor:"white",
                                height: "80px", lineHeight: "100px"
                            }}
                        ><strong>請選擇您是廠商商家或消費者用戶</strong></h1>

                        <div className="row mt-5">
                            <div className="col text-center">
                                {/* <NavLink to="/login2"> */}
                                <NavLink to='/loginCompany'>
                                    <div className='btn btn-light p-5 shadow-lg card3d' onClick={this.companyClick}>
                                        <FontAwesomeIcon icon={faStore} className="fa-8x" /> <br />
                                        <h4 className='mt-4'>合作商家登入</h4>
                                    </div>
                                </NavLink>
                            </div>

                            <div className="col text-center">
                                {/* <NavLink to="/login3"> */}
                                <NavLink to='/loginComsumer'>
                                    <div className='btn btn-light p-5 shadow-lg card3d' onClick={this.comsumerClick}>
                                        <FontAwesomeIcon icon={faUserAlt} className="fa-8x" /> <br />
                                        <h4 className='mt-4'>消費者登入</h4>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Login1;