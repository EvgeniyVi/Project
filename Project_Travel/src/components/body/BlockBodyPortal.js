import React, { Component } from 'react';
import '../../App.css';
import createHistory from "history/createBrowserHistory";
import {Router, Route, Link,Switch} from 'react-router-dom'; 

import BeautifulWorld from './BeautifulWorld'
import Arhitectura from './Arhitectura'
import PlacesWorld from './PlacesWorld'
const history = createHistory();



class BlockBodyPortal extends Component{
	render(){
		return(
    <div className="wrapper">
         <BeautifulWorld/>
         <Arhitectura/>
         <PlacesWorld/>
          </div>
			)
	}
}

export default BlockBodyPortal;

