import React from 'react';
import FaBolt from 'react-icons/lib/fa/bolt';
import { Route, Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

//Styles
import './App.css';

//Components
import PostsList from './Components/PostsList/';
import SearchBar from './Components/SearchBar'

const App = () => {
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
					<Route exact path="/:category" render={(props) => <PostsList {...props} />}  />	
					<Route exact path="/:category/:postId" render={(props) => <PostsList {...props} detail={true} />} />				
				</Col>
			</Row>
		</Container>
	);
}

export default App;
