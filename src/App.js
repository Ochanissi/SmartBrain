import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/navigation.js';
import Logo from './components/Logo/logo.js';
import ImageLinkForm from './components/ImageLinkForm/imagelinkform.js';
import Rank from './components/Rank/rank.js';

import './App.css';

const particlesOptions = {
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 200
        }
      }
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
             <Particles  className='particles'
              params={particlesOptions}
            />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/* {
        
        <FaceRecognition />} */}
      </div>
    );
  }
}

export default App;
