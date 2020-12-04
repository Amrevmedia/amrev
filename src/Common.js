import React from "react";

import Header from "./Header"
import Feed from "./Feed"
import Rightsidebar from "./Rightsidebar"
import MessageSender from "./MessageSender"
import Sidebar from "./Sidebar"

function Common() {
    return (
        <div>
        <Header />
        <Feed />
        <Rightsidebar />
        <MessageSender />
        <Sidebar />
        </div>
    );
}
export default Common;
