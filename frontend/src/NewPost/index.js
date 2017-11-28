import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select';
import TextareaAutosize from 'react-autosize-textarea';
import { addPost } from './actions'
import { guid } from '../utils'

class NewPost extends Component {
    state = {
        title: "",
		category: "",
        body: "",
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

    render() {
        //Get categories from props
        const { categories } = this.props;

        return (
            <div>
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
                    <div className="new-post-row">
                        <div className="new-post-controls" >
                            <div className="button clear-button" onClick={ () => this.clearPost() }>
                                <span>Clear!</span>
                            </div>
                            <div className="button create-button" onClick={ () => this.createPost()}>
                                <span>Create!</span>
                            </div>
                        </div>
                    </div>                    
                </div>
                
            </div>
        )
    }
}

function mapStateToProps ({categoriesList}) {
	return {
        categories: categoriesList.items
	}
}

function mapDispatchToProps (dispatch) {
	return {
        addPost: data => dispatch(addPost(data))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(NewPost);