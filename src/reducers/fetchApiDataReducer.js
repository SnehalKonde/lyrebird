import Immutable from 'immutable';
const initialState = Immutable.Map({ServiceData:[]});
export default (state = initialState, action) => {
    switch (action.type) {
        case "REQUEST_API_DATA_SUCCEEDED":
            let updatedState = Immutable.Map({ServiceData:action.payload});
            return  state.merge(updatedState);
        case "SAVE_SERVICE_MOCKING_DATA":
            return  Object.assign({},state,{ServiceData: action.payload });
        default:
        	return state;  
    }
};