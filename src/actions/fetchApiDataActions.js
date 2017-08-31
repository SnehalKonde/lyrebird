import * as constant from '../constants/AppConstant';
export const getApiList = (url) => {
    return {
        type : constant.REQUEST_API_DATA,
        URL: url
    }
};

export const requestApiDataSucceeded = (data) => {
    return {
        type : constant.REQUEST_API_DATA_SUCCEEDED,
        payload : data
    }
};

export const requestApiDataFailed = (errorMsg) => {
    return {
        type : constant.REQUEST_API_DATA_FAILED,
        errorMsg : errorMsg
    }
};