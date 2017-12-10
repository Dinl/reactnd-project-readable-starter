import {
    RECEIVE_COMMENT,
    ADD_COMMENT
} from '../actions'

export function newComment (state = { }, actionData) {
    switch (actionData.type) {
        case RECEIVE_COMMENT:
            return {
                ...state
            };
        case ADD_COMMENT:
            return {
                ...state
            }
        default :
            return state;
    }
}