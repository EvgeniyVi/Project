import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import {Provider, connect}   from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {Router, Route, Link,Switch} from 'react-router-dom';
import * as $ from 'jquery';
import 'bootstrap';

class BlockHeader extends Component {
    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="insidewrapper">

                        <div className="contentBlockHeader">

                                <div className="NavBar row">
                                      <div className={"logo col-lg-6"}>
                                          <img src={"http://www.ichor.by/images/logo_peatlands.png"} alt="logo" width={"100"}/>
                                        </div>
                                    <div className={"contacts row col-lg-6"}>
                                        <p className="PForHead"><i className="fas fa-envelope"></i> -
                                         vinnickov.ew@gmail.com</p>
                                        <p className="PForHead"><i className="fas fa-phone-volume"></i>
                                         +380952490723</p>
                                         <input type="button" value="Log in" className="Login"/>
                                    </div>
                                </div>
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-40 " src="https://megarent.ua/style/img/news/127.png" alt="First slide"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-50" src="http://zonauto.do/wp-content/uploads/2015/02/montero-limited-2015-blanco-vetor.png" alt="Second slide"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-30" src="http://dimchip.pro/templates/borko/images/fullstory/prado.png" alt="Third slide"/>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                                   data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                                   data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                                <p className={"Pcenter"}>Car buying  made simple</p>
                                <div className={"BuyingCar row"}>
                                        <input type="text" placeholder="make" className={"serch"}/>
                                        <input type="text" placeholder={"model"} className={"serch"}/>
                                        <input type="text" placeholder={"city"} className={"serch"}/>
                                        <input type="button" value="search" className={"buttonSerch"}/>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

    export default BlockHeader;
