import React, { Component } from 'react';
import { connect } from 'react-redux';
import Timestamp from 'react-timestamp';
import FaEdit from 'react-icons/lib/fa/edit';
import FaTrashO from 'react-icons/lib/fa/trash-o';
import { deleteComment, editComment } from './actions'
import { Row, Col } from 'reactstrap';

class Comment extends Component {

	render() {

		const { comment } = this.props;
		comment.date = new Date(comment.timestamp);	

		return (
			<Row className="full-width comment no-margin-left no-margin-right">
				{/* The Head has the title, author and date */}
				<Col xs={12} className="comment-frame">
					<Row className="no-margin-left no-margin-right">
						<Col xs={6} className="author">
							<span className="comment-author">@{comment.author}: </span>							
						</Col>
						<Col xs={6}>
							<FaTrashO className="delete-comment-icon" onClick={ () => this.props.deleteComment(comment.id) } />
							<FaEdit className="delete-post-icon" onClick={ () => this.props.editComment(comment.id) } />
							<Timestamp className="comment-date" time={comment.date} format='ago' />	
						</Col>		
					</Row>
					<Row className="no-margin-left no-margin-right">
						<span>{comment.body}</span>						
					</Row>
				</Col>							
			</Row>
		)
	}
}

function mapStateToProps ({commentReducer}) {
	return {

	}
}

function mapDispatchToProps (dispatch) {
	return {
		editComment: data => dispatch(editComment(data)),
		deleteComment: data => dispatch(deleteComment(data))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Comment);