import React from 'react';
import { Component } from 'react';
import "./Rightsidebar.css";
import Icon from '@material-ui/icons/MoreVert';
import SettingsIcon from '@material-ui/icons/SettingsApplications';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { Avatar } from "@material-ui/core";

let time = new Date().toLocaleString();


export default class Rightsidebar extends Component {

    constructor() {
        super();

        this.state = {
            showMenu: false,
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu() {
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }


    render() {

        return (

            <
            div className = "Rightsidebar" >

            <
            div className = "Container" >
            <
            div className = "Container1" >
            <
            h3 > Conversation < /h3>

            <
            div className = "icon" >

            <
            Icon style = {
                { fill: '#FFFFFF' } }
            onClick = { this.showMenu }
            />

            {
                this.state.showMenu ?
                    ( <
                        div className = "menu" >
                        <
                        button > < SettingsIcon style = {
                            { fontSize: 'medium' } }
                        /> Setting </button >
                        <
                        button > < EditIcon style = {
                            { fontSize: 'medium' } }
                        /> Edit </button >
                        <
                        button > < RemoveCircleIcon style = {
                            { fontSize: 'medium' } }
                        /> Remove </button >
                        <
                        /div>
                    ) :
                    (
                        null
                    )
            } <
            /div>

            <
            /div>  <
            div className = "chatbar" >
            <
            Avatar style = {
                { fontSize: 'large' } }
            /> <
            h4 > Brian < /h4> <
            p className = "App-clock" > { time }. <
            /p>  <
            div className = "divider" >

            <
            /div> <
            /div>

            <
            /div> <
            /div>

        );
    }

}