import { 
    REMOVE_COMMENT, 
    REMOVED_COMMENT,
    REQUEST_VOTE,
    RECEIVED_VOTE,
} from '../actions'

export function commentReducer (state = { items: [], isLoading: false }, actionData) {
    switch (actionData.type) {
        case REMOVE_COMMENT: 
            return state;
        case REMOVED_COMMENT: 
            return state;
        case REQUEST_VOTE:
            return state;
        case RECEIVED_VOTE:
            return state;
        default :
            return state;
    }
}