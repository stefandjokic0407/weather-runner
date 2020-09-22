  import React from 'react';
import './App.css';
import Weather from './components/Weather/Weather';
import Clothing from './components/Clothing/Clothing';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Runner Placeholder</h1>
      </header>
      <Weather />
      <Clothing />
    </div>
  );
}

export default App;

