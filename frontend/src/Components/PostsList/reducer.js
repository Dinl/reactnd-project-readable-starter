import {
	REQUEST_POSTS,
	RECEIVE_POSTS,
	CREATED_POST,
	EDITED_POST,
	REMOVED_POST,
	RECEIVED_VOTE
} from '../actions'

export function postsList (state = { items: [], isLoading: false }, actionData) {
	const { posts, post, postRemoved } = actionData; 
    switch (actionData.type) {
		case REQUEST_POSTS:
			return {
				...state,
				isLoading: true
			}		
		case RECEIVE_POSTS:			
			return {
				...state,
				items: posts.filter(post => !post.deleted),
				isLoading: false
			}
		case CREATED_POST:
			return {
				...state,
				items: [...state.items, post],
				isLoading: false
			}
		case EDITED_POST:
			const editedItems = state.items.map( post => (
				post.id === actionData.post.id ? actionData.post : post
			));
			return {
				...state,
				items: editedItems,
				isLoading: false
			}
		case REMOVED_POST:
			return {
				...state,
				items: state.items.filter(post => post.id !== postRemoved.id),
				isLoading: false
			}
		case RECEIVED_VOTE:
			const newItems = state.items.map( post => (
				post.id === actionData.post.id ? actionData.post : post
			));
			return {
				...state,
				items: newItems
			}
        default :
            return state;
    }
}