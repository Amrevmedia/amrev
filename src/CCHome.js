import { Component } from "react"
import React from 'react'
import logo from './logo.png'
import propic from './pro-pic.png'
import bg from './bg.png'
import Post from './Post.js'
import './CCHome.css'
import { HiLightBulb } from "react-icons/hi"
import {BsBook} from "react-icons/bs"
import {MdAttachMoney} from "react-icons/md"

class CCHome extends Component{
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
                         <button> 6 </button>; 
                     </div> 
                     <div className = "textbox1" >
                         <button > 6 </button>; 
                     </div> 
                     <div className = "textbox2" >
                         <  button > 6 </button>; 
                     </div> 
                     <div className = "rightbar" >
                         <HiLightBulb size={20} className="icon1"/>
                         <a href="" id = "head1" > Ideas </a> 
                         <BsBook size={20} className="icon2" />
                         <a href="" id = "head2" > Courses </a> 
                         <MdAttachMoney size={20} className="icon3" />
                         <a href="" id = "head3" > Wallet </a> 
                     </div>
                 </div> 
             </div>
         </div>
         <div className="status-bar">
                <img src={propic} className="status-pic" />
                <textarea className="status-content"  placeholder="Start making your courses"></textarea>
                    <div className="video">
                        <input type="file" id="upload" hidden/>
                        <label for="upload">Upload Video</label>
                    </div>
        </div>
        <div className="feed">
            <Post content="This is my first post!" />
            <Post content="This is my second post!" />
        </div>
        </React.Fragment>
        )
    }
}

export default CCHome

