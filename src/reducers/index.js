import {combineReducers} from 'redux';
import isLoggedReducer from './auth';

const rootReducer = combineReducers({
    auth: isLoggedReducer
});

export default rootReducer;