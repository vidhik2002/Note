import React from 'react'
import { MdSearch } from 'react-icons/md'
const Search = ({ handlesearchNote }) => {
  return (
    <div className="search-bar">
      <MdSearch className="searchicon"></MdSearch>
      <input
        onChange={(e) => handlesearchNote(e.target.value)}
        type="text"
        placeholder="type here to search..."
        className="input-search-bar"
      ></input>
    </div>
  );
};
export default Search