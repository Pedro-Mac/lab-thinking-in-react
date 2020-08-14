import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <form>
        <label htmlFor="searchInput">Search</label>
        <input
          type="text"
          id="searchInput"
          onChange={(event) => props.onType(event.target.value)}
        />
        <label htmlFor="stockedProducts">Only show products on stock</label>
        <input type="checkbox" id="stockedProducts" />
      </form>
    </div>
  );
};

export default SearchBar;
