import {
	REMOVE_POST, 
	REMOVED_POST, 
	REQUEST_VOTE, 
	RECEIVED_VOTE,
} from './actions'

export function postReducer (state = {}, action) {
    switch (action.type) {
        case REMOVE_POST:
            return {
				...state,
			}
		case REMOVED_POST:
			return {
				...state,
			}
		case REQUEST_VOTE:
			return {
				...state,
			}
		case RECEIVED_VOTE:
			return {
				...state,
			}
        default :
            return state;
    }
}