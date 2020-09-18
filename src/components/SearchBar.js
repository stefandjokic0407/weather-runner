import React, { useState, useEffect } from 'react';

const SearchBar = () => {
  const [term, setTerm] = useState('');

  console.log('I should run');

  useEffect(() => {
    console.log('I should be working now');
  }, [term]);

  return (
    <div>
      {/* add classNames for CSS */}
      <label>Weather Runner</label>
      <input
        placeholder="Find Location"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className="input"
      />
    </div>
  );
};

export default SearchBar;
