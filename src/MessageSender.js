import React, {useState} from 'react';
import {Avatar} from "@material-ui/core";
import './MessageSender.css';
import PhotoIcon from '@material-ui/icons/Photo';
import DescriptionIcon from '@material-ui/icons/Description';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

function MessageSender() {
const[input,setInput]= useState("");

    const handleSubmit= (e) =>{
        e.preventDefault();


        //some db stuff

        setInput("");
    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar />
                <form>
                <input
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                className="messageSender__input"

                placeholder={'Start making your post'} />

                <button onClick={handleSubmit} type="submit"> hidden SUbmit</button>
                </form>

            </div>

             <div className="messageSender__bottom">
                    <div className="messageSender__option">

                    <PhotoIcon />
                    <h3>PHoto</h3>


                    </div>
                    <div className="messageSender__option">

                    <DescriptionIcon />
                    <h3>Attach File</h3>


                    </div>

                    <div className="messageSender__option">

                    <ArrowUpwardIcon />
                    <h3>Upload course</h3>


                         </div>



            </div>
        </div>
    )
}

export default MessageSender
