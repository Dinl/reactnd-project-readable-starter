import React, { Component } from 'react';
import { connect } from 'react-redux';
import Timestamp from 'react-timestamp';
import { Link } from "react-router-dom";
import CommentList from '../CommentsList';
import NewComment from '../NewComment'
import { Row, Col } from 'reactstrap';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down';
import FaTrashO from 'react-icons/lib/fa/trash-o';
import FaEdit from 'react-icons/lib/fa/edit';
import GoCommentDiscussion from 'react-icons/lib/go/comment-discussion';

import { editPost, deletePost, votePost } from './actions'

class Post extends Component {

	render() {

		const { post, detail } = this.props;
		post.date = new Date(post.timestamp);		

		return (
			<div className="post">
				{/* The Head has the title, author, date and category info  */}
				<Row className="post-frame head-row no-margin-left no-margin-right">
					{/* Title and category  */}
					<Row className="full-width no-margin-left no-margin-right">
						<Col xs={6} className="title">
							{detail && <b>{post.title}</b> }
							{!detail && 
								<Link to={`/${post.category}/${post.id}`}>
									<b>{post.title}</b>
								</Link>
							}							
						</Col>
						<Col xs={6} className="category-frame no-padding-right">
							<div className="category">
								{post.category}								
								<FaTrashO className="delete-post-icon"
									onClick={ () => this.props.deletePost(post.id) } />
								<FaEdit className="delete-post-icon"
									onClick={ () => this.props.editPost(post.id) } />
							</div>
						</Col>
					</Row>

					{/* Author and post date */}
					<Row className="full-width no-margin-left no-margin-right">
						<Col className="author" xs={6}>
							<span>@{post.author} - </span>
							<span className="date">
								<Timestamp time={post.date} format='ago' />
							</span>
						</Col>
						<Col xs={6}>
							{!detail && 
								<Link to={`/${post.category}/${post.id}`}
									className="post-comments-icon">
									<GoCommentDiscussion />
									{post.commentCount}
								</Link>
								
							}
						</Col>
					</Row>					
				</Row>

				{/* The body show only the content  */}
				{detail && 
					<Row className="post-frame head-content no-margin-left no-margin-right">
						{/* Body content */}
						<div>
							<span className="body">{post.body}</span>
						</div>
					</Row>
				}

				{/* The footer has the votes and comments  */}
				{detail && 
					<Row className="post-frame head-footer no-margin-left no-margin-right">
						<Col xs={6} className="vote">
							{/* Vote frame with up/down and number items  */}
							<div className="vote-frame">							
								<div className="vote-up">
									<FaThumbsOUp onClick={ () => this.props.vote(post.id, "upVote") } />
								</div>
								<div className="vote-number">
									{post.voteScore}
								</div>
								<div className="vote-down">
									<FaThumbsODown onClick={ () => this.props.vote(post.id, "downVote") } />
								</div>							
							</div>	
						</Col>
						<Col xs={6}>
							{detail && 
								<span className="post-comments-icon">
									<GoCommentDiscussion />
									{post.commentCount}
								</span>
							}
						</Col>			
					</Row>
				}
				{detail && 	<NewComment postId = {post.id} /> }
				{detail && <CommentList postId = {post.id} /> }
			</div>
			
		)
	}
}

function mapStateToProps ({postReducer}) {
	return {

	}
}

function mapDispatchToProps (dispatch) {
	return {
		editPost: data => dispatch(editPost(data)),
		deletePost: data => dispatch(deletePost(data)),
		vote: (id, vote) => dispatch(votePost(id, vote))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Post);