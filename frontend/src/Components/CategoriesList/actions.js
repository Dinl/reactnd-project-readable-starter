import * as ReadableAPI from "../../readable-api";

import { 
	REQUEST_CATEGORIES, 
	RECEIVE_CATEGORIES 
} from "../actions";

export const requestCategories = () =>  {
	return {
		type: REQUEST_CATEGORIES
	};
};

export const receiveCategories = categories => {
	return {
		type: RECEIVE_CATEGORIES,
		categories: categories.categories
	};
};

export const getCategories = () => dispatch => {
	dispatch(requestCategories());
	ReadableAPI.getCategories().then(categories => {
		dispatch(receiveCategories(categories));
	});
};