import React, { Component } from 'react';
import { FooterTab, Form, Label, Spinner, Text, Content, Container, Item, Footer, Button, Input } from 'native-base';
import { connect } from 'react-redux';
import DateTimePicker from 'react-native-modal-datetime-picker';

import { createTodo } from '../actions/todo';

// import '../components/Redux';

class AddTodo extends Component {

	constructor(){
		super();
		this.state = {
			datePickerVisible: false,
			title: '',
			comment: '',
			time: null
		}
	}

	addButton = () => {
		this.props.dispatch(createTodo({
			title: this.state.title,
			comment: this.state.comment,
			time: this.state.time
		}))
	}

	dateConfirm = (date) => {
		this.setState({ 
			datePickerVisible: false,
			time: date.toISOString().replace('T', ' ').replace('.000Z', ' ')
		})
	}

	render(){
		if(this.props.data.fetching){
			return(
				<Spinner />
			)
		}

		if(this.state.title === ''){
			submitButton = (
				<Button block disabled>
					<Text style={{ fontSize: 15, color: 'white' }}>Add</Text>
				</Button>
			)
		}else if(this.state.comment === ''){
			submitButton = (
				<Button block disabled>
					<Text style={{ fontSize: 15, color: 'white' }}>Add</Text>
				</Button>
			)
		}else if(this.state.time === null){
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
				<Content>
					<Form>
						<Item floatingLabel>
							<Label>Title</Label>
							<Input onChangeText={(text) => this.setState({ title: text })} />
						</Item>
						<Item floatingLabel>
							<Label>Comment</Label>
							<Input onChangeText={(text) => this.setState({ comment: text })}/>
						</Item>
						<Item stackedLabel>
							<Label>Date</Label>
							<Button transparent onPress={() => this.setState({ datePickerVisible: true })}>
								<Text>{this.state.time? this.state.time : "select the date" }</Text>
							</Button>
						</Item>
					</Form>
					<DateTimePicker
					 isVisible={this.state.datePickerVisible}
					 onConfirm={this.dateConfirm}
					 onCancel={() => this.setState({ datePickerVisible: false })}
					 mode='datetime'
					 datePickerModeAndroid='spinner'
					/>
				</Content>
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