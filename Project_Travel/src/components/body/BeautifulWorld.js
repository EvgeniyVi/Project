import React, { Component } from 'react';
import '../../App.css';
import createHistory from "history/createBrowserHistory";
import {Router, Route, Link,Switch} from 'react-router-dom'; 
const history = createHistory();



class BeautifulWorld extends Component{
	render(){
		return(
    <div className="wrapper">
    	   <div className="InsidWrapper">
  				<Link to="/BeautifulPlacesWorld"><h3>Самые красивые места мира</h3></Link>
  				<hr/>
              	<div className="BeautifulPlacesWorld row">
                    <div className="col-lg-3">
                    <img src={"https://cdn.tripzaza.com/ru/destinations/files/2018/06/1-Yosemite_Valley-e1528945436839.jpg"} width="200"/>
                    <p>Долина Йосемити,США</p>
                    </div>
                    <div className="col-lg-3">
                    <img src={"https://cdn.tripzaza.com/ru/destinations/files/2018/06/2-Zhangye_Danxia_Landform-e1528945590663.jpg"} width="200"/>
                    <p>Цветные скалы Чжанъе Данксиа</p>
                    </div>
                     <div className="col-lg-3">
                    <img src={"https://cdn.tripzaza.com/ru/destinations/files/2018/06/3-Sagano_bamboo_forest-e1528945736776.jpg"} width="200"/>
                    <p>Бамбуковый лес</p>
                    </div>
                    <div className="col-lg-3">
                    <img src={"http://i0.wp.com/poznavatelno.net/wp-content/uploads/2015/05/12121.png?resize=801%2C507"} width="200"  height="130"/>
                    <p>Храм Ват Ронг Кхун</p>
                    </div>
          		</div>
          </div>
          </div>
        
         

    

			)
	}
}

export default BeautifulWorld;

