import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Signup from './Signup';
import Login from './Login';
import Feed from './Feed';

export const Routes = () => {
    return (
        <Router>
            <Switch>
            <Route path='/signup'>
                <Signup />
            </Route>

            <Route path='/login'>
                <Login />
            </Route>
            <Route path='/feed'>
                <Feed />
            </Route>
            <Route exact path='/'>
                <Login />
            </Route>
            </Switch>

        </Router>
    )
}
