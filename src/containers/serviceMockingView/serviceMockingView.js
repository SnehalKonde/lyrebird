import React, { Component } from 'react';
import SelectView from '../../components/commons/SelectView';
import './serviceMockingView.css';
import { connect } from 'react-redux';
import  * as actions  from '../../actions/fetchApiDataActions';
import {bindActionCreators} from 'redux';

class ServiceMockingView extends Component {
  componentWillMount() {
    const url = "http://10.221.4.6:8888/loadAllApiInformation";
    this.props.actions.getApiList(url);
  }

  render() {
      //const types = [{name:'All',id:'All'},{name:'POST',id:'POST'},{name:'GET',id:'GET'}]
      const tags = [{name:'All',id:'All'},{name:'POST',id:'POST'},{name:'GET',id:'GET'}]
      const types = this.props.serviceMockingData.map((apiData) => 
      {
         return {id:apiData.methodType, name:apiData.methodType} 
      })
    return(
      <div className="filterBar">
        <SelectView options={types} placeholder='Select Type' className="filterBar__selectField"/>
        <SelectView options={tags} placeholder='Select Tags' className="filterBar__selectField "/>
      </div>
    );
  }
}
function mapStateToProps(state,ownState) {
   return {
     serviceMockingData : state.ServiceData
  }
}

function mapDispatchToProps(dispatch){
  return{
    actions : bindActionCreators(actions,dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceMockingView);