import { combineReducers } from 'redux';
import empReducer from './empReducer';

const counterApp = combineReducers({
	empReducer
});

export default counterApp;
