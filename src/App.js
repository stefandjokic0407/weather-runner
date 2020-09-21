import React from 'react';
import './App.css';
import Weather from './components/Weather/Weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Runner Placeholder</h1>
      </header>
      <SearchBar />
      <div className="weather-box">
      <Weather />
      </div>
    </div>
  );
}

export default App;
