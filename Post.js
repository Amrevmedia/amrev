import React from 'react';
import"./Post.css";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import {Avatar} from "@material-ui/core";

function Post({ profilePic,image, username, timestamp, message}) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic}
                className="post__avatar"/>
                <div className ="post__topInfo">
                 <h3>{username}</h3>
                   <p>TimeStamp..</p>


                    </div>
            </div>

            <div className="post__bottom">
             <p>{message}</p>
            </div>

            <div className="post__image">
                <img src={image} alt=""></img>

            </div>
            <div className="post__options">
                <div className="post__option">
                    <FavoriteIcon 
                    style={{color: "red"}}/>
                    <p>4.5k</p>
                </div>

            

    
                <div className="post__option">
                  < ChatBubbleOutlineIcon />
                    <p>5</p>
                </div>
        

            

            
                <div className="post__option">
                  <BookmarkBorderIcon />
                    <p></p>
                </div>
            </div>
            
        </div>
    );
}

export default Post;
