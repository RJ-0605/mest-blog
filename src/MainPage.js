/*
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { ThemeContext } from './ThemeProvider';

function MainPage() {

    const currentTheme = useContext(ThemeContext)
    return (
        <div style={ {backgroundColor: currentTheme[0], color: "red"} }>
            <Link to="/another">Go to Another Page</Link>
            <button onClick={ () => currentTheme[1](currentTheme[0] === "white" ? "black" : "white" )  }>Change Theme</button>
        </div>
    )
}

export default MainPage;
*/

import 'bootstrap/dist/css/bootstrap.min.css';



import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { ThemeContext } from './ThemeProvider';
import Button from './Button';

function MainPage() {

    const currentTheme = useContext(ThemeContext)
    return (
        <div>
            <br />
            <br />
            <br />
            <div className={`${currentTheme[0]} newclass`} style={{}}>

                <Link to="/another">Go to Another Page</Link>
                <Button />
            </div>

        </div >
    )
}

export default MainPage;


// using bootstrap with it 
//  <nav class="navbar-light || navbar-dark"></nav>

//  <nav class=`navbar-${context[0]}`></nav>

// <div className=`app-${context[0]}"></div>


/**
 * .app-light {
 *  background-color: #ddd;
 *  color: #333;
 * }
 *
 * .app-dark {
 *  background-color: #333;
 *  color: #ddd
 * }
 */