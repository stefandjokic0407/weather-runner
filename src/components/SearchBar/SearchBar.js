import React from 'react';

const SearchBar = (props) => {
  return (
    <form onSubmit={props.getWeather}>
      <input type="text" placeholder="city" name="city" />
      <input type="text" placeholder="state" name="state" />
      <button>Submit</button>
    </form>
  );
};

export default SearchBar;
