import React from "react";
import useDarkMode from 'use-dark-mode'

const Header = ({handleDark, handleLight}) => {
    const { value, toggle } = useDarkMode(false);
    // const Theme = () => {
    //     handleDark(prev => !prev)
    //     if (showModaltwo === true) {
    //         setShowModaltwo(prev => !prev)
    //     }
    // }
    return (
      <div className="header">
        <div className="main-heading">Notes</div>
        <button className="toggle-button" onClick={toggle}>
          {value ? "☀" : "☾"}
        </button>
        {/* <button onClick={ Theme
            // () => handleDark(
            // () => handleDark(
            //     (prev) => !prev
            // )
            // )
        } className="toggle-button">Switch Theme</button> */}
      </div>
    );
};
export default Header;