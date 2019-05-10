import React from 'react';
import { Navbar } from './Navbar.js';
import { Carousel } from './Carousel.js';
import { Features } from './Features.js';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Features />
    </div>
  );
}

export default App;
