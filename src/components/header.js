import React from "react";
import useDarkMode from 'use-dark-mode'

const Header = () => {
    const { value, toggle } = useDarkMode(false);
    return (
      <div className="header">
        <div className="main-heading">Notes</div>
        <button className="toggle-button" onClick={toggle}>
          {value ? "☀" : "☾"}
        </button>
      </div>
    );
};
export default Header;