import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import createHistory from "history/createBrowserHistory";
import {Provider, connect}   from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {Router, Route, Link,Switch} from 'react-router-dom';

//Импорт компонентов

import Header from './components/navbar/Header'
import Home from './components/navbar/Home'
import Gallery from './components/navbar/Gallery'
import Articles from './components/navbar/Articles'
import LineChangeCountries from './components/countries/LineChangeCountries'
import England from './components/countries/England'
import Dania from './components/countries/Dania'
import Gaiti from './components/countries/Gaiti'
import Mexico from './components/countries/Mexico'
import BeautifulPlacesWorld from './components/body/gallery/BeautifulPlacesWorld'
import ArhitecturePlaces from './components/body/gallery/ArhitecturePlaces'
import QuietPlaces from './components/body/gallery/QuietPlaces'



const history = createHistory();






class App extends Component {
  render() {
    return (
     <Router history={history}>
      <div className="App" >
      <Header/>
      <LineChangeCountries/>
     
     <div>
     	<Switch>
     		<Route exact path="/" component={Home}/ >
     		<Route   path="/Gallery" component={Gallery}/ >
        <Route  path="/Articles" component={Articles}/ >
        <Route  path="/Europa/England" component={England}/ >
        <Route  path="/Europa/Dania" component={Dania}/ >
        <Route  path="/NorthAmerica/Gaiti" component={Gaiti}/ >
        <Route  path="/NorthAmerica/Mexico" component={Mexico}/ >
        <Route  path="/BeautifulPlacesWorld" component={BeautifulPlacesWorld}/ >
        <Route  path="/Arhitectura" component={ArhitecturePlaces}/ >
        <Route  path="/PlasesWorld" component={QuietPlaces}/ >

     	</Switch>
    
     </div>

      </div>
 </Router>
    );
  }
}

export default App;
