import * as ReadableAPI from "../readable-api";

/**
 * ACTIONS
 */
export const ADD_COMMENT = 'ADD_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const REMOVED_COMMENT = 'REMOVED_COMMENT';
export const REQUEST_COMMENT_OPERATION = 'REQUEST_COMMENT_OPERATION';

/**
 * Generic function to any request to the server
 */
export function requestCommentOperation () {
    return {
		type: REQUEST_COMMENT_OPERATION,
    }
}

/**
 * ADD ACTIONS
 */

export function addComment () {
    return {
		type: ADD_COMMENT,
    }
}

/**
 * REMOVE ACTIONS
 */

export function removedComment () {
    return {
		type: REMOVED_COMMENT,
    }
}

/**
 * GET COMMENT
 */

export function receiveComments (comments) {
    return {
		type: RECEIVE_COMMENTS,
		comments
    }
}

export const getComments = PostId => dispatch => {
	dispatch(requestCommentOperation());
	ReadableAPI.getPostsComments(PostId).then(comments => {
		dispatch(receiveComments(comments));
	});
};
