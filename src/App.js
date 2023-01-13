import React, {useEffect} from 'react';
import { Footer, FAQ, Features, Aboutus, Header, Slider } from './containers';
import {Navbar } from './components';
import Particles from './components/particles';


import './App.css';

const App = () => (
  <div className="App">
    <Particles />
    <Navbar />
    <Header />
    <Aboutus />
    <Features />
    <FAQ />
    <Slider />
    <Footer />
  </div>
);

export default App;