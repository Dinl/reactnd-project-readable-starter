import * as ReadableAPI from "../../readable-api";

import {
    ADD_COMMENT
} from '../actions'


export const addComment = comment => {
    return {
        type: ADD_COMMENT,
        comment
    }
}

export const createComment = (comment) => dispatch => {
	ReadableAPI.addComment(comment).then(res => {
		dispatch(addComment(res));
    });
};
