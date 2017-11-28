import * as ReadableAPI from "../readable-api";

import { receivePost } from '../NewPost/actions'

export const VOTE_POST = 'VOTE_POST';
export const DELETING_POST = 'DELETING_POST';
export const POST_DELETED = 'POST_DELETED'
export const REQUEST_COMMENTS = 'REQUEST_COMMENTS'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'

export function deletingPost () {
    return {
        type: DELETING_POST,
    }
}

export function postDeleted () {
    return {
        type: POST_DELETED,
    }
}

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

export function votePost ({id, vote}) {
    return {
        type: VOTE_POST,
        id,
        vote
    }
}

export const deletePost = id => dispatch => {
	dispatch(deletingPost());
	ReadableAPI.deletePost(id).then(post => {
		dispatch(receivePost(post));
	});
};

export const getComments = PostId => dispatch => {
	dispatch(requestComments());
	ReadableAPI.getPostsComments(PostId).then(comments => {
		dispatch(receiveComments(comments));
	});
};

