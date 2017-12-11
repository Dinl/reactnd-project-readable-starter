import * as ReadableAPI from "../../readable-api";

/**
 * ACTIONS
 */
import { 
	REMOVE_COMMENT, 
	REMOVED_COMMENT, 
	TOOGLE_COMMENT
} from '../actions';


/**
 * OPEN EDIT COMMENT
 */
export function toogleComment (id) {
    return {
		type: TOOGLE_COMMENT,
		id
    }
};

export const editComment = id => dispatch => {
	dispatch(toogleComment(id));
};


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