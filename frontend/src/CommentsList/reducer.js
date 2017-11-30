import {
	ADD_COMMENT, 
	RECEIVE_COMMENTS, 
	REMOVED_COMMENT, 
	REQUEST_COMMENT_OPERATION,
} from './actions'

export function commentListReducer (state = {items: [], isLoading: false}, actionData) {
    switch (actionData.type) {
        case ADD_COMMENT:
            return {
				...state,
				isLoading: false,
			}
		case RECEIVE_COMMENTS:
			return {
				...state,
				items: actionData.comments,
				isLoading: false,
			}
		case REMOVED_COMMENT:
			return {
				...state,
				isLoading: false,
			}
		case REQUEST_COMMENT_OPERATION:
			return {
				...state,
				isLoading: true,
			}
        default :
            return state;
    }
}