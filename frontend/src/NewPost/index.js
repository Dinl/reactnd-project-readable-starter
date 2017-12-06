import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import TextareaAutosize from 'react-autosize-textarea';
import { Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { addPost, toogle } from './actions';
import { guid } from '../utils';

class NewPost extends Component {
    state = {
        title: "",
		category: "",
		body: "",
		isOpen: true
    }

    createPost = () => {
        let newPost = {
            ...this.state,
            id: guid(),
            timestamp: Date.now()
        }
        this.props.addPost(newPost);
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

    render() {
        //Get categories from props
        const { categories, isOpen } = this.props;
        return (
            <Modal className="modal-lg" isOpen={isOpen}>
				<ModalHeader toggle={this.toggleModal}>Create Post</ModalHeader>
				<ModalBody>
                <div className="new-post-body">
                    <div className="new-post-row">
                        <input type="text"
                                name="title"
                                className="new-post-title"
                                placeholder="Insert Title here..."
                                value={this.state.title}
                                onChange={ event => this.setState({'title': event.target.value}) } />
                    
                        <Select simpleValue
                                name="category"
                                className="new-post-category"
                                value={this.state.category}
                                clearable={false}
                                onChange={ value => this.setState({'category': value})}
                                options={categories}
                                labelKey="name"
                                valueKey="name"/>
                    </div>
                    <div className="new-post-row">
                        <TextareaAutosize rows={3}
                                className="new-post-text-area"
                                placeholder="insert comment here..." 
                                value={this.state.body}
                                onChange={ event => this.setState({'body': event.target.value})} />
                    </div>                  
                </div> 
				</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={ () => this.createPost()}>Create</Button>{' '}
            		<Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
				</ModalFooter>
            </Modal>
        )
    }
}

function mapStateToProps ({categoriesList, newPostReducer}) {
	return {
		categories: categoriesList.items,
		isOpen: newPostReducer.isOpen
	}
}

function mapDispatchToProps (dispatch) {
	return {
		addPost: data => dispatch(addPost(data)),
		toogle: () => dispatch(toogle())
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(NewPost);