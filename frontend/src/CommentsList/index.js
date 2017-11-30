import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comment from '../Comment'
import { getComments } from './actions'

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
				<div className="row comment-subtitle">
					<span>Comments: </span>
				</div>				
				{comments && Array.isArray(comments) && comments.map( (comment) => (
					<div key={`${comment.id}_li`}>
						<Comment 
							key={comment.id}
							comment={comment}
						/>
					</div>
				))}
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