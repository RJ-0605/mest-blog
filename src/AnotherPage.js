/*
import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { ThemeContext } from './ThemeProvider';

function AnotherPage() {

    const currentTheme = useContext(ThemeContext)
    return (
        <div style={ {backgroundColor: currentTheme[0], color: "red"} } >
            <Link to="/main">Go to Main Page</Link>
            <button onClick={ () => currentTheme[1](currentTheme[0] === "white" ? "black" : "white" )  } >Change Theme</button>
        </div>
    )
}

export default AnotherPage;
*/


import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { ThemeContext } from './ThemeProvider';
import Button from './Button';

function AnotherPage() {

    const currentTheme = useContext(ThemeContext)
    return (
        <div className={currentTheme[0]} >
            <Link to="/main">Go to Main Page</Link>
            <Button />
        </div>
    )
}

export default AnotherPage;