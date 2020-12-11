import { Component } from "react"
import React from 'react'
import './Landing.css'
import timeline from './timeline.jpg'
import logo from './logo.png'
import './Sign-up.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class Landing extends Component{
    render(){
        return(
            <React.Fragment>
                <div>
                    <img src={timeline}  className="Timeline" />
                    <img src={logo} className="Logo" />
                    <p className="Contact"> 1-844-759-7732 </p>
                    <a href="#" className="Login"> Login </a>
                    <Link to="/login" className="Login"> Login </Link>
                    <p className="para"> Present your idea and get investors  </p>
                    <p className="para1"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Vel vivamus aliquam neque ultricies. Sed mi volutpat scelerisque platea sed </p>
                    <button className="button"> Get Started </button>
                </div>
                <div>
                    <p className="heading heading1"> Lorem ipsum dolor sit amet, consectetur </p>
                    <p className="text text1">
                        ThisLorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Vel vivamus aliquam neque ultricies. 
                        Sed mi volutpat scelerisque platea sed convallis... see more Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. 
                        Vel vivamus aliquam neque ultricies. 
                        Sed mi volutpat scelerisque platea sed convallis...
                        <a href="#hide" id="hide">see more</a>
                        <a href="#/" id="show">see less</a>
                        <p id="txt">  ThisLorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vel vivamus aliquam neque ultricies. Sed mi volutpat scelerisque platea sed convallis... 
                        see more Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Vel vivamus aliquam neque ultricies. </p>
                    </p>
                    <img src=" " className="img1" alt="loading..." />
                    <img src=" " className="img2" alt="loading..." />
                    <p className="heading heading2"> Lorem ipsum dolor sit amet, consectetur </p>
                    <p className="text text2">
                        ThisLorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Vel vivamus aliquam neque ultricies. 
                        Sed mi volutpat scelerisque platea sed convallis... see more Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. 
                        Vel vivamus aliquam neque ultricies. 
                        Sed mi volutpat scelerisque platea sed convallis...
                        <a href="#hide1" id="hide1">see more</a>
                        <a href="#/" id="show1">see less</a>
                        <p id="txt1">  ThisLorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vel vivamus aliquam neque ultricies. Sed mi volutpat scelerisque platea sed convallis... 
                        see more Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Vel vivamus aliquam neque ultricies. </p>
                    </p>
                    <p className="heading heading3"> Lorem ipsum dolor sit amet, consectetur </p>
                    <p className="text text3">
                        ThisLorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Vel vivamus aliquam neque ultricies. 
                        Sed mi volutpat scelerisque platea sed convallis... see more Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. 
                        Vel vivamus aliquam neque ultricies. 
                        Sed mi volutpat scelerisque platea sed convallis...
                        <a href="#hide2" id="hide2">see more</a>
                        <a href="#/" id="show2">see less</a>
                        <p id="txt2">  ThisLorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vel vivamus aliquam neque ultricies. Sed mi volutpat scelerisque platea sed convallis... 
                        see more Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Vel vivamus aliquam neque ultricies. </p>
                    </p>
                    <img src=" " className="img3" alt="loading..." />
                </div>
                <div className="foot">
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
                </div>
            </React.Fragment>
        )
    }
}

export default Landing