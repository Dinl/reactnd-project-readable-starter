import * as ReadableAPI from "../readable-api";

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'
export const ADD_COMMENT = 'ADD_COMMENT'

export const receiveComment = comment => {
    return {
        type: RECEIVE_COMMENT,
        comment
    }
}

export const addComment = comment => {
    return {
        type: ADD_COMMENT,
        comment
    }
}

export const getPostsComments = postId => dispatch => {
	ReadableAPI.getPostsComments(postId).then(res => {
		dispatch(receiveComment(res));
    });
};

export const createComment = (comment) => dispatch => {
	ReadableAPI.addComment(comment).then(res => {
		dispatch(addComment(res));
    });
};
