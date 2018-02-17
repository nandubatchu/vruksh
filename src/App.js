import React, { Component } from 'react';
import './App.css';

import {init as firebaseInit} from './js/firebase'

import {Provider} from 'react-redux'
import configureStore from './components/configureStore'
import Vruksh from './components/vruksh'

class App extends Component {
  constructor(){
    super()
    firebaseInit()
    this.store = configureStore()
  }

  render() {
    return (
      <Provider store={this.store}>          
          <Vruksh />
      </Provider>     
    );
  }
}

export default App;
