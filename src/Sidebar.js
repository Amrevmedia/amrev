import React from 'react';
import "./Sidebar.css";
import {Avatar} from "@material-ui/core";
import HighlightOutlinedIcon from '@material-ui/icons/HighlightOutlined';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
const var1 = "6";

function Sidebar() {
    return ( 
     <div className = "sidebar">

        
       <div className = "Container">
        
        <div className = "container1">
        
        <div className = "container2">
        
           <Avatar name = "John Doe"
        size = "80"
        textSizeRatio = { 1.75 }
        round = { true }
        /> 
        <h1 id = "name" > John Doe </h1> 
        <h2 id = "heading" > Designer </h2> 
        </div> 
        <div className = "line" >

        
        </div> 
        
        <div className = "textbox" >
        
       <button> { var1 } </button>; 
       </div> 
        <div className = "textbox1" >
        
        <button > { var1 } </button>; 
        </div> 
        <div className = "textbox2" >
    
        <  button > { var1 } </button>; 
        </div> <
        div className = "rightbar" >
        
        <div className = "icon1"> < HighlightOutlinedIcon /> </div>  
        <h2 id = "head1" > Ideas </h2> 
        <div className = "icon2"> < CollectionsBookmarkIcon /> </div>  
        <h2 id = "head2" > Courses </h2> 
        <div className = "icon3"> < TurnedInIcon /> </div>  
        <h2 id = "head3" > Saved </h2> 
        </div>
        </div> 
        </div>

        
        </div>


    )
}
export default Sidebar