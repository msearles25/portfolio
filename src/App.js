import React from 'react';
import './css/reset.css'

import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Navigation />      
      <Header />
      <About />
    </div>
  );
}

export default App;
