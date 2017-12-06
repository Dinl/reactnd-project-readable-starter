import * as ReadableAPI from "../readable-api";

export const RECEIVE_POST = 'RECEIVE_POST'
export const TOOGLE = 'TOOGLE'

export const receivePost = post => {
    return {
        type: RECEIVE_POST,
        post
    }
}

export const toogle = () => {
    return {
        type: TOOGLE
    }
}

export const addPost = post => dispatch => {
	ReadableAPI.addPost(post).then(res => {
		dispatch(receivePost(res));
    });
};