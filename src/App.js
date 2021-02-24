import React,{Component} from 'react'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import Rank from './components/Rank/Rank'
import Particles from 'react-particles-js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import './App.css';

const particleOption = {

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
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }



class App extends Component {
  constructor(){
super();
this.state={
  input:''
  }
}

onInputChange = (event)=> {
  console.log(event.target.value);
}
onButtonSubmit = () => {
  console.log('Click');
}
  render() {
  return (
    <div className="App">
    <Particles className='particles' params={particleOption} />
    <Navigation />
    <Logo />
    <Rank />
    <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
    {/*
    
    
    <FaceRecognition />
*/}
    </div>
  );
}
}

export default App;
