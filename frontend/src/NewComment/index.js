import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPostsComments, addComment } from './actions'
import TextareaAutosize from 'react-autosize-textarea';

class NewComment extends Component {
	
	state = {

	}

	componentDidMount() {
		const { postId } = this.props;
		this.props.getPostsComments(postId);
	}

	createComment (data) {
		this.props.addComment(data);
	}

	render() {
		//Get the comment list
		const { postId, comments } = this.props;
		
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
		addComment: data => dispatch(addComment(data))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(NewComment);