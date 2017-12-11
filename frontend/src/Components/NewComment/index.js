import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createComment } from './actions'
import TextareaAutosize from 'react-autosize-textarea';
import { Row, Col, Button } from 'reactstrap';
import { guid } from '../../utils'

class NewComment extends Component {
	
	state = {
		body: ""
	}

	createComment () {
		let newComment = {
            ...this.state,
            id: guid(),
			timestamp: Date.now(),
			parentId: this.props.postId,
		}		
		this.props.createComment(newComment);
		this.setState({body: ""})
	}

	render() {
	
		return (
			<Row className="new-comment-body no-margin-left no-margin-right">
				<Row className="full-width padding-10t ">					
					<Col xs={6}>
						<input type="text"
							name="author"
							className="full-width new-post-title"
							placeholder="Insert author here..."
							value={this.state.author}
							onChange={ event => this.setState({'author': event.target.value}) } />
					</Col>
					<Col xs={6}></Col>
				</Row>
				<Row className="full-width padding-10t ">
					<Col xs={12}>
						<TextareaAutosize rows={2}
								className="full-width new-post-text-area"
								placeholder="insert comment here..." 
								value={this.state.body}
								onChange={ event => this.setState({'body': event.target.value})} />
					</Col>
				</Row>
				<Row className="full-width">
					<Col xs={9}></Col>
					<Col xs={3}>
						<Button color="secondary" onClick={ () => this.clearComment() } > Clear! </Button>
						<Button color="primary" onClick={ () => this.createComment() } > Create! </Button>
					</Col>
				</Row>                   
			</Row>
		)
	}
}

function mapStateToProps ({commentListReducer}) {
	return {
		
	}
}

function mapDispatchToProps (dispatch) {
	return {
		createComment: data => dispatch(createComment(data))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(NewComment);