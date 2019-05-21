import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import {Provider, connect}   from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {Router, Route, Link,Switch} from 'react-router-dom';
import * as $ from 'jquery';
import 'bootstrap';

import MiddleComponentForAvtoChange from './MiddleComponentForAvtoChange'


const history = createBrowserHistory();

class LineChangeModel extends Component {


    render(){


        return (
            <div>
                <div className="wrapper">
                    <div className="insidewrapper">
                        <div className="LineChangeModel ">
                            <p className={"Takeyourbest"}>Take your best</p>

                            <div className={"ChangeAvtoModel"}>
                                <Link to="/wolkswagen_icons"> <img src="images/IconCar/Folc.png" alt="Folc" width="90" height="90"   className="img" /></Link>
                                <Link to="/bmw_icons"><img src="images/IconCar/BMW.png" alt="BMW" width="90" height="90"   className="img" /></Link>
                                <img src="images/IconCar/Mazda.png" alt="Mazda" width="90" height="90"   className="img" />
                                <img src="images/IconCar/Nissan.png" alt="Nissan" width="90" height="90"   className="img" />
                                <img src="images/IconCar/Volvo.png" alt="Volvo" width="90" height="90"   className="img" />
                            </div>
                            <hr/>
                            <MiddleComponentForAvtoChange/>
                        </div>
                    </div>
                </div>

            </div>
        )

    }
}

export default LineChangeModel;
