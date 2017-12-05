import React, { Component } from 'react';
import { connect } from 'react-redux';
import Timestamp from 'react-timestamp';
import FaTrashO from 'react-icons/lib/fa/trash-o';
import { deleteComment } from './actions'

class Comment extends Component {

	render() {

		const { comment } = this.props;
		comment.date = new Date(comment.timestamp);	

		return (
			<div className="comment">
				{/* The Head has the title, author and date */}
				<div className="comment-frame">
					<div className="row">
						<span className="comment-author">@{comment.author}: </span>						
						<FaTrashO className="delete-comment-icon" onClick={ () => this.props.deleteComment(comment.id) } />
						<Timestamp className="comment-date" time={comment.date} format='ago' autoUpdate={60} />				
					</div>
					<div className="row padding-10t">
						<span>{comment.body}</span>						
					</div>
				</div>							
			</div>
		)
	}
}

function mapStateToProps ({commentReducer}) {
	return {

	}
}

function mapDispatchToProps (dispatch) {
	return {
		deleteComment: data => dispatch(deleteComment(data))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Comment);