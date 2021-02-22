import React, { Component } from 'react';

import '.././App.css';
import { createBrowserHistory } from 'history';
import {Provider, connect}   from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {Router, Route, Link,Switch} from 'react-router-dom';
import BMWSeries from './Avto/BMWSeries'
import Wolkswagen from './Avto/Wolkswagen'

const history = createBrowserHistory();

class MiddleComponentForAvtoChange extends Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route  path="/bmw_icons" component={BMWSeries}/ >
                    <Route  path="/wolkswagen_icons" component={Wolkswagen}/ >
                </Switch>
            </div>
        )
    }
}

export default MiddleComponentForAvtoChange;