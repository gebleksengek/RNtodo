import React, { Component } from 'react';
import { Content, List, Spinner, Container, Header, Item, Input, ListItem, Text, Fab, Icon } from 'native-base';
import { FlatList } from 'react-native';
import axios from 'axios'
import { connect } from 'react-redux';
import { Alert } from 'react-native';

import { fetchTodo, deleteTodo } from '../actions/todo';

class TodoApp extends Component {
	constructor(){
		super()
		this.state = {
			search: ''
		}
	}

	componentDidMount(){
		this.props.dispatch(fetchTodo())
	}

	deleteConfirm(todo, id){
		Alert.alert(
			'Delete Todo',
			'Deleting' + todo,
			[
				{text: 'delete', onPress: () => this.deleteButton(id)}
			]
		)
	}

	deleteButton(id){
		this.props.dispatch(deleteTodo(id))
	}

	render(){
		if(this.props.data.fetching){
			return(
				<Content>
					<Spinner />
				</Content>
			)
		}

		const Filter = this.props.data.todos.filter((item) => {
			return(item.plan.toLowerCase().indexOf(this.state.search.toLowerCase())!==-1)
		})

		return(
			<Container>
				<Header searchBar noShadow style={{ backgroundColor: null }}>
					<Item regular rounded>
						<Icon name='ios-search' />
						<Input onChangeText={(search) => this.setState({search: search})} placeholder='Search' />
					</Item>
				</Header>
				<Content>
					<List>
					<FlatList
						 data={Filter}
						 renderItem={({item}) => <ListItem onPress={() => this.deleteConfirm(item.plan, item._id)}><Text>{item.plan}</Text></ListItem>}
						 keyExtractor={({_id}, index) => _id}
						/>
					</List>
				</Content>
				<Fab
				 active={8}
				 direction='up'
				 style={{ backgroundColor: '#2ecc71' }}
				 position='bottomRight'
				 onPress={() => {this.props.navigation.navigate('Add')}}
				>
					<Text style={{ fontWeight: 'bold' }}>+</Text>
				</Fab>
			</Container>
		);
	}
}

const mapStateToProps = (state) => ({
	data: state.todoReducer
});

export default connect(mapStateToProps)(TodoApp);