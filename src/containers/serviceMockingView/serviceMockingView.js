import './serviceMockingView.scss';
import React, { Component } from 'react';
import SelectView from '../../components/commons/SelectView';
import TableView from '../../components/TableView/TableView';
import filterServiceMockingData from '../../helpers/utils';
import { connect } from 'react-redux';
import  * as actions  from '../../actions/fetchApiDataActions';
import { bindActionCreators } from 'redux';
const _ = require('lodash');

class ServiceMockingView extends Component {
  componentWillMount() {
    const url = "http://10.221.4.6:8888/loadAllApiInformation";
    this.props.actions.getApiList(url);
    this.state = {
      tags : "Select Tag",
      types : "Select Type"
    };
    this.onFilterChangeHandler = this.onFilterChangeHandler.bind(this);
    this.filterData = [];
  }
  componentWillUpdate(nextProps,nextState){
    this.filterData = filterServiceMockingData(nextProps.serviceMockingData,nextState);
  }
  onFilterChangeHandler(event,value){
    this.setState({[event.target.id]: value})
  }
  render() {
      const tags = [];
      const types = [];
      /*if(this.props.serviceMockingData){
        this.props.serviceMockingData.map((apiData) =>
        {
          if(_.has(apiData, 'methodType')){
            (_.findIndex(types,{name:apiData.methodType}) === -1) && types.push({id:apiData.methodType, name:apiData.methodType});
          }
          if(_.has(apiData, 'details.'+[apiData.methodType]+'.tags')){
            (_.findIndex(tags,{name:apiData.details[apiData.methodType].tags[0]}) === -1) &&  tags.push({id:apiData.details[apiData.methodType].tags[0], name:apiData.details[apiData.methodType].tags[0]});
          }
        })
      }*/
        
      if(this.props.serviceMockingData){
        this.props.serviceMockingData.map((apiData) =>
        {
          if(_.has(apiData, 'methodType')){
            (_.findIndex(types,{name:apiData.methodType}) === -1) && types.push({id:apiData.methodType, name:apiData.methodType});
          }
          if(_.has(apiData, 'tags')){
            (_.findIndex(tags,{name:apiData.tags[0]}) === -1) &&  tags.push({id:apiData.tags[0], name:apiData.tags[0]});
          }
        })
      } 
    return(
      <div className="filterBar">
        <SelectView options={types} id="types" placeholder='Select Type' className="filterBar__selectField" onFilterChangeHandler={this.onFilterChangeHandler}/>
        <SelectView options={tags} id="tags" placeholder='Select Tag' className="filterBar__selectField " onFilterChangeHandler={this.onFilterChangeHandler}/>
        <TableView listingData={this.filterData}/>
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
