import * as ReadableAPI from "../../readable-api";

import {
    RECEIVE_COMMENT, 
    ADD_COMMENT
} from '../actions'


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
