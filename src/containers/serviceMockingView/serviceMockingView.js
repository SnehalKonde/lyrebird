import React, { Component } from 'react';
import SelectView from '../../components/commons/SelectView';
import './serviceMockingView.css';
import { connect } from 'react-redux';
import  * as actions  from '../../actions/fetchApiDataActions';
import { bindActionCreators } from 'redux';
const _ = require('lodash');

class ServiceMockingView extends Component {
  componentWillMount() {
    const url = "http://10.221.4.6:8888/loadAllApiInformation";
    this.props.actions.getApiList(url);
  }

  render() {
      //const types = [{name:'All',id:'All'},{name:'POST',id:'POST'},{name:'GET',id:'GET'}]
      const tags = [];
      const types = this.props.serviceMockingData && this.props.serviceMockingData.map((apiData) => 
      {
         return {id:apiData.methodType, name:apiData.methodType} 
      })
      _.each(this.props.serviceMockingData, function(value){
         _.each(value.pathsDetails, function(data){
           if(data && data.details && data.details.post &&  data.details.post.tags){
             if(_.findIndex(tags,{name:data.details.post.tags[0]}) === -1){
                tags.push({name:data.details.post.tags[0],id:data.details.post.tags[0]});
             }
           }
         })
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
     serviceMockingData : state.get('ServiceData')
  }
}

function mapDispatchToProps(dispatch){
  return{
    actions : bindActionCreators(actions,dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceMockingView);