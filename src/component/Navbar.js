import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ToggleTheme from './ToggleTheme';
import { Theme } from './ThemeProvider';

export default function Navbar() {

  const currentTheme = useContext(Theme)[0];

  return (
    <div>
    <nav className={`navbar navbar-expand-lg navbar-${currentTheme} bg-${currentTheme} py-4`}>
      <div className="container">
        <a className="navbar-brand" href="/">Transit-gh</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/article">Articles</NavLink>
            </li>
            <li className="nav-item">
              <ToggleTheme />
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}