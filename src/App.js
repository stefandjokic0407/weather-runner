import React, { useState } from 'react';
import './App.scss';
import Loading from './components/Loading';
import Weather from './components/Weather/Weather';
import Clothing from './components/Clothing/Clothing';

function App() {
  const [loading, setLoading] = useState(true);

  const no = () => {
    setLoading(false);
  };

  const yes = () => {
    setLoading(false);
  };
  return (
    <div className="App">
      {loading ? (
        <Loading no={no} yes={yes} />
      ) : (
        <div>
          <header className="App-header">
            <h1>Weather Runner Placeholder</h1>
          </header>
          <Weather />
          <Clothing />
        </div>
      )}
    </div>
  );
}
export default App;
