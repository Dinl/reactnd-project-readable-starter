import React, { Component } from 'react'
import { connect } from 'react-redux'
import Timestamp from 'react-timestamp';

class Comment extends Component {

	render() {

		const { comment } = this.props;
		comment.date = new Date(comment.timestamp);	

		return (
			<div className="comment">
				{/* The Head has the title, author and date */}
				<div className="comment-frame">
					<div className="row">
						<span className="comment-author">{comment.author}</span>
						<Timestamp className="comment-date" time={comment.date} format='ago' autoUpdate={60} />				
					</div>
					<div className="row">
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
		
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Comment);