import {
    RECEIVE_POST
} from './actions'

export function newPostReducer (state = {}, actionData) {
    switch (actionData.type) {
        case RECEIVE_POST:
            return state;
        default :
            return state;
    }
}