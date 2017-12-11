import {
	REQUEST_VOTE, 
	RECEIVED_VOTE,
} from '../actions'

export function voteReducer (state = {}, action) {
    switch (action.type) {
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