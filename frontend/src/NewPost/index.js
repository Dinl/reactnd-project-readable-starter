import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from './actions'

class NewPost extends Component {
    state = {
        title: "something",
		category: "react",
        body: "something",
        timestamp: Date.now()
    }

    createPost = function (params) {
        this.props.addPost(this.state);
    }

    render() {
        return (
            <div>
                <div className="new-post-controls" >
                    <div className="button create-button" onClick={ () => this.createPost()}>
                        <span>Create!</span>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({categoriesList}) {
	return {
	}
}

function mapDispatchToProps (dispatch) {
	return {
        addPost: data => dispatch(addPost(data))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(NewPost);