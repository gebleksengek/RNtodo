import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import TodoApp from '../screens/TodoApp';
import AddTodo from '../screens/AddTodo';
import EditTodo from '../screens/EditTodo';
import UserList from '../screens/UserList';
import AddUser from '../screens/AddUser';
import EditUser from '../screens/EditUser';

RouteStack = createStackNavigator({
	Main: {
		screen: TodoApp,
		navigationOptions: {
			title: 'TODO APP',
			headerTintColor: 'white',
			headerTitleStyle: {
				color: 'white',
				fontWeight: 'bold'
			},
			headerStyle: {
				backgroundColor: '#2ecc71',
			}
		}
	},
	Add: {
		screen: AddTodo,
		navigationOptions: {
			title: 'Add Todo',
			headerTintColor: 'white',
			headerTitleStyle: {
				color: 'white',
				fontWeight: 'bold'
			},
			headerStyle: {
				backgroundColor: '#2ecc71'
			}
		}
	},
	Edit: {
		screen: EditTodo,
		navigationOptions: {
			title: 'Edit Todo',
			headerTintColor: 'white',
			headerTitleStyle: {
				color: 'white',
				fontWeight: 'bold'
			},
			headerStyle: {
				backgroundColor: '#2ecc71'
			}
		}
	},
	User: {
		screen: UserList,
		navigationOptions: {
			title: 'User List',
			headerTintColor: 'white',
			headerTitleStyle: {
				color: 'white',
				fontWeight: 'bold'
			},
			headerStyle: {
				backgroundColor: '#2ecc71'
			}
		}
	},
	AddUser: {
		screen: AddUser,
		navigationOptions: {
			title: 'Add User',
			headerTintColor: 'white',
			headerTitleStyle: {
				color: 'white',
				fontWeight: 'bold'
			},
			headerStyle: {
				backgroundColor: '#2ecc71'
			}
		}
	},
	EditUser: {
		screen: EditUser,
		navigationOptions: {
			title: 'Edit User',
			headerTintColor: 'white',
			headerTitleStyle: {
				color: 'white',
				fontWeight: 'bold'
			},
			headerStyle: {
				backgroundColor: '#2ecc71'
			}
		}
	},
},
{
	headerLayoutPreset: 'center'
})

export default RouteStack;