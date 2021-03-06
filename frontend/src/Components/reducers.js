import { combineReducers } from 'redux'

//Import component reducers here
import { postReducer } from './Post/reducer'
import { postsList } from './PostsList/reducer'
import { searchBar } from './SearchBar/reducer'
import { categoriesList } from './CategoriesList/reducer'
import { sortMenu } from './SortMenu/reducer'
import { newPostReducer } from './NewPost/reducer'
import { commentListReducer } from './CommentsList/reducer'
import { commentReducer } from './Comment/reducer'
import { voteReducer } from './Vote/reducer'
import { editCommentReducer } from './EditComment/reducer'

export default combineReducers({
	postReducer, 
	postsList, 
	searchBar, 
	categoriesList, 
	sortMenu, 
	newPostReducer,
	editCommentReducer,
	commentListReducer,
	commentReducer,
	voteReducer
});