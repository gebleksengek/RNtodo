const initialState = {
	fetching: false,
	fetched: false,
	error: null,
	hello: 'hello world',
	todos: []
}

const todoReducer = function(state=initialState, action){
	switch(action.type) {
		case 'FETCH_TODO_FETCHING':
			return {...state, fetching: true}
			break;
		case 'FETCH_TODO_FULFILLED':
			return {...state, fetching: false, fetched: true, todos: action.payload.data}
			break;
		case 'FETCH_TODO_REJECTED':
			return {...state, fetching: false, error: action.payload}
			break;
	}
	return state;
}

export default todoReducer;