import * as ReadableAPI from "../readable-api";

/**
 * ACTIONS
 */
export const REMOVE_POST = 'REMOVE_POST';
export const REMOVED_POST = 'REMOVED_POST'
export const REQUEST_COMMENTS = 'REQUEST_COMMENTS'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const REQUEST_VOTE = 'REQUEST_VOTE';
export const RECEIVED_VOTE = 'RECEIVED_VOTE';

/**
 * DELETE POST ACTION
 */
export function removePost () {
    return {
        type: REMOVE_POST,
    }
};

export function removedPost () {
    return {
        type: REMOVED_POST,
    }
};

export const deletePost = id => dispatch => {
	dispatch(removePost());
	ReadableAPI.deletePost(id).then(post => {
		dispatch(REMOVED_POST);
	});
};

/**
 * GET COMMENT ACTIONS
 */
export function requestComments () {
    return {
        type: REQUEST_COMMENTS,
    }
}

export function receiveComments () {
    return {
        type: RECEIVE_COMMENTS,
    }
}

export const getComments = PostId => dispatch => {
	dispatch(requestComments());
	ReadableAPI.getPostsComments(PostId).then(comments => {
		dispatch(receiveComments(comments));
	});
};

/**
 * VOTE ACTIONS
 */

export function requestVote () {
    return {
        type: REQUEST_VOTE,
    }
}

export function receivedVote (post) {
    return {
		type: RECEIVED_VOTE,
		post
    }
}

export const votePost = (id, vote) => dispatch => {
	dispatch(requestVote());
	ReadableAPI.votePost(id, {"option": vote}).then(post => {
		dispatch(receivedVote(post));
	});
};

