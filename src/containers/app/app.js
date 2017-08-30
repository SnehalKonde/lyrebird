import React, { Component } from 'react';
import Header from '../../components/HeaderView/header';
import TabView from '../../components/TabView/TabView';

class App extends Component {
  constructor(props) {
      super();
      this.selectedTab = (props.location.pathname === "/workflow") ? 1 : 0
  }
  render() {
    return (
        <div>
          <Header />
          <TabView selectedTab={this.selectedTab} children={this.props.children} />
        </div>
    );
  }
}

export default App;
