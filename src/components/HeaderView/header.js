import './header.scss';
import React, { Component } from 'react';
import NavigationBar from '../NavigationView/NavigatorBarView';

class Header extends Component {
  constructor(props){
    super(props);
    //Todo as of now we consider user already login
    this.state={isLogin: true };
  }
  render() {
    //TODO if any header needed

    return (
      <div>
        {this.state.isLogin && <NavigationBar /> }
      </div>
    );
  }
}
//Todo proto
export default Header;
