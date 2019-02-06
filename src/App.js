import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/navigation.js';
import FaceRecognition from './components/FaceRecognition/facerecognition.js';
import Logo from './components/Logo/logo.js';
import ImageLinkForm from './components/ImageLinkForm/imagelinkform.js';
import Rank from './components/Rank/rank.js';

import './App.css';

const app = new Clarifai.App({
  apiKey: 'f3acba84c61045939a55cf8b2189f7eb'
});

const particlesOptions = {
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit =() => {
    this.setState({imageUrl: this.state.input});
    app.models
    .predict(
    Clarifai.FACE_DETECT_MODEL,
    this.state.input)
    .then(
      function(response) {

        },
        function(err) {

        }
    );
  }

  render() {
    return (
      <div className="App">
             <Particles  className='particles'
              params={particlesOptions}
            />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit />
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;




