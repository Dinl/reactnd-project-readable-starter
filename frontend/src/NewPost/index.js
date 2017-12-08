import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import TextareaAutosize from 'react-autosize-textarea';
import { Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { getPost, addPost, editPost, toogle } from './actions';
import { guid } from '../utils';

class NewPost extends Component {
    state = {
        title: "",
		category: "",
		body: "",
		isOpen: true,
		isEdit: false
    }

    createPost = () => {
        let newPost = {
            ...this.state,
            id: guid(),
            timestamp: Date.now()
        }
        this.props.addPost(newPost);
    }

    editPost = () => {
        let editPost = {
            id: this.state.id,
            title: this.state.title,
            body: this.state.body
        }
        this.props.editPost(editPost);
    }

    clearPost = () => {
        this.setState({
            title: "",
            category: "",
            body: "",
        });
	}
	
	toggleModal = () => {
		this.props.toogle();
	}
	
	componentWillReceiveProps(nextProps) {
		const { post } = nextProps;
		
		if(!post) return;

		this.setState({
            id: post.id,
			title: post.title,
			category: post.category,
			body: post.body,
			author: post.author,
			isEdit: true
		});
		
	  }

    
    render() {
        //Get categories from props
        const { categories, isOpen, id, post } = this.props;
        //If id exist, then is edit mode
        if(id && !post){
            this.props.getPost(id);
        }

        return (
            <Modal className="modal-lg" isOpen={isOpen}>
				<ModalHeader toggle={this.toggleModal}>Create Post</ModalHeader>
				<ModalBody>
                    <Row className="new-post-body">
                        <Row className="full-width padding-10b">
                            <Col xs={12}>
                                <input type="text"
                                        name="title"
                                        className="full-width new-post-title"
                                        placeholder="Insert Title here..."
                                        value={this.state.title}
                                        onChange={ event => this.setState({'title': event.target.value}) } />
                            </Col>
                        </Row>
                        <Row className="full-width padding-10b">
                            <Col xs={9}>
                                <input type="text"
                                        name="author"
                                        className="full-width new-post-title"
                                        placeholder="Insert author here..."
                                        value={this.state.author}
                                        onChange={ event => this.setState({'author': event.target.value}) } />
                            </Col>
                            <Col xs={3}>
                                <Select simpleValue
                                        name="category"
                                        className="full-width new-post-category"
                                        value={this.state.category}
                                        clearable={false}
                                        onChange={ value => this.setState({'category': value})}
                                        options={categories}
                                        labelKey="name"
                                        valueKey="name"/>
                            </Col>
                        </Row>
                        <Row className="full-width padding-10b">
                            <Col xs={12}>
                                <TextareaAutosize rows={3}
                                        className="full-width new-post-text-area"
                                        placeholder="Insert text here..." 
                                        value={this.state.body}
                                        onChange={ event => this.setState({'body': event.target.value})} />
                            </Col>
                        </Row>                  
                    </Row> 
				</ModalBody>
				<ModalFooter>
					{this.state.isEdit && <Button color="primary" onClick={ () => this.editPost()}>Edit</Button>}
					{' '}
					{!this.state.isEdit && <Button color="primary" onClick={ () => this.createPost()}>Create</Button>}
					{' '}
            		<Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
				</ModalFooter>
            </Modal>
        )
    }
}

function mapStateToProps ({categoriesList, newPostReducer}) {
	return {
		categories: categoriesList.items,
        isOpen: newPostReducer.isOpen,
        id: newPostReducer.id,
        post: newPostReducer.post
	}
}

function mapDispatchToProps (dispatch) {
	return {
        getPost: data => dispatch(getPost(data)),
		addPost: data => dispatch(addPost(data)),
		editPost: data => dispatch(editPost(data)),
		toogle: () => dispatch(toogle())
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(NewPost);