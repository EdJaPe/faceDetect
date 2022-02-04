
import Particles from 'react-tsparticles';
import { Component } from 'react';
import './App.css';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import Logo from './components/logo/Logo.js';
import Navigation from './components/navigation/Navigation';
import Rank from './components/Rank/Rank';

const particleOptions = {
  background: {
    color: {
      value: "linear-gradient(89deg, #7f31d8 0%, #1badce 100%)",
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: "push",
      },
      onHover: {
        enable: false,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 20,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 700,
      },
      value: 50,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 2,
    },
  },
  detectRetina: true,
}
class App extends Component {
  constructor(){
    super()
    this.state = {
      input:''
    }
  }
  onInputChange = (event) =>{
    console.log(event.target.value);
  }
  onButtonSubmit = () => {
    console.log('click')
  }
  render(){
    return (
      <div className="App">
      <Particles className='particles'
      // id="tsparticles"
      // init={particlesInit}
      // loaded={particlesLoaded}
      options={particleOptions}
      />
      <Navigation/>
       <Logo/>
       <Rank/>
      <ImageLinkForm 
      onInputChange={this.onInputChange} 
      onButtonSubmit={this.onButtonSubmit}
      />
       {/*}
      <FaceRecognition/> */}
    </div>
  );
}
}

export default App;
