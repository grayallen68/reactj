import React, { Component } from 'react';
import ImageUpload from './imageupload';

import birdguide from './resources/birdguide.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="MainContainer">
        <div className="ParallaxContainer">
          <img src={birdguide} className="App-logo" alt="logo" />
          <br></br>
        </div>
        
        <div>
          <ImageUpload/>
        </div>
        
      </div>
    );
  }
}


export default App;
