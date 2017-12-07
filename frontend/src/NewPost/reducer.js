import {
	RECEIVE_POST,
	TOOGLE
} from './actions'

export function newPostReducer (state = {isOpen: false}, actionData) {
    switch (actionData.type) {
		case RECEIVE_POST:
			const { post } = actionData;
            return {
				...state,
				post
			};
		case TOOGLE:
			const { id } = actionData;
			return {
				...state,
				title: state.isOpen ? state.title : "",
				category: state.isOpen ? state.category : "",
				author: state.isOpen ? state.author : "",
				body: state.isOpen ? state.body : "",
				isOpen: !state.isOpen,
				id
			}
        default :
            return state;
    }
}