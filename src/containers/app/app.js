import React, { Component } from 'react';
import Header from '../../components/HeaderView/header';
import TabView from '../../components/TabView/TabView';
import './app.scss';

class App extends Component {
  constructor(props) {
      super();
   //   this.selectedTab = (props.location.pathname === "/workflow") ? 1 : 0
  }
  render() {
    return (
        <div>
          <Header pathName={this.props.location.pathname}/>
          {this.props.children}
        </div>
    );
  }
}
//          <TabView selectedTab={this.selectedTab} children={this.props.children} />

export default App;
