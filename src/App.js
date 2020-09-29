import React, { useState } from 'react';
import Loading from './components/Loading/Loading';
import Weather from './components/Weather/Weather';
import Footer from './components/Footer/Footer';
import Toggle from '../src/components/Toggle/Toggle';
import useDarkMode from 'use-dark-mode';
import './App.scss';

function App() {
  const [loading, setLoading] = useState(true);
  const darkMode = useDarkMode(false);

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
            <div className="toggle">
              <p>Toggle Dark Mode </p>
              <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
            </div>
            <br></br>
            <h1 className="main-title">Weather Runner</h1>
          </header>
          <Weather />
          <Footer />
        </div>
      )}
    </div>
  );
}
export default App;
