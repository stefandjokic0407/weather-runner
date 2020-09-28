import React, { useState } from 'react';
import Loading from './components/Loading/Loading';
import Weather from './components/Weather/Weather';
import Footer from './components/Footer/Footer';
import './App.scss';

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
