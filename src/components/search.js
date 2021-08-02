import React from 'react'
import { MdSearch } from 'react-icons/md'
const Search = () => {
    return(
    <div className="search-bar">
        <MdSearch className="searchicon"></MdSearch>
        <input type="text" placeholder="type here..." classNname="input-search-bar"></input>
    </div>
    )
}
export default Search