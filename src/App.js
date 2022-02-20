
import Particles from 'react-tsparticles';
import { Component } from 'react';
import './App.css';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import Logo from './components/logo/Logo.js';
import Navigation from './components/navigation/Navigation';
import Rank from './components/Rank/Rank';
import particleOptions from './particleOptions';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Clarifai from 'clarifai';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
// const {ClarifaiStub, grpc} = require("clarifai-nodejs-grpc");
const API_KEY = process.env.REACT_APP_API_KEY;




const app = new Clarifai.App({
 apiKey: API_KEY,
});

/**********************CLARIFAI API NEEDED *******************************/

// const stub = ClarifaiStub.grpc();

// // This will be used by every Clarifai endpoint call.
// const metadata = new grpc.Metadata();
// metadata.set("authorization", {API_KEY});
/**************************************************************************/


class App extends Component {
  constructor(){
    super()
    this.state = {
      input:'',
      imageUrl:'',
      box:'',
      route:'signIn',
      isSignedIn:false
    }
  }
  calculateFacePosition = (data) => {
    const clarifaiBox = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width =Number(image.width);
    const height =Number(image.height);
    return {
      leftCol: clarifaiBox.left_col * width,
      topRow: clarifaiBox.top_row * height,
      rightCol: width - (clarifaiBox.right_col * width),
      bottomRow: height - (clarifaiBox.bottom_row * height)
    }
  }
  displayFaceBox = (box) => {
    
    this.setState({box: box})
  }
  onInputChange = (event) =>{
    this.setState({input: event.target.value})

  }
  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(response => {
        
        this.displayFaceBox(this.calculateFacePosition(response))
    })
    .catch(err => console.log(err))
  }
  onRouteChange = (route) => {
    if(route === 'signOut'){
      this.setState({isSignedIn: false})
    } else if(route === 'home'){
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})
  }

  render(){
    const {isSignedIn, imageUrl, route, box} = this.state;
    return (
      <div className="App">
      <Particles className='particles'
      // id="tsparticles"
      // init={particlesInit}
      // loaded={particlesLoaded}
      options={particleOptions}
      />
      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
      { route ==='home' ?
        <div>
          <Logo/>
          <Rank/>
          <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}
          />
          
          <FaceRecognition
          box={box}
          imageUrl={imageUrl}
          /> 
        </div>
        :(
          route === 'signIn'
          ?
          <SignIn onRouteChange={this.onRouteChange}/>
          :<Register onRouteChange={this.onRouteChange}/>
        )
      }
    </div>
  );
}
}

export default App;
