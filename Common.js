import React from "react";
import './Common.css'
import Header from "./Header"
import Feed from "./Feed"
// import Rightsidebar from "./Rightsidebar"
// import MessageSender from "./MessageSender"
// import Sidebar from "./Sidebar"

function Common() {
    return (
        <div className="common">
            <div className="header">
                <Header />
            </div>
            <div className="feedcontent">
                <Feed />
            </div>
            {/* <div className="rsb">
                <Rightsidebar />
            </div> */}
            {/* <div className="msd">
                <MessageSender />
            </div> */}
            {/* <div className="sd">
                <Sidebar />
            </div> */}
        </div>
    );
}
export default Common;
