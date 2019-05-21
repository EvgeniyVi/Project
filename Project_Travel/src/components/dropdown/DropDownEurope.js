import React, { Component } from 'react';
import '../../App.css';
import createHistory from "history/createBrowserHistory";
import {Router, Route, Link,Switch} from 'react-router-dom';


const history = createHistory();

class DropDownEuropa extends Component{
  constructor(props){
    super(props);
    this.state = {isOpened:false}
    this.toggleState = this.toggleState.bind(this)

  }

  toggleState(){
    this.setState({isOpened:!this.state.isOpened})
  }

  render(){
    let EuropaText;
        if(this.state.isOpened){
      EuropaText=<div className="CountryStyle">    
              <p className="Countries"><Link to="/Europa/England"className="StyleForLinkEuropaCountries" ><img src={"http://abali.ru/wp-content/uploads/2010/12/united-kingdom-flag.png"} width="50" className="ImgCountriesEurope"/>Англия</Link></p>
              <p className="Countries"><Link to="/Europa/dania"className="StyleForLinkEuropaCountries" ><img src={"http://www.flagistrany.ru/data/flags/ultra/dk.png"} width="50" className="ImgCountriesEurope"/>Дания</Link></p>
      </div>
    }
    return(
        <div className="DropMenu">
          <div className="CountryClick">
            <p onClick ={this.toggleState}>Европа <i className="fas fa-angle-down"></i></p>
            {EuropaText}
          </div>
        </div>
      )
  }
}

export default DropDownEuropa;