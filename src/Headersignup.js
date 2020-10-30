import React from 'react';
import "./Headersignup.css";
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from "@material-ui/core";

function Headersignup() {
    return ( <
        div className = "header" >

        <
        div className = "header__left" >
        <
        h1 > Logo < /h1>

        <
        /div>



        <
        div className = "header__right" >
        <
        div className = "header__info" >

        <
        h2 className = "setting" > Settings < /h2>  <
        h2 className = "help" > Help < /h2>  <
        h2 className = "login" > Login < /h2>  <
        div className = "avatar" > < Avatar / > < /div>  <
        /div>


        <
        /div>

        <
        /div>
    );
}

export default Headersignup