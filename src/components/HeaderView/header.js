import React, { Component } from 'react';
import logo from '../../assets/images/logo.png';
import './header.css';

class Header extends Component {
  render() {
    return (
        <div className="header">
          <img src={logo} className="header__logo" alt="logo" />
        </div>
    );
  }
}

export default Header;
