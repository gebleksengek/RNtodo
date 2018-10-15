import React, { Component } from 'react';
import {  FooterTab, Text, Header, Content, Container, Item, Footer, Button, Input } from 'native-base';

// import '../components/Redux';

export default class AddTodo extends Component {

	constructor(){
		super();
		this.state = {
			plan: ''
		}
	}

	addButton = () => {
		fetch('http://192.168.56.1:3000/api/todo', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				plan: this.state.plan
			})
		});
		this.props.navigation.goBack()
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