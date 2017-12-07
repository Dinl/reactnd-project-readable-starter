import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comment from '../Comment'
import { getComments } from './actions'
import { Row } from 'reactstrap';

class CommentsList extends Component {
	
	componentDidMount() {
		const { postId } = this.props;
		this.props.getComments(postId);
	}

	render() {
		//Get the comment list
		const { comments } = this.props;
		
		return (
			<Row className="no-margin-left no-margin-right">
				<Row className="full-width comment-subtitle padding-10t no-margin-left no-margin-right">
					<span>Comments: </span>
				</Row>

				{comments && Array.isArray(comments) && comments.map( (comment) => (
					<Comment 
						key = {comment.id}
						comment ={comment}
					/>
				))}
				{comments && Array.isArray(comments) && comments.length === 0 &&
					<span>No comments found</span>
				}
			</Row>
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