import React, { Component } from 'react';

import { createBrowserHistory } from 'history';
import {Provider, connect}   from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {Router, Route, Link,Switch} from 'react-router-dom'
class BMWSeries extends Component{
    render(){
        return(
            <div>
            <div className="AllCar">
                <img src="http://pngimg.com/uploads/bmw/bmw_PNG1710.png" alt="BMW" width={"400"} height={"300"}/>
                <div className={"forAllCar"}>
                    <h3 className={"AllSeries"}>BMW Series</h3>
                    <p >Автомобиль BMW седьмой серии – это флагманский седан <br/>баварской компании, который нашел на рынке свое особенное место.</p>
                    <p className={"AllModels"}>View all models</p>
                </div>

            </div>

            </div>

        )
    }
}
export default BMWSeries;