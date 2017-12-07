import * as ReadableAPI from "../readable-api";

export const CREATED_POST = 'CREATED_POST'
export const EDITED_POST = 'EDITED_POST'
export const RECEIVE_POST = 'RECEIVE_POST'
export const TOOGLE = 'TOOGLE'

export const createdPost = post => {
    return {
        type: CREATED_POST,
        post
    }
}

export const editedPost = post => {
    return {
        type: EDITED_POST,
        post
    }
}

export const receivePost = post => {
    return {
        type: RECEIVE_POST,
        post
    }
}

export const toogle = (id) => {
    return {
        type: TOOGLE,
        id
    }
}

export const getPost = post => dispatch => {
	ReadableAPI.getPost(post).then(res => {
        dispatch(receivePost(res));
    });
};

export const addPost = post => dispatch => {
	ReadableAPI.addPost(post).then(res => {
        dispatch(createdPost(res));
        dispatch(toogle());
    });
};

export const editPost = post => dispatch => {
	ReadableAPI.editPost(post).then(res => {
        dispatch(editedPost(res));
        dispatch(toogle());
    });
};
