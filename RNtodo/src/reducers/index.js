import { combineReducers } from 'redux';

import todoReducer from './todoReducer';
import userReducer from './userReducer';

const appReducer = combineReducers({
	todoReducer: todoReducer,
	userReducer: userReducer
})

export default appReducer;