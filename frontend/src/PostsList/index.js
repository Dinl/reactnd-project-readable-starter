import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from '../Post/'
import { Row, Col } from 'reactstrap';
import CategoriesList from '../CategoriesList'
import FaPlusCircle from 'react-icons/lib/fa/plus-circle'
import SortMenu from '../SortMenu'
import NewPost from '../NewPost'
import { getPosts } from './actions'
import { toogle } from '../NewPost/actions'

class PostsList extends Component {

	componentDidMount() {
		const { match } = this.props;
		if ( match ) {
			const { params } = match;
			if(params && params.category) this.props.getPosts(params.category);
			else this.props.getPosts();
		}
		else {
			this.props.getPosts();
		}		
	};

	render() {
		const { match, detail, sortType } = this.props;		
		let { posts } = this.props;

		//Filter stage
		if( match ) {
			const { params } = match;
			if ( params && params.category) {
				posts = posts.filter(post => post.category === params.category);
			}
			if ( params && params.postId ) {
				posts = posts.filter(post => post.id === params.postId);
			}
		}
		//Sort stage
		posts.sort( (postA, postB) => {
			if(sortType === "vote-asc") return postA.voteScore > postB.voteScore;
			if(sortType === "vote-desc") return postA.voteScore < postB.voteScore;
			if(sortType === "date-asc") return postA.date < postB.date;
			if(sortType === "date-desc") return postA.date > postB.date;
			//Default will be same as vote-asc
			return postA.voteScore > postB.voteScore;
		})

		return (
			<div className="list-posts-frame">
				<Row className="padding-10t">
					<Col xs={12}>
						{!detail && <NewPost />}
					</Col>
				</Row>

				{!detail && 
				<Row>					
					<Col xs={9}>
						<CategoriesList />
					</Col>
					<Col xs={3}>
						<div className="add-post-frame" >
							<span>Add Post</span> 			
							<FaPlusCircle 
								className="add-button"
								size={30} 
								onClick={ () => this.props.toogleNewPost() } />
						</div>
					</Col>
					
				</Row>
				}			
				{!detail && 
				<Row>
					<Col xs={12}>
						<div className="post-list-summary">
							<div className="post-list-summary-result">
								<span> <b> {posts.length} </b> results found with <b> "query" </b> </span>
							</div>
							<div className="post-list-summary-filter">
								<SortMenu />
							</div>					
						</div>
					</Col>
				</Row>
				}
				<Row>
					<Col xs={12}>
					{posts && Array.isArray(posts) && posts.map( (post) => (
						<Post 
							key={post.id}
							post={post}
							detail={detail}
						/>
					))}
					</Col>
				</Row>
			</div>
		)
	}
}

function mapStateToProps ({ postsList, sortMenu }) {
	return {
		posts: postsList.items,
		sortType: sortMenu.sortType
	}
}

function mapDispatchToProps (dispatch) {
	return {
		getPosts: data => dispatch(getPosts(data)),
		toogleNewPost: data => dispatch(toogle())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);