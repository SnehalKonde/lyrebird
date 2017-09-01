import Immutable from 'immutable';
import * as constant from '../constants/AppConstant';


const _ = require('lodash');
const initialState = Immutable.Map({ServiceData:[]});
export default (state = initialState, action) => {
    let apiPathDetails = {};
    switch (action.type) {
        case constant.REQUEST_API_DATA_SUCCEEDED:
            let serviceData = [];
            _.each(action.payload, function(apiData){
                _.each(apiData && apiData.pathsDetails, function(pathDetail){
                    if(pathDetail){
                        apiPathDetails = {path:pathDetail.path, _id:apiData._id, methodType:apiData.methodType};
                        apiPathDetails = Object.assign({},apiPathDetails, pathDetail.details[apiData.methodType]);
                        //serviceData.push({details: pathDetail.details, path:pathDetail.path, _id:apiData._id, methodType:apiData.methodType});
                        serviceData.push(apiPathDetails);
                    }
                })
                /*if((apiData.pathsDetails.length === 0) && (apiData._id || apiData.methodType)){
                    serviceData.push({_id:apiData._id, methodType:apiData.methodType}); 
                }*/
            })
            let updatedState = Immutable.Map({ServiceData:serviceData});
            return  state.merge(updatedState);
        default:
        	return state;  
    }
};