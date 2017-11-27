import {
	REQUEST_POSTS,
	RECEIVE_POSTS
} from './actions'

import {
	RECEIVE_POST
} from '../NewPost/actions'

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
        default :
            return state;
    }
}