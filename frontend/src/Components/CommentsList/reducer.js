import {
	ADD_COMMENT,
	RECEIVE_COMMENTS, 
	REMOVED_COMMENT, 
	REQUEST_COMMENT_OPERATION,
} from '../actions'

export function commentListReducer (state = {items: [], isLoading: false}, actionData) {
    switch (actionData.type) {
		case ADD_COMMENT:
			const { comment } = actionData; 
            return {
				...state,
				items: [...state.items, comment],
				isLoading: false,
			}
		case RECEIVE_COMMENTS:
			return {
				...state,
				items: actionData.comments,
				isLoading: false,
			}
		case REMOVED_COMMENT:
			const { commentRemoved } = actionData;
			return {
				...state,
				items: state.items.filter(comment => comment.id !== commentRemoved.id),
				isLoading: false
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