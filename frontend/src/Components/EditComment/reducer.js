import { 
    EDITED_COMMENT, 
    RECEIVE_COMMENT,
    TOOGLE_COMMENT
} from '../actions'

export function editCommentReducer (state = { isOpen: false }, actionData) {
    switch (actionData.type) {
        case EDITED_COMMENT: 
            return state;
        case RECEIVE_COMMENT: 
            return {
                ...state,
                comment: actionData.comment
            };
        case TOOGLE_COMMENT:
            return {
                ...state,
                id: actionData.id,
                isOpen: !state.isOpen
            };
        default :
            return state;
    }
}