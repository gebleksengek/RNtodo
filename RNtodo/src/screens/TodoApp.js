import React, { Component } from 'react';
import { Content, Spinner, List, Container, Header, Item, Input, ListItem, Text, Fab, Icon } from 'native-base';
import { FlatList } from 'react-native';
import axios from 'axios'


export default class TodoApp extends Component {
	constructor(){
		super();
		this.state = {
			isLoading: true
		}
	}

	componentDidMount(){
		axios.get('http://192.168.56.1:3000/api/todo')
		 .then((response) => {
		 	this.setState({
		 		data: response.data,
		 		isLoading: false
		 	})
		 })
	}

	render(){
		if(this.state.isLoading){
			return(
				<Container>
					<Spinner />
				</Container>
			)
		}

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
						 data={this.state.data}
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