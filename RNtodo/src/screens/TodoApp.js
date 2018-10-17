import React, { Component } from 'react';
import { Content, Spinner, List, Container, Header, Item, Input, ListItem, Text, Fab, Icon } from 'native-base';
import { FlatList } from 'react-native';
import axios from 'axios'


export default class TodoApp extends Component {
	componentDidMount(){
		this.props.fetchTodo();
	}

	render(){
		return(
			<Container>
				<Header searchBar noShadow style={{ backgroundColor: null }}>
					<Item regular rounded>
						<Icon name='ios-search' />
						<Input placeholder='Search' />
					</Item>
				</Header>
				<Content>
					<List>
						<FlatList
						 data={this.props.data.todoReducer.todos}
						 renderItem={({item}) => <ListItem><Text>{item.plan}</Text></ListItem>}
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