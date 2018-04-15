import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg header-nav">
      <a className="navbar-brand" href="/">
        <span className="header-logo">CM</span>
        <div className="header-title">
          <p>Creative</p>
          <p>Marketplace</p>
        </div>
      </a>
      <div className="nav nav-pills mr-2 mr-lg-0">
        <a className="nav-item nav-link" href="#">Legal Code</a>
        <a className="nav-item nav-link" href="#"> Governing Bodies</a>
        <a className="nav-item nav-link" href="#"> About us </a>
      </div>
    </nav>
  );
};

export default Header;
