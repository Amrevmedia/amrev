import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Signup from './Pages/Sign-up';
import Login from './Pages/login';


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

            <Route path='/'>
                <Login />
            </Route>
            </Switch>

        </Router>
    )
}