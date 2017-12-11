import * as ReadableAPI from "../../readable-api";

/**
 * ACTIONS
 */
import { toogle } from '../NewPost/actions'
import {
	REMOVE_POST, 
	REMOVED_POST
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