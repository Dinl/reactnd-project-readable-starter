const api = "http://localhost:3001"

//Token
let token = localStorage.token;
if(token === undefined) {
	token = Math.random().toString(36).slice(2);
}

// Headers
const headers = {
	Authorization: token
}

/**
 * getPosts
 */
export const getPosts = () => 
	fetch(`${api}/posts`, {headers}).then(res => res.json())

/**
 * getPost
 */
export const getPost = (id) => 
	fetch(`${api}/posts/${id}`, {headers}).then(res => res.json())

/**
 * getPostsComments
 */
export const getPostsComments = (id) => 
	fetch(`${api}/posts/${id}/comments`, {headers}).then(res => res.json())

/**
 * getComment
 */
export const getComment = (id) => 
	fetch(`${api}/comments/${id}`, {headers}).then(res => res.json())

	
/**
 * getCategories
 */
export const getCategories = () => 
fetch(`${api}/categories`, {headers}).then(res => res.json())

/**
 * addPost
 */
export const addPost = (post) =>
fetch(`${api}/posts`, {
	method: "POST",
	headers: {
			...headers,
			"Content-Type": "application/json"
		},
	body: JSON.stringify(post)
	}).then(response => response.json())

/**
 * editPost
 */
export const editPost = (post) =>
fetch(`${api}/posts/${post.id}`, {
	method: "PUT",
	headers: {
			...headers,
			"Content-Type": "application/json"
		},
	body: JSON.stringify(post)
	}).then(response => response.json())
	

/**
 * votePost
 */
export const votePost = (id, vote) =>
fetch(`${api}/posts/${id}`, {
	method: "POST",
	headers: {
			...headers,
			"Content-Type": "application/json"
		},
	body: JSON.stringify(vote)
	}).then(response => response.json())

/**
 * deletePost
 */
export const deletePost = (id) =>
fetch(`${api}/posts/${id}`, {
	method: "DELETE",
	headers: {
			...headers,
			"Content-Type": "application/json"
		}
	}).then(response => response.json())

/**
 * deleteComment
 */
export const deleteComment = (id) =>
fetch(`${api}/comments/${id}`, {
	method: "DELETE",
	headers: {
			...headers,
			"Content-Type": "application/json"
		}
	}).then(response => response.json())

/**
 * addComment
 */
export const addComment = (comment) =>
fetch(`${api}/comments`, {
	method: "POST",
	headers: {
			...headers,
			"Content-Type": "application/json"
		},
	body: JSON.stringify(comment)
	}).then(response => response.json())

/**
 * editComment
 */
export const editComment = (commnent) =>
fetch(`${api}/comments/${commnent.id}`, {
	method: "PUT",
	headers: {
			...headers,
			"Content-Type": "application/json"
		},
	body: JSON.stringify(commnent)
	}).then(response => response.json())