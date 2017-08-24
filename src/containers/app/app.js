import React, { Component } from 'react';
import Header from '../../components/HeaderView/header';
import Tabs from 'react-tabs-navigation';
import './app.css';
const hashHistory = require('react-router/lib/hashHistory');

class App extends Component {
  render() {
    const onTabChange  = (i) => {
      if(i === 0) {
        hashHistory.push('/service');
      } else {
        hashHistory.push('/workflow');
      }
    }
    return (
        <div>
          <Header />
          <div className="tabView">
            <Tabs
              onTabChange = { onTabChange }
              tabs={[
                {
                  children: () => (
                    <div>
                      {this.props.children}
                    </div>
                  ),
                  displayName: 'SERVICE MOCKING'
                },
                {
                  children: () => (
                    <div>
                      {this.props.children}
                    </div>
                  ),
                  displayName: 'WORKFLOW'
                }
              ]}
              lineStyle ={{ backgroundColor: 'blue', height: 2, display: 'block', transition: 'margin-left 0.25s cubic-bezier(0.15, 0.48, 0.42, 1.13)'}}
              tabsBarStyle={{backgroundColor: 'rgba(255,255,255,1)', fontSize: 14, height:40, fontFamily:'Calibri, Trebuchet, sans-serif'}}
              selectedTabStyle ={{':hover': {backgroundColor: 'rgba(255,255,255,1)'}, backgroundColor: 'rgba(255,255,255,1)'}}
              tabsStyle={{':hover': {backgroundColor: 'rgba(255,255,255,1)'}, color:'#1565C0',paddingTop: 10, ':focus':{boxShadow: 'none'}}}
            />
          </div>
        </div>
    );
  }
}

export default App;
