import React, { Component } from 'react';
import logo from '../../assets/images/logo.png';
import NavigationListView from '../NavigationView/NavigationListView';
import hashHistory from 'react-router/lib/hashHistory'  ;

class NavigatorBarView extends Component {
   
    constructor(props){
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div>
                    <img src={logo} onClick={()=> hashHistory.push('/')} />
                </div>
                <NavigationListView />
            </nav>
        );
    }
}

export default NavigatorBarView;
