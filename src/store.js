import {applyMiddleware, createStore,compose} from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducers from "./reducers/fetchApiDataReducer.js";
import  apiSaga  from './sagas/apiSaga';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(ReduxThunk,sagaMiddleware,logger),
  // other store enhancers if any
);

const Store =  createStore(reducers,{ServiceData:[]},enhancer);
sagaMiddleware.run(apiSaga);
export default Store;
