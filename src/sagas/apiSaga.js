import { takeLatest } from 'redux-saga/effects';
import { call, put } from 'redux-saga/effects';
import { requestApiDataSucceeded, requestApiDataFailed } from '../actions/fetchApiDataActions';

function* apiSaga() {
  yield takeLatest("REQUEST_API_DATA", fetchApiData);
}
function fetchApiDataFromServer(url) {
    return fetch(url).then(response => response.json());
}

export function* fetchApiData(action){
  try{
    const Data = yield call(fetchApiDataFromServer,action.URL);
    yield put(requestApiDataSucceeded(Data)); 
  } catch(e){
    yield put(requestApiDataFailed(e.message));
  }
}
export default apiSaga;
