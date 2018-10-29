import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { logger } from 'redux-logger'

import appReducer from './reducers/index';

const middleware = applyMiddleware(logger, thunk, promise());

const store = createStore(appReducer, middleware);

export default store;





// //store

// store = {
//     todoList: [],
//     todoItem: {},
//     isLoading: false
// }

// // TodoList.js

// const todoList = store.todoList

// //TodoForm.js

// function handleSubmit(){
//     Todo.insert({title: "abc"})
//     const todos = Todo.findAll()
//     store.setState({todoList: todos})
// }


// //store.js

// import {createStore} from 'redux'
// import todoReducer from './todoReducer'
// import userReducer from './userReducer'

// const reducers = combineReducers(todoReducer, userReducer)Z
// const store = createStore(reducers)
// export default store


// //userReducer.js
// const initialState = {
//     queryResult: [],
//     data: {},
//     isLoading: false
// }

// //todoReducer.js

// const initialState = {
//     queryResult: [],
//     data: {},
//     isLoading: false
// }

// const reducer = function(state=initialState, action){
//     if (action.type == "ALL_TODOS"){
//         return {...state, queryResult: action.payload}
//     }
// }

// export default reducer


// //todoAction.js

// export function allTodos(){
//     return {
//         type: "ALL_TODOS",
//         payload: [
//             {id: 1, title: "masak"},
//             {id: 2, title: "minum"}
//         ]
//     }
// }

// axios.get().then((result)=>{
//     result.data
// })

// //TodoList.js
// import { connect } from 'react-redux'
// import { allTodos } from 'todoAction'

// class TodoList extends Component {todos

//     componentDidMount(){
//         this.props.dispatch(allTodos())
//     }
//     switch(action.type) {switch(action.type) {
// 		case 'FETCH_TODO_PENDING':
// 			return {...state, fetching: true}
// 			bre
// 		case 'FETCH_TODO_PENDING':
// 			return {...state, fetching: true}
// 			bre
//     render(){switch(action.type) {
// 		case 'FETCH_TODO_PENDING':
// 			return {...state, fetching: true}
// 			bre
//         <List>
//             {this.props.users.queryResult}

//             {this.props.todos.queryResult.map((todo)=>(
//                 <ListItem key={todo.id}>
//                     <Text>{todo.title}</Text>
//                 </ListItem>
//             ))}
//         </List>
//     }

// }

// const mapStateToProps = (state)=>({
//     todos: state.todos
// })

// export default connect(mapStateToProps)(TodoList)