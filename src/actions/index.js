import * as actionType from './ActionType';
import data from '../data';
import axios from 'axios';

export const getUserDetails = (empID) => {
	return getUserDetailsCall(empID);
};

export const getGroup = () => {
	return getGroupCall();
};

export const getEmp = (dep) => {
	return getEmpCall(dep);
};

export const getComplete = (res) => ({
	type: actionType.GET_USER_DETAILS,
	payload: res
});

export const getFail = (error) => ({
	type: actionType.GET_ERROR,
	payload: error
});

export const clearAll = () => ({
	type: actionType.CLEAR,
	payload: ''
});

export const showImage = () => ({
	type: actionType.SHOW_IMAGE,
	payload: {
		showImage: true
	}
});

const getGroupCall = () => ({
	type: actionType.GET_DEP,
	payload: {
		dep: Object.keys(data)
	}
});

const getEmpCall = (dep) => ({
	type: actionType.GET_EMP,
	payload: {
		emp: data[dep],
		showImage: false
	}
});

const getUserDetailsCall = (empID) => (dispatch) => {
	axios
		.get(`https://reqres.in/api/users/${empID}`)
		.then((res) => {
			//	dispatch(getComplete(res.data.data));
			dispatch(getComplete({ ...res.data.data, showImage: false }));
		})
		.catch((error) => {
			dispatch(getFail(error.message));
		});
};
