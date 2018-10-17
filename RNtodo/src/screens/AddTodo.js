import React, { Component } from 'react';
import {  FooterTab, Text, Header, Content, Container, Item, Footer, Button, Input } from 'native-base';
import axios from 'axios';
import { connect } from 'react-redux';

import { fetchTodo } from '../actions/todo';

// import '../components/Redux';

class AddTodo extends Component {

	constructor(){
		super();
		this.state = {
			plan: ''
		}
	}

	addButton = () => {
		axios.post('http://192.168.56.1:3000/api/todo', {
			plan: this.state.plan
		}).then(() => {
			this.props.dispatch(fetchTodo());
			this.props.navigation.goBack()
		})
	}

	render(){
		return(
			<Container>
				<Header searchBar noShadow style={{ backgroundColor: null }}>
					<Item regular rounded>
						<Input placeholder='Add Todo' onChangeText={(plan) => this.setState({plan})} />
					</Item>
				</Header>
				<Content />
				<Footer>
					<FooterTab>
						<Button block style={{ backgroundColor: '#2ecc71' }} onPress={this.addButton}>
							<Text style={{ fontSize: 15, color: 'white' }}>Add</Text>
						</Button>
					</FooterTab>
				</Footer>
			</Container>
		);
	}
}

const mapStateToProps = (state) => ({
	
})

export default connect(mapStateToProps)(AddTodo)