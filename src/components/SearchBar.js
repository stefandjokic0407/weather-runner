import React, { useState, useEffect } from 'react';

const SearchBar = () => {
  const [term, setTerm] = useSate('');
  console.log('I should run');

  useEffect(() => {
    console.log('Am I working');
  }, [term]);

  return (
    <div>
      {/* add classNames for CSS */}
      <label>Lets Search Here</label>
      <input
        value={term}
        onchange={(e) => setTerm(e.target.value)}
        className="input"
      />
    </div>
  );
};
