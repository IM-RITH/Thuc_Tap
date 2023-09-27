import {combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {applyMiddleware} from 'redux';
import { legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import { jobReducer } from './reducers/jobReducer';
import { loaderReducer } from './reducers/loaderReducer';
import { userReducer } from './reducers/usersReducer';

const rootReducer = combineReducers( {
    jobReducer: jobReducer,
    loaderReducer: loaderReducer,
    userReducer: userReducer
});

const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  );

export default store;