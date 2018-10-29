import axios from 'axios';

export function fetchUser(){
	return {
		type: 'FETCH_USER',
		payload: axios({
			method: 'GET',
			url: 'http://192.168.0.37:3000/api/users'
		})
	};
}

export function getUser(id){
	return {
		type: 'GET_TODO',
		payload: axios({
			method: 'GET',
			url: `http://192.168.0.37:3000/api/users/${id}`
		})
	}
}

export function createUser(data){
	return {
		type: 'CREATE_USER',
		payload: axios({
			method: 'POST',
			url: 'http://192.168.0.37:3000/api/users',
			data: data
		})
	}
}

export function updateUser(id, data){
	return {
		type: 'UPDATE_USER',
		payload: axios({
			method: 'PUT',
			url: `http://192.168.0.37:3000/api/users/${id}`,
			data: data
		})
	}
}

export function deleteUser(id){
	return {
		type: 'DELETE_USER',
		payload: axios({
			method: 'DELETE',
			url: `http://192.168.0.37:3000/api/users/${id}`,
		})
	}
}