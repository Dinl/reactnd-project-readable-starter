import {
	REQUEST_POSTS,
	RECEIVE_POSTS
} from './actions'

import {
	RECEIVE_POST
} from '../NewPost/actions'

import {
	REMOVED_POST,
	RECEIVED_VOTE
} from '../Post/actions'

export function postsList (state = { items: [], isLoading: false }, actionData) {
    switch (actionData.type) {
		case REQUEST_POSTS:
			return {
				...state,
				isLoading: true
			}		
		case RECEIVE_POSTS: 
			const { posts } = actionData; 
			return {
				...state,
				items: posts.filter(post => !post.deleted),
				isLoading: false
			}
		case RECEIVE_POST: 
			const { post } = actionData;
			return {
				...state,
				items: [...state.items, post],
				isLoading: false
			}
		case REMOVED_POST:
			const { postRemoved } = actionData;
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