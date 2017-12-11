import * as ReadableAPI from "../../readable-api";

import {
    EDITED_COMMENT, 
    RECEIVE_COMMENT, 
    TOOGLE_COMMENT
} from '../actions'

export const editedComment = editedComment => {
    return {
        type: EDITED_COMMENT,
        editedComment
    }
}

export const receiveComment = comment => {
    return {
        type: RECEIVE_COMMENT,
        comment
    }
}

export const getComment = comment => dispatch => {
	ReadableAPI.getComment(comment).then(res => {
        dispatch(receiveComment(res));
    });
};

export function toogleComment (id) {
    return {
		type: TOOGLE_COMMENT,
		id
    }
};

export const editComment = comment => dispatch => {
	ReadableAPI.editComment(comment).then(res => {
        dispatch(editedComment(res));
        dispatch(toogleComment(comment.id));
    });
};