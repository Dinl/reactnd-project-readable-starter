import {
	RECEIVE_POST,
	TOOGLE
} from './actions'

export function newPostReducer (state = {isOpen: false}, actionData) {
    switch (actionData.type) {
        case RECEIVE_POST:
            return {
                ...state
			};
		case TOOGLE:
			return {
				...state,
				isOpen: !state.isOpen
			}
        default :
            return state;
    }
}