import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comment from '../Comment'
import { getComments } from './actions'
import NewComment from '../NewComment'
import FaPlusCircle from 'react-icons/lib/fa/plus-circle'

class CommentsList extends Component {
	
	componentDidMount() {
		const { postId } = this.props;
		this.props.getComments(postId);
	}

	render() {
		//Get the comment list
		const { postId, comments } = this.props;
		
		return (
			<div>
				<div className="row comment-subtitle padding-10t">
					<span>Comments: </span>
				</div>				
				{comments && Array.isArray(comments) && comments.map( (comment) => (
					<div key={`${comment.id}_li`}>
						<Comment 
							key = {comment.id}
							comment ={comment}
						/>
					</div>
				))}
				{comments && Array.isArray(comments) && comments.length === 0 &&
					<span>No comments found</span>
				}
				<div className="row" >         			
					<FaPlusCircle 
						className="add-button"
						size={42} />
				</div>
				
				<NewComment postId = {postId} />
			</div>
		)
	}
}

function mapStateToProps ({commentListReducer}) {
	return {
		comments: commentListReducer.items
	}
}

function mapDispatchToProps (dispatch) {
	return {
		getComments: data => dispatch(getComments(data)),
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentsList);