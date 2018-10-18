import React, { Component } from 'react';
import {  FooterTab, Text, Header, Content, Container, Item, Footer, Button, Input } from 'native-base';
import axios from 'axios';
import { connect } from 'react-redux';

import { createTodo ,fetchTodo } from '../actions/todo';

// import '../components/Redux';

class AddTodo extends Component {

	constructor(){
		super();
		this.state = {
			plan: ''
		}
	}

	addButton = () => {
		this.props.dispatch(createTodo({
			plan: this.state.plan
		})).then(() => {
			this.props.navigation.goBack()
		})
	}

	render(){
		if(this.state.plan === ''){
			submitButton = (
				<Button block disabled>
					<Text style={{ fontSize: 15, color: 'white' }}>Add</Text>
				</Button>
			)
		}else{
			submitButton = (
				<Button block style={{ backgroundColor: '#2ecc71' }} onPress={this.addButton}>
					<Text style={{ fontSize: 15, color: 'white' }}>Add</Text>
				</Button>
			)
		}

		return(
			<Container>
				<Header searchBar noShadow style={{ backgroundColor: null }}>
					<Item regular rounded>
						<Input placeholder='Add Todo' onChangeText={(plan) => this.setState({plan: plan})} />
					</Item>
				</Header>
				<Content />
				<Footer>
					<FooterTab>
						{submitButton}
					</FooterTab>
				</Footer>
			</Container>
		);
	}
}

const mapStateToProps = (state) => ({
	data: state.todoReducer
})

export default connect(mapStateToProps)(AddTodo)