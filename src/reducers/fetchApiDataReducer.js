import Immutable from 'immutable';
const _ = require('lodash');
const initialState = Immutable.Map({ServiceData:[]});
export default (state = initialState, action) => {
    switch (action.type) {
        case "REQUEST_API_DATA_SUCCEEDED":
            let serviceData = [];
            _.each(action.payload, function(apiData){
                _.each(apiData && apiData.pathsDetails, function(pathDetail){
                    if(pathDetail){
                        serviceData.push({details: pathDetail.details, path:pathDetail.path, _id:apiData._id, methodType:apiData.methodType});
                    }
                })
                if((apiData.pathsDetails.length === 0) && (apiData._id || apiData.methodType)){
                    serviceData.push({_id:apiData._id, methodType:apiData.methodType}); 
                }
            })
            let updatedState = Immutable.Map({ServiceData:serviceData});
            return  state.merge(updatedState);
        default:
        	return state;  
    }
};