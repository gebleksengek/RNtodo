const reducer = function(state=initialState, action){
	switch (action.type){
		case 'FETCH_TODO_PENDING':
			return {...state, fetching: true}
			break;
		case 'FETCH_TODO_FULFILLED':
			return {...state, fetching: false, fatched: true, todo: action.payload}
			break;
		case 'FETCH_TODO_REJECTED':
			return {...state, fetching: false, error: action.payload}
			break;
		default:

	}
}

export default reducer;