import React from 'react';
import "./Feed.css";
import MessageSender  from './MessageSender';
import Post from './Post';
function Feed() {
    return (
        <div className="feed">

            <MessageSender />

            <Post
        
            profilePic="https://www.channelpartnersonline.com/files/2018/09/Verma-Sunandini_Amrev-Canada.jpg"
            message="this works"
            timestamp="this is time stamp"
            username="sverma"
            image="https://www.w3schools.com/howto/img_forest.jpg"
            />
            <Post
            profilePic="https://www.channelpartnersonline.com/files/2018/09/Verma-Sunandini_Amrev-Canada.jpg"
            message="this is the post area where ideas will be posted "
            timestamp="this is time stamp"
            username="sverma"
            
            />
            
            
            
        </div>
    )
}

export default Feed
