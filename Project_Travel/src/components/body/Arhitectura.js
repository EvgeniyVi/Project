import React, { Component } from 'react';
import '../../App.css';
import createHistory from "history/createBrowserHistory";
import {Router, Route, Link,Switch} from 'react-router-dom'; 
const history = createHistory();



class Arhitectura extends Component{
	render(){
		return(
    <div className="wrapper">
    	   <div className="InsidWrapper">
  				<Link to="/Arhitectura"><h3>Чудеса света в образе  архитектуры</h3> </Link>
  				<hr/>
              	<div className="BeautifulPlacesWorld row">
                    <div className="col-lg-3">
                    <img src={"http://i2.wp.com/poznavatelno.net/wp-content/uploads/2015/05/118.png?resize=801%2C493"} width="200" height="150"/>
                    <p>Пирамида Лувра</p>
                    </div>
                    <div className="col-lg-3">
                    <img src={"http://i2.wp.com/poznavatelno.net/wp-content/uploads/2015/05/215.png?resize=801%2C658"} width="200" height="150"/>
                    <p>Тадж Махал</p>
                    </div>
                     <div className="col-lg-3">
                    <img src={"http://i1.wp.com/poznavatelno.net/wp-content/uploads/2015/05/47.png?resize=801%2C492"} width="200" height="150"/>
                    <p>Великая Пирамида в Гизе</p>
                    </div>
                    <div className="col-lg-3">
                    <img src={"http://i2.wp.com/poznavatelno.net/wp-content/uploads/2015/05/65.png?resize=801%2C468"} width="200"  height="150"/>
                    <p>Колизей</p>
                    </div>
          		</div>
             
          </div>
          </div>
        
         

    

			)
	}
}

export default Arhitectura;

