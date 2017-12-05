import * as ReadableAPI from "../readable-api";

/**
 * ACTIONS
 */
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const REMOVED_COMMENT = 'REMOVED_COMMENT'
export const REQUEST_VOTE = 'REQUEST_VOTE';
export const RECEIVED_VOTE = 'RECEIVED_VOTE';

/**
 * DELETE POST ACTION
 */
export function removeComment () {
    return {
        type: REMOVE_COMMENT,
    }
};

export function removedComment (comment) {
    return {
		type: REMOVED_COMMENT,
		commentRemoved: comment
    }
};

export const deleteComment = id => dispatch => {
	dispatch(removeComment());
	ReadableAPI.deleteComment(id).then(comment => {
		dispatch(removedComment(comment));
	});
};