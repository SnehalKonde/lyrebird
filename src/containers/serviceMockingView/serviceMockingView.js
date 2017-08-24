import React, { Component } from 'react';
import SelectView from '../../components/commons/SelectView';
import './serviceMockingView.css';

class ServiceMockingView extends Component {
  render() {
      const types = [{name:'All',id:'All'},{name:'POST',id:'POST'},{name:'GET',id:'GET'}]
      const tags = [{name:'All',id:'All'},{name:'POST',id:'POST'},{name:'GET',id:'GET'}]
    return(
      <div className="filterBar">
        <SelectView options={types} setterValue="all" placeholder='Select Type' className="filterBar__selectField"/>
        <SelectView options={tags} setterValue="all" placeholder='Select Tags' className="filterBar__selectField "/>
      </div>
    );
  }
}

export default ServiceMockingView;