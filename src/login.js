import { Component } from "react"
import React from 'react'
import './Sign-up.css'
import './login.css'
import logo from './logo.png'
import 'font-awesome/css/font-awesome.min.css';

class Login extends Component{
    render(){
        return(
            <React.Fragment>
                 <div className="Page-Header">
                    <img src={logo} className="Logo" alt="Logo" />
                    <button className="Settings Header-fonts"> Settings </button>
                    <button className="Help1 Header-fonts"> Help </button>
                    <button className="Login Header-fonts"> Sign-up </button>
                </div>
                <p className="Head-login"> Sign in </p> 
                <div className="Login-box">
                    <p className="First-name Signup-text"> Email</p>
                    <input type="text" className="Eml-login Signup-textbox" id="eml" />
                    <p className="Pass-login Signup-text"> Password </p>
                    <input type="password" className="Passtxt-login Signup-textbox" id="pass" />
                    <button className="Login-button"> Sign in </button>
                </div>
                <hr className="Line" />
                <div className="Box1">
                        <p> Present Idea </p>
                        <a href="" className="Link-text"> Request an offer </a><br /><br />
                        <a href="" className="Link-text"> How it works </a><br /><br />
                        <a href="" className="Link-text"> Reviews </a><br /><br />
                        <a href="" className="Link-text"> Stories </a>
                </div>
                <div className="Box2">
                    <p> Investor </p>
                    <a href="" className="Link-text"> Make an offer </a><br /><br />
                    <a href="" className="Link-text"> Request an offer </a>
                </div>
                <div className="Box3">
                    <p> Resources </p>
                    <a href="" className="Link-text"> Blog </a><br /><br />
                    <a href="" className="Link-text"> Guides </a><br /><br />
                    <a href="" className="Link-text"> FAQ </a><br /><br />
                    <a href="" className="Link-text"> Help Center </a>
                </div>
                <div className="Box4">
                    <p> About </p>
                    <a href="" className="Link-text"> Company </a><br /><br />
                    <a href="" className="Link-text"> Career </a><br /><br />
                    <a href="" className="Link-text"> Press </a><br /><br />
                    <a href="" className="Link-text"> Contact </a>
                </div>
                <div className="Box5">
                    <p> Partners </p>
                    <a href="" className="Link-text"> Amrev Media </a>
                </div>
                <div className="Box6">
                    <p> Sell Courses </p>
                    <a href="" className="Link-text"> Get Paid </a><br /><br />
                    <a href="" className="Link-text"> Tour Homes </a>
                </div>
                <div className="Box7">
                    <p> Terms & Privacy </p>
                    <a href="" className="Link-text"> Trust & Safety </a><br /><br />
                    <a href="" className="Link-text"> Terms of Service </a><br /><br />
                    <a href="" className="Link-text"> Privacy Policy </a><br /><br />
                    <a href="" className="Link-text"> Do Not Sell My Info </a>
                </div>
                <hr className="Line1" />
                <div className="Footer">
                    <p> Offer eligibility and purchase price vary. Featured customers may have been 
                    compensated for their time. Their opinions and views are solely their own. </p> 
                        
                    <p> Media Logo Use: FORTUNE is a registered trademark of FORTUNE Media IP Limited.
                    © 2020 Forbes. © 2020 The New York Times. All rights reserved. Used under license.
                    These companies are not affiliated with, and do not endorse products or services of, 
                    Homies.</p>
                    <br />

                    <p> @2020 Logo </p>
                        
                    <a href="#" className="fa fa-facebook"></a>
                    <a href="#" className="fa fa-instagram"></a>
                    <a href="#" className="fa fa-twitter"></a>
                </div>
            </React.Fragment>
        )
    }
}

export default Login