import React, { Component } from 'react';
import '../../App.css';
import createHistory from "history/createBrowserHistory";
import {Router, Route, Link,Switch} from 'react-router-dom'; 
import DropDownNorthAmerica from '../dropdown/DropDownNorthAmerica'

import DropDownEuropa from '../dropdown/DropDownEurope'


const history = createHistory();



class LineChangeCountries extends Component{
	render(){
		return(
    <div className="wrapper">
    	
          <div className="StyleLineChangeCountries row">
            <DropDownNorthAmerica/>
            <DropDownEuropa/>

          </div>
         </div>
    

			)
	}
}

export default LineChangeCountries;



