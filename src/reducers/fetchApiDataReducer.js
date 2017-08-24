export default (state ={}, action) => {
    switch (action.type) {
        case "REQUEST_API_DATA_SUCCEEDED":
            return  Object.assign({},state,{ServiceData: action.payload });
        case "SAVE_SERVICE_MOCKING_DATA":
            return  Object.assign({},state,{ServiceData: action.payload });
        default:
        	return state;  
    }
};