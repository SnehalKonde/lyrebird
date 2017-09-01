import React, { Component } from 'react';
import hashHistory from 'react-router/lib/hashHistory';
class NavigationListItemView extends Component {
  render() {
    var liCssClass = 'nav-item '+ (this.props.active ? 'active ' : '');
    return (
        <li className={liCssClass}>
          <a className="nav-link" name={this.props.linkToPath} onClick={this.props.onClickHandler}>{this.props.text}</a>
        </li>
    );
  }
}
//href={this.props.linkToPath}
//Todo proto

export default NavigationListItemView;
