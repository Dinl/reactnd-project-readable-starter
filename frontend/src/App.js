import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';
import FaBolt from 'react-icons/lib/fa/bolt'
import SearchBar from './SearchBar'
import './App.css';

//Components
import PostsList from './PostsList/';


class App extends Component {
	render() {
		return (
			<Container className="App main-frame">
				<Row className="main-header">
					<Col xs="3">
						<Link className="main-icon" to="/">
							<FaBolt size={30} />
							<b>Super Readable</b>
						</Link>
					</Col>
					<Col xs="9">
						<SearchBar />
					</Col>
				</Row>
				<Row>
					<Col xs="12" className="main-body no-padding-left no-padding-right">
						<Route exact path="/" render={() => <PostsList  />}  />	
						<Route exact path="/category/:category" render={(props) => <PostsList {...props} />}  />	
						<Route exact path="/post/:postId" render={(props) => <PostsList {...props} detail={true} />} />				
					</Col>
				</Row>
			</Container>
		);
	}
}

export default App;
