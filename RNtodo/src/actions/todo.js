import axios from 'axios';

export function fetchTodo(){
	return {
		type: 'FETCH_TODO',
		payload: axios.get('http://192.168.56.1:3000/api/todo')
	};
}