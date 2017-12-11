import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextareaAutosize from 'react-autosize-textarea';
import { Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

import { editComment, getComment, toogleComment } from './actions'

class EditComment extends Component {

    state = {
        id: "",
        author: "",
        body: "",
        isOpen: true,
    }

    editComment = () => {
        let comment = {
            id: this.state.id,
            body: this.state.body,
            author: this.state.author
        }
        this.props.editComment(comment);
    }

    toggleModal = () => {
		this.props.toogleComment();
	}

    componentWillReceiveProps(nextProps) {
		const { comment } = nextProps;
		
		if(!comment) return;

		this.setState({
            id: comment.id,
			body: comment.body,
			author: comment.author,
		});		
	  }

    render() {

        //Get categories from props
        const { id, isOpen, comment } = this.props;
        //If id exist, then is edit mode
        if(id && !comment){
            this.props.getComment(id);
        }

        return (
            <Modal className="modal-lg" isOpen={isOpen}>
                <ModalHeader>Edit Comment</ModalHeader>
                <ModalBody>
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
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={ () => this.editComment()}>Edit</Button>
            		<Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

function mapStateToProps ({editCommentReducer}) {
	return {
        id: editCommentReducer.id,
        comment: editCommentReducer.comment,
        isOpen: editCommentReducer.isOpen,
	}
}

function mapDispatchToProps (dispatch) {
	return {
        getComment: data => dispatch(getComment(data)),
        editComment: data => dispatch(editComment(data)),
        toogleComment: data => dispatch(toogleComment(data))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(EditComment);