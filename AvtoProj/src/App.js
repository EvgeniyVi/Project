import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createBrowserHistory } from 'history';
import {Provider, connect}   from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {Router, Route, Link,Switch} from 'react-router-dom';


import BlockHeader from './components/BlockHeader'

import LineChangeModel from './components/LineChangeModel'
import BMWSeries from "./components/Avto/BMWSeries";

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
        <Router history={history}>
          <div>
              <BlockHeader/>
              <LineChangeModel/>
          </div>
        </Router>
    );
  }
}

export default App;
