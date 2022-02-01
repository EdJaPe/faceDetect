
import './App.css';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import Logo from './components/logo/Logo.js';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
       <Logo/>
      <ImageLinkForm/>
       {/*}
      <FaceRecognition/> */}
    </div>
  );
}

export default App;
