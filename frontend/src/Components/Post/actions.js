import * as ReadableAPI from "../../readable-api";

/**
 * ACTIONS
 */
import { toogle } from '../NewPost/actions'
import {
	REMOVE_POST, 
	REMOVED_POST, 
	REQUEST_VOTE, 
	RECEIVED_VOTE
} from '../actions';

/**
 * OPEN EDIT MODAL ACTION
 */
export const editPost = id => dispatch => {
	dispatch(toogle(id));
};

/**
 * DELETE POST ACTION
 */
export function removePost () {
    return {
        type: REMOVE_POST,
    }
};

export function removedPost (post) {
    return {
		type: REMOVED_POST,
		postRemoved: post
    }
};

export const deletePost = id => dispatch => {
	dispatch(removePost());
	ReadableAPI.deletePost(id).then(post => {
		dispatch(removedPost(post));
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

