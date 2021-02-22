import React, { Component } from 'react';
import '../../App.css';
import createHistory from "history/createBrowserHistory";
import {Router, Route, Link,Switch} from 'react-router-dom';

const history = createHistory();


class Header extends Component{
	render(){
		return(
		<div className="wrapper">
    
			<div className="Header row">
					<div className="logo col-lg-5 col-md-6">
       					 <img src={"http://pngimg.com/uploads/earth/earth_PNG11.png"} width="70"/>
       					 <h2>Портал туриста</h2> 
       				</div>
       			
       					<div className="Navbar col-lg-7 col-md-6">
        				
        					<div className="SerchAndMenu row">
                  <div>
        						<ul className="menu">
									         <li ><Link to="/" className="NavBarText">Главная</Link></li>
                					 <li ><Link to="/Gallery" className="NavBarText">Галерея</Link></li>
                      		<li ><Link to="/Articles" className="NavBarText">Статьи</Link></li>	
                      			</ul>
                      		</div>
                      		
                      			  <div>
                              <input type="text" placeholder="Поиск" className="InputForSearch"/>
                              <button><img src={"http://tribuna.md/wp-content/uploads/2016/10/lupa4.png"} width="20" /></button>
                    </div>
       				</div>
              </div>
			     </div>
		</div>
			)
	}
}	

export default Header;