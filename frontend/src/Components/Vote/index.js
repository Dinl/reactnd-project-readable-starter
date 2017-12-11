import React, { Component } from 'react';
import { connect } from 'react-redux';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down';

import { votePost } from './actions'

class Vote extends Component {

    render() {

        const { postId, voteScore } = this.props;

        return (
            <div className="vote-frame">							
                <div className="vote-up">
                    <FaThumbsOUp onClick={ () => this.props.votePost(postId, "upVote") } />
                </div>
                <div className="vote-number">
                    {voteScore}
                </div>
                <div className="vote-down">
                    <FaThumbsODown onClick={ () => this.props.votePost(postId, "downVote") } />
                </div>							
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
		votePost: (id, vote) => dispatch(votePost(id, vote))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Vote);