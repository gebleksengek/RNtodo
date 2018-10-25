import axios from 'axios';

export function fetchTodo(){
	return {
		type: 'FETCH_TODO',
		payload: axios({
			method: 'GET',
			url: 'http://192.168.0.37:3000/api/todos'
		})
	};
}

export function getTodo(id){
	return {
		type: 'GET_TODO',
		payload: axios({
			method: 'GET',
			url: `http://192.168.0.37:3000/api/todos/${id}`
		})
	}
}

export function createTodo(data){
	return {
		type: 'CREATE_TODO',
		payload: axios({
			method: 'POST',
			url: 'http://192.168.0.37:3000/api/todos',
			data: data
		})
	}
}

export function updateTodo(id, data){
	return {
		type: 'UPDATE_TODO',
		payload: axios({
			method: 'PUT',
			url: `http://192.168.0.37:3000/api/todos/${id}`,
			data: data
		})
	}
}

export function deleteTodo(id){
	return {
		type: 'DELETE_TODO',
		payload: axios({
			method: 'DELETE',
			url: `http://192.168.0.37:3000/api/todos/${id}`,
		})
	}
}