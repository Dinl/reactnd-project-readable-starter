import * as ReadableAPI from "../readable-api";

export const RECEIVE_POST = 'RECEIVE_POST'

export const receivePost = post => {
    return {
        type: RECEIVE_POST,
        post
    }
}

export const addPost = post => dispatch => {
	ReadableAPI.addPost(post).then(res => {
		dispatch(receivePost(res));
    });
};