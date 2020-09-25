import React from 'react';
import './SearchBar.scss';

const SearchBar = (props) => {
  return (
    <form onSubmit={props.getWeather}>
      <div className="input-boxes">
        <input type="text" placeholder="city" name="city" />
        <input type="text" placeholder="country" name="country" />
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SearchBar;
