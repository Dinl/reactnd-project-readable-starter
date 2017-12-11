import * as ReadableAPI from "../../readable-api";

/**
 * ACTIONS
 */
import {
	REQUEST_VOTE, 
	RECEIVED_VOTE
} from '../actions';

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