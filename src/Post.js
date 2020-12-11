import { Component } from "react"
import React from 'react'

class Post extends React.Component{
    render(){
        return(
            <div className="post">
                <span>{this.props.content}</span>
            </div>
        )
    }
}

export default Post