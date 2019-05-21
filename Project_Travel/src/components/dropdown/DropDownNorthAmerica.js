import React, { Component } from 'react';
import '../../App.css';
import createHistory from "history/createBrowserHistory";
import {Router, Route, Link,Switch} from 'react-router-dom'; 
const history = createHistory();

class DropDownNorthAmerica extends Component{
  constructor(props){
    super(props);
    this.state = {isOpened:false}
    this.toggleState = this.toggleState.bind(this)

  }

  toggleState(){
    this.setState({isOpened:!this.state.isOpened})
  }

  render(){
    let NorthAmericaText;
        if(this.state.isOpened){
      NorthAmericaText=<div className="CountryStyle">
              <p className="Countries"><Link to="/NorthAmerica/Gaiti"className="StyleForLinkEuropaCountries" ><img src={"https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Haiti.svg"} width="50" className="ImgCountriesEurope"/>Гаити</Link></p>
              <p className="Countries"><Link to="/NorthAmerica/Mexico"className="StyleForLinkEuropaCountries" ><img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/250px-Flag_of_Mexico.svg.png"} width="50" className="ImgCountriesEurope"/>Мексика</Link></p>
    </div>

      
    }
    return(
        <div className="DropMenu">
          <div className="CountryClick">
            <p onClick = {this.toggleState}>Северная Америка <i className="fas fa-angle-down"></i></p>
            {NorthAmericaText}
          </div>
        </div>
      )
  }
}

export default DropDownNorthAmerica;