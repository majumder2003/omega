import React from 'react';
import NavBar from './NavBar';
import { Carousel } from 'react-responsive-carousel';
import About from './About';
import Gallery from './Gallery';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Carousel />
      <About />
      <Gallery />
    </div>
  );
}

export default App;
