import axios from 'axios';

export function fetchTodo(){
	return {
		type: 'FETCH_TODO',
		payload: axios({
			method: 'GET',
			url: 'https://apiserveo.serveo.net/api/todo'
		})
	};
}

export function createTodo(data){
	return {
		type: 'CREATE_TODO',
		payload: axios({
			method: 'POST',
			url: 'https://apiserveo.serveo.net/api/todo',
			data: data
		})
	}
}

export function deleteTodo(id){
	return {
		type: 'DELETE_TODO',
		payload: axios({
			method: 'DELETE',
			url: `https://apiserveo.serveo.net/api/todo/${id}`
		})
	}
}