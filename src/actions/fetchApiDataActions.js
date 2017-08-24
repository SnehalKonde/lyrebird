export const getApiList = (url) => {
    return {
        type : "REQUEST_API_DATA",
        URL: url
    }
};

export const requestApiDataSucceeded = (data) => {
    return {
        type : "REQUEST_API_DATA_SUCCEEDED",
        payload : data
    }
};

export const requestApiDataFailed = (errorMsg) => {
    return {
        type : "REQUEST_API_DATA_FAILED",
        errorMsg : errorMsg
    }
};