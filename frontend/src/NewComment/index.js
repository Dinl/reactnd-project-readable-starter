import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPostsComments, createComment } from './actions'
import TextareaAutosize from 'react-autosize-textarea';
import { guid } from '../utils'

class NewComment extends Component {
	
	state = {
		body: ""
	}

	componentDidMount() {
		const { postId } = this.props;
		this.props.getPostsComments(postId);
	}

	createComment () {
		let newComment = {
            ...this.state,
            id: guid(),
			timestamp: Date.now(),
			parentId: this.props.postId,
			author: "TODO"
		}		
		this.props.createComment(newComment);
		this.setState({body: ""})
	}

	render() {
	
		return (
			<div>
				<div className="new-comment-body">
                    <div className="new-comment-row">
                        <TextareaAutosize rows={3}
                                className="new-post-text-area"
                                placeholder="insert comment here..." 
                                value={this.state.body}
                                onChange={ event => this.setState({'body': event.target.value})} />
                    </div>
                    <div className="new-comment-row">
                        <div className="new-post-controls" >
                            <div className="button clear-button" onClick={ () => this.clearComment() }>
                                <span>Clear!</span>
                            </div>
                            <div className="button create-button" onClick={ () => this.createComment()}>
                                <span>Create!</span>
                            </div>
                        </div>
                    </div>                    
                </div>
			</div>
		)
	}
}

function mapStateToProps ({commentListReducer}) {
	return {
		
	}
}

function mapDispatchToProps (dispatch) {
	return {
		getPostsComments: data => dispatch(getPostsComments(data)),
		createComment: data => dispatch(createComment(data))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(NewComment);