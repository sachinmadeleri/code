import * as actionType from '../actions/ActionType';

const empReducer = (state = {}, action) => {
	switch (action.type) {
		case actionType.GET_USER_DETAILS:
			return { ...state, ...action.payload };
		case actionType.CLEAR:
			return action.payload;
		default:
			return { ...state, ...action.payload };
	}
};

export default empReducer;
