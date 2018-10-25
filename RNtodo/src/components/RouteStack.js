import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import TodoApp from '../screens/TodoApp';
import AddTodo from '../screens/AddTodo';
import EditTodo from '../screens/EditTodo';

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
	}
},
{
	headerLayoutPreset: 'center'
})

export default RouteStack;