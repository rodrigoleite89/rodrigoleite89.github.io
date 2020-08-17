import React from 'react';

import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar sticky-top fixed-top navbar-expand-lg navbar-light">
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="navbar-brand" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="navbar-brand" href="#portfolio">Portfolio</a>
          </li>
        </ul>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </nav>
  )
}

export default Navbar;