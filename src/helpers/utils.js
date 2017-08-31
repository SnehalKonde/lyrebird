const _ = require('lodash');
export default function filterServiceMockingData(data,state){
    let filterData = [];
    const listingData = [];
    const types = [];
    data.map((apiData) =>
    {
        if(_.has(apiData, 'methodType')){
        (_.findIndex(types,{name:apiData.methodType}) === -1) && types.push({id:apiData.methodType, name:apiData.methodType});
        }
    })
    if(state.types !== "Select Type" ){
        filterData = _.filter(data,{methodType : state.types});
        if(state.tags !== "Select Tag"){
            filterData = _.filter(filterData,{details:{[state.types]:{tags:[state.tags]}}});
        }
    }else {
        filterData = data;
        if(state.tags !== "Select Tag"){
            const selectedTagData  = types.map((val) => {
                return _.filter(filterData,{details:{[val.name]:{tags:[state.tags]}}});
            })
            filterData = [];
            _.each(selectedTagData, function(val){
                filterData =  _.union(filterData,val);
            })
        }
    }
    filterData && filterData.map((apiData) =>
    {
        let tagValue = (apiData.details && apiData.details[apiData.methodType]) ? apiData.details[apiData.methodType].tags[0] : "";
        listingData.push({type:apiData.methodType,tag:tagValue,path:apiData.path});
    })
    return listingData;
}
