const initialState = {
	fetching: false,
	fetched: false,
	error: null,
    users: [],
    editUser: {}
}

const todoReducer = function(state=initialState, action){
	switch(action.type) {
		case 'FETCH_USER_PENDING':
			return {...state, fetching: true}
			break;
		case 'FETCH_USER_FULFILLED':
			return {...state, fetching: false, fetched: true, users: action.payload.data}
			break;
		case 'FETCH_USER_REJECTED':
			return {...state, fetching: false, error: action.payload}
            break;
            
        case 'GET_USER_PENDING':
			return {...state, fetching: true}
			break;
		case 'GET_USER_FULFILLED':
			return {...state, fetching: false, fetched: true, editUser: action.payload.data}
			break;
		case 'GET_USER_REJECTED':
			return {...state, fetching: false, error: action.payload}
			break;

		case 'CREATE_USER_PENDING':
			return {...state, fetching: true}
			break;
		case 'CREATE_USER_FULFILLED':
			return {...state, fetching: false, fetched: true, users: [...state.users, action.payload.data] }
			break;
		case 'CREATE_USER_REJECTED':
			return {...state, fetching: false, error: action.payload}
			break;

		case 'UPDATE_USER_PENDING':
			return {...state, fetching: true}
			break;
		case 'UPDATE_USER_FULFILLED':
			return {...state, fetching: false, fetched: true, users: action.payload.data}
			break;
		case 'UPDATE_USER_REJECTED':
			return {...state, fetching: false, error: action.payload}
			break;

		case 'DELETE_USER_PENDING':
			return {...state, fetching: true}
			break;
		case 'DELETE_USER_FULFILLED':
			return {...state, fetching: false, fetched: true, users: state.users.filter(item => item.id !== action.payload.data)}
			break;
		case 'DELETE_USER_REJECTED':
			return {...state, fetching: false, error: action.payload}
			break;

		default:
			return state;
	}
}

export default todoReducer;