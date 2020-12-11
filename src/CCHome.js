import { Component } from "react"
import React from 'react'
import logo from './logo.png'
import propic from './pro-pic.png'
import bg from './bg.png'
import Post from './Post.js'
import './CCHome.css'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';


class CCHome extends Component{

    constructor(props){
        super(props)
        this.state = "6"
    }

    render(){
        return(
            <React.Fragment>
            <div className="Header">
                <img src={logo} className="Logo" alt="Logo" />
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
                         <button> { this.state } </button>; 
                     </div> 
                     <div className = "textbox1" >
                         <button > { this.state } </button>; 
                     </div> 
                     <div className = "textbox2" >
                         <  button > { this.state } </button>; 
                     </div> 
                     <div className = "rightbar" >
                         <EmojiObjectsIcon className="icon1"/>
                         <a href="" id = "head1" > Ideas </a> 
                         <ImportContactsIcon className="icon2" />
                         <a href="" id = "head2" > Courses </a> 
                         <MonetizationOnIcon className="icon3" />
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

