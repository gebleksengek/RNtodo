import axios from 'axios';

export function fetchTodo(){
	return {
		type: 'FETCH_TODO',
		payload: axios({
			method: 'GET',
			url: 'http://192.168.56.1:3000/api/todo'
		})
	};
}

export function createTodo(data){
	return {
		type: 'CREATE_TODO',
		payload: axios({
			method: 'POST',
			url: 'http://192.168.56.1:3000/api/todo',
			data: data
		})
	}
}

export function deleteTodo(id){
	return {
		type: 'DELETE_TODO',
		payload: axios({
			method: 'DELETE',
			url: `http://192.168.56.1:3000/api/todo/${id}`
		})
	}
}