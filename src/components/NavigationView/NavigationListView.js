import React, { Component } from 'react';
import hashHistory from 'react-router/lib/hashHistory'  ;
import NavigationListItemView from '../NavigationView/NavigationListItemView';


//Todo : 
const navitem =[
    {
        name: 'Service Mockup',
        link: '/service'
    },
    {
        name: 'Workflow',
        link: '/workflow'
    },
];
class NavigationListView extends Component {
    
    constructor(props){
        super(props);
        this.state= {
            activeTab : navitem[0].name
        };
        //Todo set link and active tab based on url path
        hashHistory.push(navitem[0].link);
        this.handleNavigationChange = this.handleNavigationChange.bind(this);
    }
    handleNavigationChange(event){
        this.setState({activeTab: event.target.text});
        hashHistory.push(event.target.name);
        
    }
    renderNavItems(){
        return (navitem.map((item, index) => {
           return <NavigationListItemView
                      text={item.name}
                      linkToPath={item.link}
                      active={this.state.activeTab===item.name ? true : false}
                      onClickHandler={this.handleNavigationChange}
                />
        }));
    }
    render() {
        return (
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {this.renderNavItems()}
                </ul>
            </div>
        );
    }
}
/*
<NavigationListItemView active={this.state.activeTab ? true : false} onClickHandler={this.handleNavigationChange} text={'Service'} linkToPath={'/service'}/>
<NavigationListItemView active={this.state.activeTab ? true : false} onClickHandler={this.handleNavigationChange} text={'Workflow'} linkToPath={'/workflow'}/>
*/
//Todo proto

export default NavigationListView;
