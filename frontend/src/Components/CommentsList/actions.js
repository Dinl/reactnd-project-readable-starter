import * as ReadableAPI from "../../readable-api";

/**
 * ACTIONS
 */
import {
	RECEIVE_COMMENTS, 
	REMOVED_COMMENT, 
	REQUEST_COMMENT_OPERATION
} from '../actions';

/**
 * Generic function to any request to the server
 */
export function requestCommentOperation () {
    return {
		type: REQUEST_COMMENT_OPERATION,
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
