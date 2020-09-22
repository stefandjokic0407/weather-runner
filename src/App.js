import React, { useState } from 'react';
import './App.css';
import Loading from './components/Loading';
import Weather from './components/Weather/Weather';

function App() {
  const [loading, setLoading] = useState(true)

  const no = () => {
    setLoading(false)
  }

  const yes = () => {
    setLoading(false)
  }

  return (
    <div className="App">
      {loading ? <Loading no={no} yes={yes}/> :
      <div>
        <header className="App-header">
          <h1>Weather Runner Placeholder</h1>
        </header>
          <Weather/>
      </div>}
    </div>
  );
}
export default App;
     
