import * as ReadableAPI from "../../readable-api";

import {
	ADD_POST, 
	REMOVE_POST, 
	REQUEST_POSTS, 
	RECEIVE_POSTS
} from '../actions'

export const requestPosts = () =>  {
	return {
		type: REQUEST_POSTS
	};
};

export const receivePosts = posts => {
	return {
		type: RECEIVE_POSTS,
		posts
	};
};

export const getPosts = category => dispatch => {
	dispatch(requestPosts());
	ReadableAPI.getPosts().then(posts => {
		dispatch(receivePosts(posts));
	});
};