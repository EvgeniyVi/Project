import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import {Provider, connect}   from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {Router, Route, Link,Switch} from 'react-router-dom';
import * as $ from 'jquery';
import 'bootstrap';

const history = createBrowserHistory();

class BMW extends Component{
    constructor(props){
        super(props);
        this.state={isOpened:false}
        this.toggleState    =this.toggleState.bind(this)
    }
    toggleState(){
        this.setState({isOpened:!this.state.isOpened})
    }
    render() {
        let BMW;
        if(this.state.isOpened){
            BMW = <div className="BMW">
                HEllo
            </div>
        }
        return (
            <div>
                <div className="wrapper">
                    <div className="insidewrapper">
                            <img src="images/IconCar/BMW.png" alt="BMW" width="90" height="90" onClick={this.toggleState}/>
                            {BMW}
                        </div>
                    </div>
                </div>


        )

    }
}

export default BMW;
