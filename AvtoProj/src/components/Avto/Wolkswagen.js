import React, { Component } from 'react';

import { createBrowserHistory } from 'history';
import {Provider, connect}   from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {Router, Route, Link,Switch} from 'react-router-dom'
class Wolkswagen extends Component{
    render(){
        return(
            <div>
                <div className="AllCar">
                    <img src="https://autoacss.ru/static/img/0000/0003/9285/39285436.hx0lhb29zv.png?1" alt="Wolkswagen" width={"400"} height={"300"}/>
                    <div className={"forAllCar"}>
                        <h3 className={"AllSeries"}>Wolkswagen</h3>
                        <p >«Фольксваген АГ» (Volkswagen AG), немецкий <br/>  автомобильный концерн.Производит Производит легковые автомобили, грузовики, микроавтобусы. Штаб-квартира находится в Вольфсбурге.</p>
                        <p className={"AllModels"}>View all models</p>
                    </div>

                </div>

            </div>

        )
    }
}
export default Wolkswagen;