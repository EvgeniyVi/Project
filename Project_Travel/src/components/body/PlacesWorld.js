import React, { Component } from 'react';
import '../../App.css';
import createHistory from "history/createBrowserHistory";
import {Router, Route, Link,Switch} from 'react-router-dom'; 
const history = createHistory();



class PlasesWorld extends Component{
	render(){
		return(
    <div className="wrapper">
    	   <div className="InsidWrapper">
  				<Link to="/PlasesWorld"><h3>Cамые тихие и спокойные места для отдыха</h3></Link>
  				<hr/>
              	<div className="BeautifulPlacesWorld row">
                    <div className="col-lg-3">
                    <img src={"https://otpusk.uz/site/admin/adminfiles/top_calm_places_yes-you-ll-see-moose.jpg"} width="200" height="150"/>
                    <p>Скалистые горы</p>
                    </div>
                    <div className="col-lg-3">
                    <img src={"https://otpusk.uz/site/admin/adminfiles/top_calm_places_la-nebbiolina-ed-il-panorama.jpg"} width="200"/>
                    <p>Ассизи </p>
                    </div>
                     <div className="col-lg-3">
                    <img src={"https://otpusk.uz/site/admin/adminfiles/top_calm_places_bora-bora-pearl-beach.jpg"} width="200"/>
                    <p>Бора-Бора</p>
                    </div>
                    <div className="col-lg-3">
                    <img src={"https://otpusk.uz/site/admin/adminfiles/top_calm_places_takshang-lhakang-tiger.jpg"} width="200"  height="150"/>
                    <p>Бутан </p>
                    </div>
          		</div>
              
          </div>
          </div>
        
         

    

			)
	}
}

export default PlasesWorld;

