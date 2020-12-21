import { Component } from "react"
import React from 'react'
import logo from './logo.png'
import propic from './pro-pic.png'
import bg from './bg.png'
import Post from './Post.js'
import './CCHome.css'
import './GetPro.css'
import { HiLightBulb } from "react-icons/hi"
import {BsBook} from "react-icons/bs"
import {RiSaveLine} from "react-icons/ri"
import {FaCcPaypal} from "react-icons/fa"

class GetPro extends Component{
    render(){
        return(
            <React.Fragment>
            <div className="Header">
                <img src={logo} className="logo" alt="Logo" />
                <input type="text" id="srch" placeholder="Search" className="Search" />
                <a href="" className="Setting Header-Text"> Settings </a>
                <a href="" className="Help Header-Text"> Help </a>
                <a href="" className="Noti Header-Text"> Notification </a>
                <img src={propic} className="pro-pic" /> 
            </div>
             <div className = "sidebar">
             <div className = "Container">
                 <div className = "container1">
                     <img src={bg} />
                     <div className = "container2">
                         <img src={propic} className="pro-pic1" /> 
                         <h1 id = "name" > John Doe </h1> 
                         <h2 id = "heading" > Designer </h2> 
                     </div> 
                     <div className = "line" > </div> 
                     <div className = "textbox" >
                         <button> 6 </button> 
                     </div> 
                     <div className = "textbox1" >
                         <button > 6 </button>
                     </div> 
                     <div className = "textbox2" >
                         <  button > 6 </button> 
                     </div> 
                     <div className = "rightbar" >
                          <HiLightBulb size={20} className="icon1" />
                         <a href="" id = "head1" > Ideas </a> 
                         <BsBook size={20} className="icon2" />
                         <a href="" id = "head2" > Courses </a> 
                         <RiSaveLine size={20} className="icon3" />
                         <a href="" id = "head3" > Saved </a>  
                     </div>
                 </div> 
             </div>
         </div>
         <div className="container">
            <p className="title"> Power up your ideas with Amrev Pro </p>
            <p className="title1"> Payment details </p>
            <button className="CCbutton"> Credit Card </button>
            <button className="PPbutton"> <FaCcPaypal size={50} /> </button>
            <input type="text" className="CN" placeholder="Card Number" />
            <input type="text" className="PC" placeholder="Postal/Zip Code" />
         </div>
        </React.Fragment>
        )
    }
}

export default GetPro