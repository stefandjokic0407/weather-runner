import React from 'react';
import SearchBar from './components/SearchBar';
import Weather from './components/Weather';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>JUST A PLACEHOLDER</h1>
      </header>
      <SearchBar />
      <div className="weather-box">
      <Weather />
      </div>
    </div>
  );
}

export default App;
