import React, { Component } from 'react';
import { Content, Body, List, Spinner, Container, Header, Item, Left, Right, Input, ListItem, Text, Fab, Icon, CheckBox } from 'native-base';
import { View } from 'react-native';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Alert } from 'react-native';

import { fetchUser, getUser, deleteUser } from '../actions/user';

class UserList extends Component {
	constructor(){
		super()
		this.state = {
			search: ''
		}
	}

	componentDidMount(){
		this.props.dispatch(fetchUser())
	}

	editButton(id){
		this.props.dispatch(getUser(id))
		.then(() => this.props.navigation.navigate('EditUser'))
	}

	deleteButton(name, id){
		Alert.alert(
			'Delete Todo',
			'Deleting ' + name,
			[
				{text: 'delete', onPress: () => this.props.dispatch(deleteUser(id))}
			]
		)
	}

	render(){
		if(this.props.data.fetching){
			return(
				<Spinner />
			)
		}

		const Filter = this.props.data.users.filter((item) => {
			return(item.name.toLowerCase().indexOf(this.state.search.toLowerCase())!==-1)
		})

		return(
			<Container>
				<Header searchBar noShadow style={{ backgroundColor: null }}>
					<Item regular rounded>
						<Icon name='ios-search' />
						<Input onChangeText={(search) => this.setState({search: search})} placeholder='Search' />
					</Item>
				</Header>
				<Content style={{ marginBottom: 50 }}>
					<List>
						<FlatList
						 data={Filter}
						 renderItem={({item}) => 
						 	<ListItem>
								<Body style={{ paddingLeft: 20, paddingRight: 20 }}>
								 	<Item>
										<Left>
											<Text>{item.name}</Text>
										</Left>
									</Item>
							 		<Text>{item.gender}</Text>
								</Body>
								<View>
									<Icon style={{ color: 'black' }} type='Feather' name="edit" onPress={() => this.editButton(item.id)}/>
									<Icon style={{ color: 'red', marginTop: 20 }} name="trash" onPress={() => this.deleteButton(item.name, item.id)}/>
								</View>
							</ListItem>
						}
						 keyExtractor={({id}, index) => index.toString()}
						/>
					</List>
				</Content>
				<Fab
				 active={8}
				 direction='up'
				 style={{ backgroundColor: '#2ecc71' }}
				 position='bottomRight'
				 onPress={() => {this.props.navigation.navigate('AddUser')}}
				>
					<Text style={{ fontWeight: 'bold' }}>+</Text>
				</Fab>
			</Container>
		);
	}
}

const mapStateToProps = (state) => ({
	data: state.userReducer
});

export default connect(mapStateToProps)(UserList);